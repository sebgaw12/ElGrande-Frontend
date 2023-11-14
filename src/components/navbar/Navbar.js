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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard, faCirclePlus, faRightFromBracket,} from '@fortawesome/free-solid-svg-icons';
import {useUserContext} from "../../context/UserContextProvider";

const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const {user} = useUserContext()

    const toggleMenu = () => setIsMenuActive(!isMenuActive);

    return (
        <NavbarContainer>
            <LeftPanel>
                <NavbarLogo></NavbarLogo>
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
                                <>
                                    <span>
                                        <FontAwesomeIcon icon={faCirclePlus}/>
                                        ADD PLACE
                                    </span>

                                    <span>
                                        <FontAwesomeIcon icon={faAddressCard}/>
                                        PROFILE
                                    </span>

                                    <span>
                                      <FontAwesomeIcon icon={faRightFromBracket}/>
                                        LOGOUT
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span>
                                        <FontAwesomeIcon icon={faCirclePlus}/>
                                        LOG IN
                                    </span>

                                    <span>
                                        <FontAwesomeIcon icon={faAddressCard}/>
                                        SIGN IN
                                    </span>
                                    <span></span>
                                </>
                            )}

                            {/*<span>coś tam</span>*/}
                            {/*<span>coś tam</span>*/}
                            {/*<span>coś tam</span>*/}
                        </OverlayItems>
                    </Overlay>

                </Menu>
            </RightPanel>
        </NavbarContainer>
    );
};

export default Navbar;
