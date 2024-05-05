import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";


export const Landing = () => {
    const navigate = useNavigate();
    return <div className="flex justify-center">
        <div className="pt-12 px-4 max-w-screen-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex justify-center">
                    <img src="/chessboard.jpg" alt="Chess Board" className="max-w-96 rounded" />
                </div>

                <div className="pt-16 ">
                    <div className="flex justify-center ">
                        <h1 className="text-4xl text-white font-bold">Play Chess Online On The #3 Site!</h1>

                    </div>
                    <div className="mt-8 flex justify-center pt-5">
                        <Button onClick={() => {
                            navigate("/game")
                        }}>
                            Play Online
                        </Button>

                    </div>
                </div>

            </div>
        </div>
    </div>
}