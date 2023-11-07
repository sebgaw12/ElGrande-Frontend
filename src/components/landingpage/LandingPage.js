import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {MAIN_PAGE} from "../../constants/RoutePaths";
import {LandingPageContainer, Logo} from "./LandingPage.style";

function LandingPage() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate(MAIN_PAGE)
        }, 3000)
    }, [navigate]);

    // todo setTimeout for loading app
    return (
        <LandingPageContainer>
            <Logo></Logo>
        </LandingPageContainer>
    );
}

export default LandingPage;
