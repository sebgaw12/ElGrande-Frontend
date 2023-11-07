import Footer from "../footer/Footer";
import RestaurantList from "../restaurant/RestaurantList";
import Header from "../header/Header";
import MapComponent from "../map/MapComponent";
import GeolocationComponent from "../map/GeolocationComponent";
import {Container, LeftPanel, Link, Nav, NavContainer, RightPanel, RootContainer} from "./MainPage.style";
import Navbar from "../navbar/Navbar";

const MainPage = () => {

    return (
        <RootContainer>
            <Container>

                <Nav>
                    <NavContainer>
                        <Navbar/>
                    </NavContainer>
                </Nav>

                <LeftPanel>
                    <RestaurantList />
                </LeftPanel>

                <RightPanel>
                    <MapComponent />
                </RightPanel>

                <Footer>Footer</Footer>

            </Container>
        </RootContainer>
    )
}

export default MainPage
