import React, { useState } from 'react';
import ReviewStar from './ReviewStar';
import ButtonArrow from './ButtonArrow';
import { styleReviewDropdownButton, styleReviewDropdownList } from './ReviewDropdownStyles';

function Dropdown({title, elements}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    return (
        <>
            <div className="relative ml-2 mr-2">
                <button
                    className={styleReviewDropdownButton}
                    type="button"
                    id="dropdownMenuButton"
                    aria-expanded={isDropdownOpen}
                    onClick={toggleDropdown}
                    data-te-ripple-color="light"
                >
                    {title ? title : ""}
                    <span className="ml-2 w-2">
                        <ButtonArrow />
                    </span>
                </button>
                {isDropdownOpen && (
                    <ul
                        className={styleReviewDropdownList}
                        aria-labelledby="dropdownMenuButton"
                    >
                        {elements.map((element) => (
                            <li>{element}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

export default Dropdown;