import React, {useState} from 'react';
import {
    Hamburger,
    LeftPanel,
    Menu,
    MidPanel,
    NavbarContainer,
    NavbarLogo,
    Overlay,
    OverlayItems,
    RightPanel
} from './NavbarTemplate.style';
import {useUserContext} from "../../context/UserContextProvider";
import UserNavbar from "./UserNavbar";
import DefaultNavbar from "./DefaultNavbar";
import logo2 from "../../images/food-spot-transparent-with-name.png";

const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const {user} = useUserContext()

    const toggleMenu = () => setIsMenuActive(!isMenuActive);

    return (
        <NavbarContainer>
            <LeftPanel>
                <NavbarLogo src={logo2}/>
            </LeftPanel>

            <MidPanel></MidPanel>

            <RightPanel>
                <Menu className={isMenuActive ? 'active' : ''}>

                    <Hamburger className={isMenuActive ? 'active' : ''} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Hamburger>

                    <Overlay className={isMenuActive ? 'active' : ''}>
                        <OverlayItems>
                            {user ? (
                                <UserNavbar/>
                            ) : (
                                <DefaultNavbar/>
                            )}
                        </OverlayItems>
                    </Overlay>

                </Menu>
            </RightPanel>
        </NavbarContainer>
    );
};

export default Navbar;
