import Footer from "../footer/Footer";
import RestaurantList from "../restaurant/RestaurantList";
import MapComponent from "../map/MapComponent";
import {
    ContentContainer,
    FooterStyle,
    MainPageContainer,
    MapComponentStyle,
    NavbarStyle,
    RestaurantListStyle
} from "./MainPage.styles";
import Navbar from "../navbar/Navbar";

const MainPage = () => {

    return (
            <MainPageContainer>
                <NavbarStyle>
                    <Navbar/>
                </NavbarStyle>
                <ContentContainer>
                    <RestaurantListStyle>
                        <RestaurantList/>
                    </RestaurantListStyle>
                    <MapComponentStyle>
                        <MapComponent/>
                    </MapComponentStyle>
                </ContentContainer>
                <FooterStyle>
                    <Footer/>
                </FooterStyle>
            </MainPageContainer>

    )
}

export default MainPage
