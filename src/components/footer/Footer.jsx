import React from 'react';

function Footer(): JSX.Element {
    return (
        <footer className="text-center lg:text-left">
            <div className="p-4 text-center text-neutral-700 bg-yellow-400">
                <span>© 2023 Copyright: </span>
                <a className="text-neutral-800" href="https://www.food-spot.com">
                    FoodSpot
                </a>
            </div>
        </footer>
    );
}

export default Footer;
