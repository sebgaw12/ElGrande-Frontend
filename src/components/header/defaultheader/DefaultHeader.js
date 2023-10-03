import {Link} from "react-router-dom";
import React from "react";

const DefaultHeader = () => {
    return (
        <header className="bg-blue-500 px-4 flex justify-between items-center h-[4vh]">
            <h1 className="text-white text-2xl font-bold">FoodSpot</h1>

            <div className="flex items-center space-x-2 w-[20vw] ">
                <Link to="/register">
                    <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-3 py-1 rounded-lg
                        h-[2.1vh] w-[8vw] min-w-[6.7vw]">
                        Zarejestruj się
                    </button>
                </Link>

                <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm px-3 py-1 rounded-lg
                        h-[2.1vh] w-[8vw] min-w-[6.7vw]">
                    <Link to="/login">
                        Zaloguj się
                    </Link>

                </button>
            </div>
        </header>
    )
}

export default DefaultHeader
