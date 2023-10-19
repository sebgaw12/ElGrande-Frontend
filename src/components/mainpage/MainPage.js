import Footer from "../footer/Footer";
import AllRestaurants from "../restaurant/AllRestaurants";
import Header from "../header/Header";
import MapComponent from "./MapComponent";
import GeolocationComponent from "./GeolocationComponent";

const MainPage = () => {

    return (
        <div className={"overflow-hidden"}>
            <Header/>
            <main className="flex">
                <AllRestaurants/>
                <MapComponent/>
                {/*<GeolocationComponent/>*/}
            </main>
            <Footer/>
        </div>
    )
}

export default MainPage
