import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "../components/landingpage/LandingPage";
import MainPage from "../components/mainpage/MainPage";
import Error from "../components/error/ErrorPage";
import Form from "../components/restaurantform/Form";
import {ProtectedRoute} from "../authentication/ProtectedRoute";
import {LOGIN_URL, MAIN_PAGE, PROFILE_URL, RESTAURANT, SIGNUP_URL} from "../constants/RoutePaths";
import UserLogin from "../components/userform/UserLogin";
import {useUserContext} from "../context/UserContextProvider";
import {UnauthorizedRoute} from "../authentication/UnauthorizedRoute";
import UserRegister from "../components/userform/UserRegister";
import UserContainer from "../components/user/UserContainer";
import {useEffect} from "react";

const Routing = () => {
    const {authenticate} = useUserContext()

    useEffect(() => {
        authenticate()
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="*" element={<Error/>}/>
                <Route path={MAIN_PAGE} element={<MainPage/>}/>
                {/*<Route path="test" element={<TestComponent/>}/>*/}
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
                        <Form/>
                    </ProtectedRoute>
                }/>
                <Route path={PROFILE_URL} element={
                    <ProtectedRoute>
                        <UserContainer/>
                    </ProtectedRoute>
                }/>
            </Routes>
        </Router>
    )
}

export default Routing;
