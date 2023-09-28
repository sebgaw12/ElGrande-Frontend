import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen">
            <div className="font-bold font-sans text-6xl p-40">WYSTĄPIŁ BŁĄD</div>
            <Link to="/">
                <button className="border-black border-2 p-2 bg-blue-200">Back to main page</button>
            </Link>
        </div>
    )

}

export default ErrorPage
