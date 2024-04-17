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

export const ChessInviteMessage = ({ message }: ChatBubbleProps) => {
    const gameId = message.threadId
    const navigate = useNavigate()
    // @ts-ignore
    // const { prevFen } = message.data
    const game = new Chess()
    
    return (
        <div style={{minWidth: 300, minHeight: 300}}>
            <Chessboard position={game.fen()} />
            <Button onClick={() => navigate(`/chess/games/${gameId}`)}>View Game</Button>
        </div>
    )
}