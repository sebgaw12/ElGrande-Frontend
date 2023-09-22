import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../landingpage/LandingPage";
import MainPage from "../mainpage/MainPage";
import LoginForm from "../loginform/LoginForm";
import RegisterForm from "../registerform/RegisterForm";
import Error from "../error/ErrorPage";
import RestaurantRegisterForm from "../restaurantregister/RestaurantRegister";

const Routing = () => (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={ <LandingPage /> } />
                <Route path="*" element={<Error />} />
                <Route path="/main-page" element={ <MainPage /> } />
                <Route path="/register" element={ <RegisterForm /> } />
                <Route path="/login" element={ <LoginForm /> } />
                <Route path="/restaurant" element={<RestaurantRegisterForm />} />
            </Routes>
        </Router>
    </div>
)

export default Routing;
