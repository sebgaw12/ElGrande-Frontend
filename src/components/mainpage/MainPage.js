import Footer from "../footer/Footer";
import RestaurantList from "../restaurant/RestaurantList";
import Header from "../header/Header";
import MapComponent from "../map/MapComponent";
import GeolocationComponent from "../map/GeolocationComponent";
import {LeftPanel, MainPageContainer, Nav, RightPanel, StyleFooter} from "./MainPage.styles";
import Navbar from "../navbar/Navbar";
import {GlobalStyle} from "../../styles/global.styles";

const MainPage = () => {

    return (
        <GlobalStyle>
            <MainPageContainer>

                <Nav>
                    <div className="nav-content">
                        <Navbar/>
                    </div>
                </Nav>

                <LeftPanel>
                    <RestaurantList/>
                </LeftPanel>

                <RightPanel>
                    <MapComponent/>
                </RightPanel>

                <StyleFooter>
                    <Footer/>
                </StyleFooter>

            </MainPageContainer>
        </GlobalStyle>
    )
}

export default MainPage
