import React, {useState} from 'react';
import {useUpdate} from "../../../../hooks/useUpdate";
import {PrimaryBtn, PrimaryInput} from "../../../../styles/global.styles";
import {filterLogo, SearchPanelButton, SearchPanelContainer, SearchPanelInput} from "./SearchPanel.styles";
import {useToggle} from "../../../../hooks/useToggle";
import PrimaryModal from "../../../globalcomponents/PrimaryModal";

function SearchPanel({filterRestaurants}) {
    const {isOpen: isFilterOpen, toggle: toggleFilter} = useToggle()

    const [formData, setFormData] = useState({
        name: [],
        city: [],
        category: [],
        dishName: []
    });
    const {updateDataObject} = useUpdate(formData, setFormData)
    const handleSearch = () => {
        filterRestaurants(formData)
    }

    const handleFilterSearch = () => {
        console.log(formData)
        toggleFilter()
        filterRestaurants(formData)
    }

    const Tag = ({value, onRemove}) => (
        <div style={{border: '1px solid black', padding: '5px', display: 'inline-block', margin: '5px'}}>
            {value}
            <button type="button" onClick={onRemove} style={{marginLeft: '10px'}}>X</button>
        </div>
    );

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const name = e.target.name;
            const value = e.target.value.trim();

            if (value) {
                if (formData[name].includes(value)) {
                    alert(`Tag "${value}" jest już dodany.`);
                } else {
                    setFormData(prevFormData => ({
                        ...prevFormData,
                        [name]: [...prevFormData[name], value]
                    }));
                }
                e.target.value = '';
            }
        }
    };

    const removeTag = (name, valueToRemove) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: prevFormData[name].filter(value => value !== valueToRemove)
        }));
    };

    return (
        <SearchPanelContainer>
            <SearchPanelInput name={"name"} onKeyPress={handleKeyPress} placeholder="Restaurant Name"/>
            <SearchPanelButton onClick={toggleFilter}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d={filterLogo}/>
                </svg>
            </SearchPanelButton>
            <SearchPanelButton onClick={handleSearch}>
                Search
            </SearchPanelButton>
            <PrimaryModal isOpen={isFilterOpen} onClose={toggleFilter}>
                <PrimaryInput name={"name"} placeholder={"Name"} onKeyPress={handleKeyPress}></PrimaryInput>
                <PrimaryInput name={"city"} placeholder={"City"} onKeyPress={handleKeyPress}></PrimaryInput>
                <PrimaryInput name={"category"} placeholder={"Category"} onKeyPress={handleKeyPress}></PrimaryInput>
                <PrimaryInput name={"dishName"} placeholder={"Dish"} onKeyPress={handleKeyPress}></PrimaryInput>
                <PrimaryBtn onClick={handleFilterSearch}>Search</PrimaryBtn>
            </PrimaryModal>
        </SearchPanelContainer>
    )
}

export default SearchPanel;
