import Footer from "../footer/Footer";
import AllRestaurants from "../restaurant/AllRestaurants";
import Header from "../header/Header";
import mapPlaceholder from "../../images/map_placeholder.jpg"
import {useContext, useEffect} from "react";
import {UserContext} from "../../context/UserContextProvider";
import {ApiCustomer} from "../../api/ApiCustomer";
import {JWT_TOKEN} from "../../constants/constant";


const MainPage = () => {
    const {userModifier, loginModifier} = useContext(UserContext)

    useEffect(() => {
        if (localStorage.getItem(JWT_TOKEN)) {
            ApiCustomer.getCustomerFromJwtToken(localStorage.getItem(JWT_TOKEN))
                .then(response => {
                    userModifier({...response})
                    loginModifier(true)
                })
        }
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
