import React, {useState} from 'react';
import {
    NavbarContainer,
    NavbarLeft,
    NavbarLogo,
    NavbarMid,
    NavbarRight,
    NavbarMenu,
    NavbarHamburger,
    NavbarOverlay,
    OverlayItems,
    OverlaySvg,
} from './Navbar.style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faAddressCard,
    faRightFromBracket,
    faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => setIsMenuActive(!isMenuActive);

    return (
        <NavbarContainer>
            <NavbarLeft>
                <NavbarLogo></NavbarLogo>
            </NavbarLeft>

            <NavbarMid></NavbarMid>

            <NavbarRight>
                <NavbarMenu className={isMenuActive ? 'active' : ''}>

                    <NavbarHamburger className={isMenuActive ? 'active' : ''} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </NavbarHamburger>

                    <NavbarOverlay>
                        <OverlayItems>

                            <span>
                                <OverlaySvg>
                                    <FontAwesomeIcon icon={faCirclePlus}/>
                                </OverlaySvg>
                                ADD PLACE
                            </span>

                            <span>
                                <OverlaySvg>
                                  <FontAwesomeIcon icon={faAddressCard}/>
                                </OverlaySvg>
                                PROFILE
                            </span>

                            <span>
                                <OverlaySvg>
                                  <FontAwesomeIcon icon={faRightFromBracket}/>
                                </OverlaySvg>
                                LOGOUT
                              </span>
                        </OverlayItems>
                    </NavbarOverlay>

                </NavbarMenu>
            </NavbarRight>
        </NavbarContainer>
    );
};

export default Navbar;
