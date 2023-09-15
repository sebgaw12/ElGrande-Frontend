import FiltersNavbar from "../filtersheader/FiltersNavbar";
import FilterBadge from "../filtersheader/FilterBadge";
import Footer from "../footer/Footer";

const MainPage = () => (
    <div>
        <p>Main Page</p>
        <FiltersNavbar>
            <FilterBadge></FilterBadge>
        </FiltersNavbar>
        {/*<FetchApi />*/}
        <Footer/>
    </div>
)

export default MainPage
