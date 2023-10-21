import React from "react";

const Loader = () => {
    return (
        // <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="p-2 rounded-xl m-4 bg-gray-300 shadow-md shadow-gray-500">
                <div className="animate-pulse flex space-x-4 justify-between">
                    <div className="rounded-full bg-slate-700 h-10 w-10 ml-4"></div>
                    <div className="h-2 bg-slate-700 rounded w-1/3 mt-3"></div>
                    <div className="h-2 bg-slate-700 rounded w-1/3 mt-3 mr-10"></div>
                </div>
            {/*</div>*/}
        </div>
    )
}

export default Loader
