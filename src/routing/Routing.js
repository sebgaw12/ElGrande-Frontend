import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "../components/landingpage/LandingPage";
import MainPage from "../components/mainpage/MainPage";
import RegisterForm from "../components/registerform/RegisterForm";
import Error from "../components/error/ErrorPage";
import RestaurantRegisterForm from "../components/restaurant/restaurantregister/RestaurantRegister";
import Login from "../components/login/Login";
import {UnauthorizedRoute} from "../components/UnauthorizedRoute";
import {ProtectedRoute} from "../components/ProtectedRoute";
import CustomerDetails from "../components/customer/CustomerDetails";

const Routing = () => (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={ <LandingPage /> } />
                <Route path="*" element={<Error />} />
                <Route path="/main-page" element={ <MainPage /> } />
                <Route path="/register" element={ <RegisterForm /> } />
                {/*<Route path="/login" element={ <Login /> } />*/}
                <Route path="/restaurant" element={<RestaurantRegisterForm />} />
                <Route path="/login" element={
                    <UnauthorizedRoute>
                        <Login/>
                    </UnauthorizedRoute>
                } />
                <Route path="/profile" element={
                    <ProtectedRoute>
                        <CustomerDetails />
                    </ProtectedRoute>
                } />
            </Routes>
        </Router>
    </div>
)

export default Routing;
