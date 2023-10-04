import React, { useState } from 'react';
import ReviewStar from './ReviewStar';
import ButtonArrow from './ButtonArrow';
import { styleReviewDropdownButton, styleReviewDropdownList } from './ReviewDropdownStyles';
import { initTE } from 'tw-elements';

initTE();

function ReviewsDropdown() {
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
                    <ReviewStar />
                    <span className="ml-2 w-2">
                        <ButtonArrow />
                    </span>
                </button>
                {isDropdownOpen && (
                    <ul
                        className={styleReviewDropdownList}
                        aria-labelledby="dropdownMenuButton"
                    >
                        <li className="px-8 pb-2 pt-2.5">
                            1
                        </li>
                        <li className="px-8 pb-2 pt-2.5">
                            2
                        </li>
                        <li className="px-8 pb-2 pt-2.5">
                            3
                        </li>
                        <li className="px-8 pb-2 pt-2.5">
                            4
                        </li>
                        <li className="px-8 pb-2 pt-2.5">
                            5
                        </li>
                    </ul>
                )}
            </div>
        </>
    );
}

export default ReviewsDropdown;