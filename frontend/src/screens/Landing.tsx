

export const Landing = () => {
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
                    <div className="mt-4 flex justify-center pt-5">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 text-2xl rounded">Play Online</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
}