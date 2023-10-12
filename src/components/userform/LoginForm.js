import {TEInput} from "tw-elements-react";
import RememberMeCheckbox from "../restaurantform/elements/form/RememberMeCheckbox";
import ForgotPasswordLink from "../restaurantform/elements/form/ForgotPasswordLink";
import Divider from "../restaurantform/elements/form/Divider";
import GoogleIcon from "../restaurantform/elements/social/GoogleIcon";
import React from "react";

const LoginForm = ({onUsernameChange, onPasswordChange, onLoginClicked}) => {
    return (
        <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <TEInput
                type="email"
                label="Email"
                placeholder="john@doe.com"
                className="mb-6"
                size="lg"
                name="email"
                onChange={(e) => onUsernameChange(e)}
            ></TEInput>
            <TEInput
                type="password"
                label="Password"
                placeholder="password"
                className="mb-6"
                size="lg"
                name="password"
                onChange={(e) => onPasswordChange(e)}
            ></TEInput>
            <div className="mb-6 flex items-center justify-between">
                <RememberMeCheckbox/>
                <ForgotPasswordLink/>
            </div>
            <button onClick={onLoginClicked}>
                Sign in
            </button>

            <Divider text={'OR'}/>

            <GoogleIcon/>
        </div>
    )
}

export default LoginForm
