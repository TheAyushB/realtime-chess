import { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../screens/Game";

export const ChessBoard = ({ board, socket, chess, setBoard }: {
    chess: any;
    setBoard: any;
    board: ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][];
    socket: WebSocket;
}) => {
    const [from, setFrom] = useState<null | Square>(null);
    const [to, setTo] = useState<null | Square>(null);

    return <div className="text-white-200">
        {board?.map((row, i) => {
            return <div key={i} className="flex">
                {row.map((square, j) => {
                    const squareRepresentation = String.fromCharCode(97 + (j % 8)) + "" + (8 - i) as Square;
                    return <div onClick={() => {
                        if (!from) {
                            setFrom(squareRepresentation);
                        } else {
                            setTo(square?.square ?? null);
                            socket.send(JSON.stringify({
                                type: MOVE,
                                payload: {
                                    from,
                                    to: squareRepresentation
                                }
                            }))
                            setFrom(null);
                            chess.move({
                                from,
                                to: squareRepresentation
                            })
                            setBoard({
                                from,
                                to: squareRepresentation
                            })
                            console.log({
                                from,
                                to: squareRepresentation
                            });

                        }
                    }} key={j} className={`w-20 h-20 ${(i + j) % 2 === 0 ? 'bg-lime-500' : 'bg-lime-300'}`}>
                        <div className="w-full justify-center flex h-full">
                            <div className="h-full justify-center flex flex-col">{square ? square.type : ""}
                            </div>
                        </div>
                    </div>
                })
                }
            </div>
        })}
    </div>
}