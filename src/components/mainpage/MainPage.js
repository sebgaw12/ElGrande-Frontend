import Footer from "../footer/Footer";
import AllRestaurants from "../restaurant/AllRestaurants";
import Header from "../header/Header";
import mapPlaceholder from "../../images/map_placeholder.jpg"
import {useContext, useEffect} from "react";
import {UserContext} from "../../context/UserContextProvider";
import {ApiCustomer} from "../../api/ApiCustomer";
import {JWT_TOKEN, LOGGED_IN} from "../../constants/constant";


const MainPage = () => {
    const {currentUser, userModifier, loginModifier, getUser} = useContext(UserContext)

    useEffect(() => {
        getUser()
    }, []);

    return (
        <div className={"overflow-hidden"}>
            <Header/>
            <main className="flex">
                <AllRestaurants/>
                <img className={"w-1/2 border-gray-400 h-[90vh]"} alt="map" src={mapPlaceholder}/>
            </main>
            <Footer/>
        </div>
    )
}

export default MainPage
