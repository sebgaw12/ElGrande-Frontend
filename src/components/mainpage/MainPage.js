import Footer from "../footer/Footer";
import AllRestaurants from "../restaurant/AllRestaurants";
import Header from "../header/Header";
import FiltersNavbar from "../filtersnavbar/FiltersNavbar";


const MainPage = () => (
    <div className="h-screen max-h-screen">

        <div className="bg-blue-500 h-[5vh]">
            <Header />
        </div>
        <FiltersNavbar></FiltersNavbar>

        <main className="flex">
            <div className="w-1/2">
                <AllRestaurants/>
            </div>

            <div className="w-1/2 bg-gray-300 text-5xl font-black h-[85vh]">
                <h1 className="text-[5vh]">Tu będzie mapa</h1>
            </div>
        </main>
        <div className="h-[6vh]">
            <Footer/>
        </div>
    </div>
)

export default MainPage
