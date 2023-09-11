import {Link} from "react-router-dom";
import Footer from "../footer/Footer";
import logo from "../FoodSpotWhite.jpg"

const LandingPage = () => (
    <div>
        <img alt="logo" src={logo}/><br/><br/>
        <button>Log In</button>
        <button>Sign In</button>
        <Link to="/main-page">
            <button>View Page</button>
        </Link>
        <Footer />
    </div>
)

export default LandingPage;
