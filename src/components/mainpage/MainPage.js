import Footer from "../footer/Footer";
import RestaurantList from "../restaurant/RestaurantList";
import Header from "../header/Header";
import MapComponent from "../map/MapComponent";
import GeolocationComponent from "../map/GeolocationComponent";

const MainPage = () => {

    return (
        <div className={"overflow-hidden"}>
            <Header/>
            <main className="flex">
                <RestaurantList/>
                <MapComponent/>
                {/*<GeolocationComponent/>*/}
            </main>
            <Footer/>
        </div>
    )
}

export default MainPage
