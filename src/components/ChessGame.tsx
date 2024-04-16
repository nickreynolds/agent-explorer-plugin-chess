import * as React from "react";
import { ICredentialIssuer, IDataStore, IDataStoreORM, UniqueVerifiableCredential } from "@veramo/core";
import { MarkDown } from "@veramo-community/agent-explorer-plugin";
import { Table, Tag, Typography, notification, theme } from "antd";
import { useVeramo } from "@veramo-community/veramo-react";
import { useQuery } from "react-query";
import { createWitnessHash, getTimestamp } from "../api.js";
import { Chess, Piece, Square } from "chess.js";
import { Chessboard } from "react-chessboard";
import { v4 } from "uuid";

export const ChessGame: React.FC<{credential: UniqueVerifiableCredential, context?: any}> = ({ credential, context }) => {
  console.log("ChessGame.")
  const { agent } = useVeramo<IDataStoreORM & IDataStore & ICredentialIssuer>()
  const { token } = theme.useToken()
  const [validVotes, setValidVotes] = React.useState<string[]>([])
  const { title, pollOptions } = credential.verifiableCredential.credentialSubject
  const credHash = credential.hash
  const [game, setGame] = React.useState(new Chess());

  const { data: moves, refetch } = useQuery(
    [
      'chessMoves',
      {credHash,  agentId: agent?.context.name },
    ],
    () =>
      agent?.dataStoreORMGetVerifiableCredentialsByClaims({
        where: [
          {
            column: 'type',
            value: ['inviteHash'],
          },
          {
            column: 'value',
            value: [credHash],
          },
          {
            column: 'credentialType',
            value: ['VerifiableCredential,ChessGameMove'],
          },
        ],
        order: [{ column: 'issuanceDate', direction: 'ASC' }],
      }),
  )

  React.useEffect(() => {
    if (moves) {
      console.log("found moves: ", moves)
      setGame(new Chess())
      moves.forEach((move) => {
        console.log("make move: ", move.verifiableCredential.credentialSubject.move)
        const moveData = move.verifiableCredential.credentialSubject.move
        makeAMove(moveData)
      })
    }
  }, [moves])

  function makeAMove(move: any) {
    const gameCopy = { ...game }
    const result = gameCopy.move(move)

    setGame(gameCopy)
    return result // null if the move was illegal, the move object if the move was legal
  }

  function onDrop(sourceSquare: Square, targetSquare: Square, piece: Piece) {
    const preGameCopy = { ...game }
    let issuer = ''
    let opponent = ''
    if (game.turn() === 'b') {
      issuer = credential.verifiableCredential.credentialSubject.black
      opponent = credential.verifiableCredential.credentialSubject.white
    } else {
      issuer = credential.verifiableCredential.credentialSubject.white
      opponent = credential.verifiableCredential.credentialSubject.black
    }
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    })

    // illegal move
    if (move === null) return false

    async function issueAndSendMoveCredential() {
      console.log("preGameCopy: ", preGameCopy)
      const identifier = await agent?.didManagerGet({ did: issuer })
      const usableProofs = await agent?.listUsableProofFormats(identifier)
      const proofFormat = usableProofs?.includes('jwt') ? 'jwt' : usableProofs![0]


      const moveCredential = await agent?.createVerifiableCredential({
        proofFormat,
        credential: {
          issuer,
          type: ['VerifiableCredential', 'ChessGameMove'],
          credentialSubject: {
            inviteHash: credHash,
            move: move,
          },
        },
      })
      if (moveCredential) {
        const res = await agent?.dataStoreSaveVerifiableCredential({ verifiableCredential: moveCredential! })
        console.log("res: ", res)
        // const witnessHash = createWitnessHash(credhash!)
        // await postLeaf(witnessHash)
        const shareMessage = {
          type: 'https://didcomm.org/chess/1.0/move',
          from: issuer,
          created_time: new Date().getTime(),
          to: opponent,
          id: v4(),
          thid: credHash,
          attachments: [{
            media_type: 'credential+ld+json',
            data: { json: moveCredential }
          }]
        }
        const packedMessage = await agent?.packDIDCommMessage({ 
          message: shareMessage, 
          packing: 'authcrypt' 
        })
  
        const sendRes = await agent?.sendDIDCommMessage({ 
          packedMessage: packedMessage!, 
          messageId: shareMessage.id, 
          recipientDidUrl: opponent! 
        })
  
        await agent?.dataStoreSaveMessage({ message: {
          type: shareMessage.type,
          from: issuer,
          to: opponent,
          id: shareMessage.id,
          threadId: shareMessage.thid,
          data: {  },
          attachments: shareMessage.attachments
        } })
  
        notification.success({
          message: 'Message sent'
        })
      }
    }
    issueAndSendMoveCredential()
    return true
  }

    //   console.log("credentials: ", credentials)
  //   React.useEffect(() => {
  //       async function getWitnessed() {
  //           if (credentials) {
  //               let validVotesTemp = []
  //               for (var cred of credentials) {
  //                   try {
  //                       const result = await getTimestamp(createWitnessHash(cred.hash))
  //                       if (result) {
  //                           console.log("found witnesed vote hash: ", cred.hash)
  //                           //setValidVotes(validVotes.set(cred.hash, true))
  //                           validVotesTemp.push(cred.hash)
  //                       } else {
  //                           console.log("not a witnessed vote. hash: ", cred.hash)
  //                       }
  //                   } catch (ex) {
  //                       console.log("not sure: ", ex)
  //                   }
  //               }
  //               setValidVotes(validVotesTemp)
  //           }
  //       }
  //       getWitnessed()
  //   },[credentials])
  // const map = new Map<string,number>()
  // const witnessedMap = new Map<string,number>()
  // pollOptions.forEach((po: any) => {
  //   map.set(po, 0)
  //   witnessedMap.set(po, 0)
  // })

  // console.log("valid votes: ", validVotes)

  // credentials?.forEach((vote) => {
  //   const option = vote.verifiableCredential.credentialSubject.option
  //   // TODO: check if vote valid
  //   map.set(option, (map.get(option) || 0) + 1)

  //   if (validVotes.includes(vote.hash)) {
  //       console.log("found a witnessed vote. hash: ", vote.hash)
  //       witnessedMap.set(option, (witnessedMap.get(option) || 0) + 1)
  //   }
  // })

  // let pollResults = [{}]
  // map.forEach((count, option) => {
  //   pollResults = [...pollResults, { option, count, validCount: witnessedMap.get(option) }]
  // })
  
  return (
    <div style={{marginTop: token.margin}}>      
      <Chessboard position={game.fen()} onPieceDrop={onDrop} />
    </div>
  )
}
