import Footer from "../footer/Footer";
import AllRestaurants from "../restaurant/AllRestaurants";
import Header from "../header/Header";
import FiltersHeader from '../header/filtersheader/FiltersHeader';

const MainPage = () => (
    <div className="h-screen">

        <div className="bg-blue-500 py-4">
            <Header />
        </div>
        <FiltersHeader></FiltersHeader>

        <main className="flex h-5/6">
            <div className="w-1/2">
                <AllRestaurants/>
            </div>

            <div className="w-1/2 bg-gray-300 text-5xl font-black">
                Tu będzie mapa
            </div>
        </main>
        <div className="p-2">
            <Footer/>
        </div>
    </div>
)

export default MainPage
