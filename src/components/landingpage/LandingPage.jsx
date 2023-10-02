import React from 'react';
import {Link} from 'react-router-dom';
import {StyleNormalButton} from '../../styles/styles';
import Footer from '../footer/Footer';
import logo from '../../static/FoodSpotWhite.png';

function LandingPage(): JSX.Element
{
    return(
        <div className="h-screen">
            <div className="flex flex-col items-center">
                <img alt="logo" src={logo}/>
                <div className="space-x-4">
                    <Link to="/login">
                        <button className={StyleNormalButton}>Log In</button>
                    </Link>
                    <Link to="/register">
                        <button className={StyleNormalButton}>Register</button>
                    </Link>
                    <Link to="/main-page">
                        <button className={StyleNormalButton}>View Page</button>
                    </Link>
                </div>
            </div>
            <div className="mt-5">
                <Footer/>
            </div>
        </div>
    );
}

export default LandingPage;