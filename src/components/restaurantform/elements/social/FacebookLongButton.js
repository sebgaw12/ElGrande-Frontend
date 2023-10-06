import React from 'react';
import {TERipple} from 'tw-elements-react';
import {StyleFacebookLongButton} from "../../../../styles/styles";


function FacebookLongButton()
{
    return(
        <TERipple rippleColor="light" className="w-full">
            <a
                className={StyleFacebookLongButton}
                style={{ backgroundColor: "#3b5998" }}
                href="#"
                role="button"
            >
                {/* <!-- Facebook --> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                Continue with Facebook
            </a>
        </TERipple>
    );
}

export default FacebookLongButton;