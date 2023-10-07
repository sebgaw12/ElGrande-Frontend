import Footer from "../footer/Footer";
import AllRestaurants from "../restaurant/AllRestaurants";
import Header from "../header/Header";
import mapPlaceholder from "../../images/map_placeholder.jpg"
import {useContext, useEffect} from "react";
import {UserContext} from "../../context/UserContextProvider";
import {ApiCustomer} from "../../api/ApiCustomer";
import {JWT_TOKEN, LOGGED_IN} from "../../constants/constant";


const MainPage = () => {
    const {userModifier, loginModifier} = useContext(UserContext)

    useEffect(() => {
        const cookies = document.cookie.split("; ")
        for (const cookie of cookies) {
            const [name, value] = cookie.split('=')
            if (name === JWT_TOKEN) {
                ApiCustomer.getCustomerFromJwtToken(value)
                    .then(response => {
                        userModifier({...response})
                        loginModifier(true)
                        localStorage.setItem(LOGGED_IN, 'true')
                    })
            }
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
