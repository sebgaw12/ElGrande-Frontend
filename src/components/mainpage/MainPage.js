import Footer from "../footer/Footer";
import RestaurantList from "../restaurant/RestaurantList";
import Header from "../header/Header";
import mapPlaceholder from "../../images/map_placeholder.jpg"


const MainPage = () => {
    return (
        <div className={"overflow-hidden"}>
            <Header/>
            <main className="flex">
                <RestaurantList/>
                <img className={"w-1/2 border-gray-400 h-[90vh]"} alt="map" src={mapPlaceholder}/>
            </main>
            <Footer/>
        </div>
    )
}

export default MainPage
