import React, { useState, createContext, useContext } from 'react';
import ButtonArrow from './ButtonArrow';
import { styleReviewDropdownButton, styleReviewDropdownList } from './ReviewDropdownStyles';

const DropdownContext = createContext(null);

function Dropdown({ title, elements, defaultIndex}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    let index = defaultIndex ? elements[defaultIndex] : elements[0];
    const [selectedElement, setSelectedElement] = useState(index);
    const [selectedElementIndex, setSelectedElementIndex] = useState(0);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const handleElementClick = (element) => {
        setSelectedElement(element);
        setSelectedElementIndex(elements.indexOf(element));
        toggleDropdown();
    };

    return (
        <DropdownContext.Provider value={selectedElement}>
            <div className="relative ml-2 mr-2">
                Sortowanie: {selectedElement}
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
                    <ul className={styleReviewDropdownList} aria-labelledby="dropdownMenuButton">
                        {elements.map((element, key) => (
                            <li key={key} onClick={() => handleElementClick(element)}>
                                {element}
                            </li>
                        ))}
                    </ul>
                )}

            </div>
        </DropdownContext.Provider>
    );
}

export function useSelectedElement() {
    return useContext(DropdownContext);
}

export default Dropdown;
