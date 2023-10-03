import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "../components/landingpage/LandingPage";
import MainPage from "../components/mainpage/MainPage";
import Error from "../components/error/ErrorPage";
import RestaurantRegisterForm from "../components/restaurantform/RestaurantRegisterForm";
import UserLoginForm from "../components/login/UserLoginForm";
import UserRegisterForm from "../components/registerform/UserRegisterForm";
import {UnauthorizedRoute} from "../components/UnauthorizedRoute";
import {ProtectedRoute} from "../components/ProtectedRoute";
import CustomerDetails from "../components/customer/CustomerDetails";

const Routing = () => (
    <div className="max-h-screen">
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="*" element={<Error/>}/>
                <Route path="/main-page" element={<MainPage/>}/>
                <Route path="/register" element={<UserRegisterForm/>}/>
                <Route path="/restaurant" element={
                    <ProtectedRoute>
                        <RestaurantRegisterForm/>
                    </ProtectedRoute>
                }/>
                <Route path="/login" element={
                    <UnauthorizedRoute>
                        <UserLoginForm/>
                    </UnauthorizedRoute>
                }/>
                <Route path="/profile" element={
                    <ProtectedRoute>
                        <CustomerDetails/>
                    </ProtectedRoute>
                }/>
            </Routes>
        </Router>
    </div>
)

export default Routing;
