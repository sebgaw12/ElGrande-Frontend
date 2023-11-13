import React, {useEffect} from "react";
import FoodSpotLogo from "../restaurantform/elements/graphics/FoodSpotLogo";
import UserLoginForm from "./UserLoginForm";
import {Link, useParams} from "react-router-dom";

function UserLogin() {
    const {endpoint} = useParams()

    useEffect(() => {
        console.log(endpoint)
    }, []);

    return (
        <div className="container h-screen m-auto">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">

                {/* <!-- Left column container with background--> */}
                <Link to={"/"} className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                    <FoodSpotLogo/>
                </Link>

                {/* <!-- Right column container with form --> */}
                <UserLoginForm/>
            </div>
        </div>
    )
}

export default UserLogin;
