import Footer from "../footer/Footer";
import Restaurants from "../restaurants/Restaurants";

const MainPage = () => (
    <div className="h-screen">

        <div className="bg-blue-500 py-4">
            <p>Header</p>
        </div>

        <main className="flex h-5/6">
            <div className="w-1/3 overflow-y-auto bg-gray-200">
                <Restaurants/>
            </div>

            <div className="w-2/3 bg-gray-300 text-5xl font-black">
                Tu będzie mapa
            </div>
        </main>

        <Footer/>
    </div>
)

export default MainPage
