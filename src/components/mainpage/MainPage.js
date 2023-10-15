import Footer from "../footer/Footer";
import AllRestaurants from "../restaurant/AllRestaurants";
import Header from "../header/Header";
import MapComponent from "./MapComponent";

const MainPage = () => {

    return (
        <div className={"overflow-hidden"}>
            <Header/>
            <main className="flex">
                <AllRestaurants/>
                {/*<img className={"w-1/2 border-gray-400 h-[90vh]"} alt="map" src={mapPlaceholder}/>*/}
                <MapComponent/>
            </main>
            <Footer/>
        </div>
    )
}

export default MainPage
