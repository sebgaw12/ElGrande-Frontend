import React, { useState } from 'react';
import { initTE } from 'tw-elements'; // Import Tailwind Elements init function
import ReviewStar from './ReviewStar';
import ButtonArrow from './ButtonArrow';

initTE(); // Initialize Tailwind Elements

function DropdownReviews() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    return (
        <>
            <div className="relative">
                <button
                    className="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
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
                        className="absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <li className="px-6 pb-2 pt-2.5">
                            1
                        </li>
                        <li className="px-6 pb-2 pt-2.5">
                            2
                        </li>
                        <li className="px-6 pb-2 pt-2.5">
                            3
                        </li>
                        <li className="px-6 pb-2 pt-2.5">
                            4
                        </li>
                        <li className="px-6 pb-2 pt-2.5">
                            5
                        </li>
                    </ul>
                )}
            </div>
        </>
    );
}

export default DropdownReviews;