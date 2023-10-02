import React from 'react';
import logo from '../../../../static/FoodSpotWhite.png';

function FoodSpotLogo(): JSX.Element {
    return (
        <img
            src={logo}
            className="w-full"
            alt="FoodSpot logo"
        />
    );
}

export default FoodSpotLogo;