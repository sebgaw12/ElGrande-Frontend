import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "../landingpage/LandingPage";
import MainPage from "../mainpage/MainPage";

const Routing = () => (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={ <LandingPage /> } />
                <Route path="/main-page" element={ <MainPage /> } />
                <Route path="/register" element={ <RegisterForm /> } />
                <Route path="/login" element={ <LoginForm /> } />
            </Routes>
        </Router>
    </div>
)

export default Routing
