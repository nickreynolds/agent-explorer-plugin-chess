import { IMessage } from "@veramo/core-types"
import { Button } from "antd";
import { Chess } from "chess.js";
import React, { useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";
// import { ChatBubbleProps } from "./ChatBubble.js"
interface ChatBubbleProps {
    message: IMessage & { isSender: boolean },
}

export const ChessMoveMessage = ({ message }: ChatBubbleProps) => {
    const gameId = message.threadId
    const navigate = useNavigate()
    // @ts-ignore
    const { prevFen } = message.data
    const [game, setGame] = React.useState(new Chess(prevFen));
    const [moved, setMoved] = React.useState(false)
    
    useEffect(() => {
        const animate = async () => {
            if (moved) {
                game.undo()
                setGame(game)
                setMoved(false)
            } else {
                // @ts-ignore
                game.move(message.data.move)
                setGame(game)
                setMoved(true)
            }
        }
        const interval = setInterval(() => animate(), 1000)
        return () => clearInterval(interval)
    })
    console.log("show chessboard.")
    return (
        <div style={{minWidth: 300, minHeight: 300}}>
            Move: {message.data?.content!}
            <Chessboard position={game.fen()} />
            <Button onClick={() => navigate(`/chess/games/${gameId}`)}>View Game</Button>
        </div>
    )
}