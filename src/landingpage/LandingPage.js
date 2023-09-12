import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import logo  from "../images/FoodSpotWhite.jpg"

const buttonStyle = "rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white"

const LandingPage = () => (
  <div>
    <img alt="logo" src={logo} /><br />

    <Link to="/login">
        <button className={buttonStyle}>Log In</button>
    </Link>

    <Link to="/register">
        <button className={buttonStyle}>Register</button>
    </Link>

    <Link to="/main-page">
      <button className={buttonStyle}>View Page</button>
    </Link>
    
    <Footer />
  </div>
)

export default LandingPage;
