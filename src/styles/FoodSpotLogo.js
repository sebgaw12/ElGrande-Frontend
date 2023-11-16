import React from 'react';
import LOGO from '../images/FoodSpotTransparent.png';
import {RightSideOfColumnDiv} from "../components/userform/UserForm.styles";

function FoodSpotLogo() {
    return (
        <RightSideOfColumnDiv>
            <img
                src={LOGO}
                alt="FoodSpot Logo"
            />
        </RightSideOfColumnDiv>
    );
}

export default FoodSpotLogo;