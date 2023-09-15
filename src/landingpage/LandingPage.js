import {Link} from "react-router-dom";
import Footer from "../footer/Footer";
import logo from "../static/FoodSpotWhite.png"

const LandingPage = () => (
    <div className="h-screen">
        <div className="flex flex-col items-center">
            <img alt="logo" src={logo}/>
            <div className="space-x-4">
                <button className="bg-white border-2 border-black p-2 m-2">Log In</button>
                <button className="bg-white border-2 border-black p-2 m-2">Sign In</button>
                <Link to="/main-page">
                    <button className="bg-white border-2 border-black p-2 m-2">View Page</button>
                </Link>
            </div>
        </div>
        <div className="mt-5">
            <Footer/>
        </div>
    </div>
)

export default LandingPage;
