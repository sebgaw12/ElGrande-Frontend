import React from 'react';
import {Link} from 'react-router-dom';
import {StyleNormalButton} from '../../styles/styles';
import Footer from '../footer/Footer';
import logo from '../../images/FoodSpotTransparent.png';
import {SERVER_URL_LOGIN} from "../../constants/constant";

function LandingPage() {
    return (
        <div className="h-screen">
            <div className="flex flex-col items-center">
                <img alt="logo" src={logo}/>
                <div className="space-x-4">
                    <Link to={SERVER_URL_LOGIN}>
                        <button className={StyleNormalButton}>Log In</button>
                    </Link>
                    <Link to={SERVER_URL_LOGIN}>
                        <button className={StyleNormalButton}>Register</button>
                    </Link>
                    <Link to="/main-page">
                        <button className={StyleNormalButton}>View Page</button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default LandingPage;