import {useState} from 'react';
import {
    LeftPanel,
    NavbarContainer,
    NavbarHamburger,
    NavbarHamburgerSpan,
    NavbarLogo,
    NavbarMenu,
    NavbarOverlay,
    OverlayItems,
    RightPanel
} from "./Navbar.styles";
import logo from "../../images/food-spot-transparent-with-name.png"
import {useUserContext} from "../../context/UserContextProvider";
import UserNavbar from "./UserNavbar";
import DefaultNavbar from "./DefaultNavbar";
import {Link} from "react-router-dom";

const Navbar = () => {

    const [isMenuActive, setIsMenuActive] = useState(false);

    const {user} = useUserContext()
    const toggleMenu = () => setIsMenuActive(!isMenuActive);

    const handleClickIfMenuHidden = (e) => {
        if (!isMenuActive) {
            e.preventDefault();
        }
    }

    return (
        <NavbarContainer>

            <LeftPanel>
                <Link to={"/main-page"}>
                    <NavbarLogo src={logo}></NavbarLogo>
                </Link>
            </LeftPanel>
            <RightPanel>
                <NavbarMenu isMenuActive={isMenuActive}>

                    <NavbarHamburger isMenuActive={isMenuActive} onClick={toggleMenu}>
                        <NavbarHamburgerSpan></NavbarHamburgerSpan>
                        <NavbarHamburgerSpan></NavbarHamburgerSpan>
                        <NavbarHamburgerSpan></NavbarHamburgerSpan>
                    </NavbarHamburger>

                    <NavbarOverlay isMenuActive={isMenuActive}>
                        <OverlayItems>
                            {user ? (
                                <UserNavbar isMenuActive={isMenuActive}
                                            handleClickIfMenuHidden={handleClickIfMenuHidden}/>
                            ) : (
                                <DefaultNavbar handleClickIfMenuHidden={handleClickIfMenuHidden}/>
                            )}
                        </OverlayItems>

                    </NavbarOverlay>
                </NavbarMenu>
            </RightPanel>
        </NavbarContainer>
    );
};

export default Navbar;
