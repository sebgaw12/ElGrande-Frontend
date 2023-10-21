import React from "react";
import {Link} from 'react-router-dom';
import FoodSpotLogo from "../restaurantform/elements/graphics/FoodSpotLogo";
import IconArrowTurnLeft from '../restaurantform/elements/icons/IconArrowTurnLeft';
import {StyleRoundedBlueButton} from '../../styles/styles';
import UserLoginForm from "./UserLoginForm";

function UserLogin() {
    return (
        <section className="h-screen">
            <div className="container h-full px-6 py-24">
                <Link to={"/"}>
                    <button className={StyleRoundedBlueButton}>
                        <IconArrowTurnLeft/>
                    </button>
                </Link>
                <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">

                    {/* <!-- Left column container with background--> */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <FoodSpotLogo/>
                    </div>

                    {/* <!-- Right column container with form --> */}
                    <UserLoginForm />
                </div>
            </div>
        </section>
    );
}

export default UserLogin;
