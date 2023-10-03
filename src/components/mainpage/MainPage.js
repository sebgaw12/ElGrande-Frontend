import Footer from "../footer/Footer";
import AllRestaurants from "../restaurant/AllRestaurants";
import Header from "../header/Header";
import FiltersNavbar from "../filtersnavbar/FiltersNavbar";


const MainPage = () => (
    <div>
        <Header/>
        <FiltersNavbar></FiltersNavbar>
        <main className="flex">
            <AllRestaurants/>
            <h1 className="w-1/2 bg-gray-300 text-5xl font-black h-[85vh] text-[5vh]">Tu będzie mapa</h1>
        </main>
        <Footer/>
    </div>
)

export default MainPage
