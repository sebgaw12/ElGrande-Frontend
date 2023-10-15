import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "../components/landingpage/LandingPage";
import MainPage from "../components/mainpage/MainPage";
import Error from "../components/error/ErrorPage";
import RestaurantRegisterForm from "../components/restaurantform/RestaurantRegisterForm";
import {ProtectedRoute} from "../authentication/ProtectedRoute";
import {LOGIN_URL, MAIN_PAGE, PROFILE_URL, RESTAURANT, SIGNUP_URL} from "../constants/RoutePaths";
import UserLogin from "../components/userform/UserLogin";
import {useUserContext} from "../context/UserContextProvider";
import {useEffect} from "react";
import {UnauthorizedRoute} from "../authentication/UnauthorizedRoute";
import UserRegister from "../components/userform/UserRegister";
import UserDetails from "../components/user/UserDetails";

const Routing = () => {
    const {user, authenticate} = useUserContext()

    useEffect(() => {
        if (!user) {
            authenticate()
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="*" element={<Error/>}/>
                <Route path={MAIN_PAGE} element={<MainPage/>}/>
                <Route path={LOGIN_URL} element={
                    <UnauthorizedRoute>
                        <UserLogin/>
                    </UnauthorizedRoute>
                }/>
                <Route path={SIGNUP_URL} element={
                    <UnauthorizedRoute>
                        <UserRegister/>
                    </UnauthorizedRoute>
                }/>
                <Route path={RESTAURANT} element={
                    <ProtectedRoute>
                        <RestaurantRegisterForm/>
                    </ProtectedRoute>
                }/>
                <Route path={PROFILE_URL} element={
                    <ProtectedRoute>
                        <UserDetails/>
                    </ProtectedRoute>
                }/>
            </Routes>
        </Router>
    )
}

export default Routing;
