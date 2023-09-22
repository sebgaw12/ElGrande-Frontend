import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import logo from "../static/FoodSpotWhite.png"

const LandingPage = () => {
    const buttonStyle = "bg-white border-2 border-black p-2 m-2"
    return (
        <div className="h-screen">
            <div className="flex flex-col items-center">
                <img alt="logo" src={logo}/>
                <div className="space-x-4">
                    <Link to="/login">
                        <button className={buttonStyle}>Log In</button>
                    </Link>
                    <Link to="/register">
                        <button className={buttonStyle}>Register</button>
                    </Link>
                    <Link to="/main-page">
                        <button className={buttonStyle}>View Page</button>
                    </Link>
                </div>
            </div>
            <div className="mt-5">
                <Footer/>
            </div>
        </div>
    )
}

export default LandingPage;
