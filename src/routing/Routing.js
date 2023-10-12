import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "../components/landingpage/LandingPage";
import MainPage from "../components/mainpage/MainPage";
import Error from "../components/error/ErrorPage";
import RestaurantRegisterForm from "../components/restaurantform/RestaurantRegisterForm";
import {ProtectedRoute} from "../authentication/ProtectedRoute";
import UserDetails from "../components/user/UserDetails";
import {LOGIN, MAIN_PAGE, PROFILE, RESTAURANT} from "../constants/RoutePaths";
import UserLoginForm from "../components/userform/UserLoginForm";

const Routing = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="*" element={<Error/>}/>
            <Route path={MAIN_PAGE} element={<MainPage/>}/>
            <Route path={LOGIN} element={<UserLoginForm/>}/>
            <Route path={RESTAURANT} element={
                <ProtectedRoute>
                    <RestaurantRegisterForm/>
                </ProtectedRoute>
            }/>
            <Route path={PROFILE} element={
                <ProtectedRoute>
                    <UserDetails/>
                </ProtectedRoute>
            }/>
        </Routes>
    </Router>
)

export default Routing;
