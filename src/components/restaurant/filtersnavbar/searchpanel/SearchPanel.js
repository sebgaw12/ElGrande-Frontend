import React, {useState} from 'react';
import {CrossButtonImage, PrimaryBtn, PrimaryInput} from "../../../../styles/global.styles";
import {
    ClearFilterButton,
    filterLogo,
    FilterTag,
    SearchPanelButton,
    SearchPanelContainer,
    SearchPanelInput,
    TagsContainer, TagText
} from "./SearchPanel.styles";
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
    const handleSearch = () => {
        filterRestaurants(formData)
    }

    const handleFilterSearch = () => {
        toggleFilter()
        filterRestaurants(formData)
    }

    const Tag = ({value, onRemove}) => (
        <FilterTag>
            {value}
            <CrossButtonImage onClick={onRemove}>x</CrossButtonImage>
        </FilterTag>
    );

    const clearFilters = () => {
        setFormData({
            name: [],
            city: [],
            category: [],
            dishName: []
        })
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const name = e.target.name;
            const value = e.target.value.trim();

            if (value && !formData[name].includes(value)) {
                setFormData(prevFormData => ({
                    ...prevFormData,
                    [name]: [...prevFormData[name], value]
                }));
            }
            e.target.value = '';
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
            <ClearFilterButton onClick={clearFilters}>
                Clear Filters
            </ClearFilterButton>
            <PrimaryModal isOpen={isFilterOpen} onClose={toggleFilter}>
                <PrimaryInput name={"name"} placeholder={"Name"} onKeyPress={handleKeyPress}></PrimaryInput>
                <TagsContainer>
                    {formData.name.map((name, index) =>
                        <Tag key={index} value={name} onRemove={() => removeTag("name", name)}></Tag>
                    )}
                </TagsContainer>
                <PrimaryInput name={"city"} placeholder={"City"} onKeyPress={handleKeyPress}></PrimaryInput>
                <TagsContainer>
                    {formData.city.map((city, index) =>
                        <Tag key={index} value={city} onRemove={() => removeTag("city", city)}></Tag>
                    )}
                </TagsContainer>
                <PrimaryInput name={"category"} placeholder={"Category"} onKeyPress={handleKeyPress}></PrimaryInput>
                <TagsContainer>
                    {formData.category.map((category, index) =>
                        <Tag key={index} value={category} onRemove={() => removeTag("category", category)}></Tag>
                    )}
                </TagsContainer>
                <PrimaryInput name={"dishName"} placeholder={"Dish"} onKeyPress={handleKeyPress}></PrimaryInput>
                <TagsContainer>
                    {formData.dishName.map((dishName, index) =>
                        <Tag key={index} value={dishName} onRemove={() => removeTag("dishName", dishName)}></Tag>
                    )}
                </TagsContainer>
                <PrimaryBtn onClick={handleFilterSearch}>Search</PrimaryBtn>
            </PrimaryModal>
        </SearchPanelContainer>
    )
}

export default SearchPanel;
