import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "../components/landingpage/LandingPage";
import MainPage from "../components/mainpage/MainPage";
import Error from "../components/error/ErrorPage";
import RestaurantRegisterForm from "../components/restaurantform/RestaurantRegisterForm";
import {ProtectedRoute} from "../authentication/ProtectedRoute";
import UserDetails from "../components/user/UserDetails";

const Routing = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="*" element={<Error/>}/>
            <Route path="/main-page" element={<MainPage/>}/>
            <Route path="/restaurant" element={
                <ProtectedRoute>
                    <RestaurantRegisterForm/>
                </ProtectedRoute>
            }/>
            <Route path="/profile" element={
                <ProtectedRoute>
                    <UserDetails/>
                </ProtectedRoute>
            }/>
        </Routes>
    </Router>
)

export default Routing;
