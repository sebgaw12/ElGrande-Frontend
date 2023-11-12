import React, {useState} from 'react';
import SearchPanel from '../searchpanel/SearchPanel';
import FiltersPanel from '../FiltersPanel';
import {useApi} from "../../../../hooks/useApi";
import {useRestaurantContext} from "../../../../context/RestaurantContextProvider";
import {FilterContainer} from "./FiltersHeader.styles";

function FiltersHeader() {
    const {setRestaurants} = useRestaurantContext();
    const {get} = useApi()

    const filterRestaurants = (formData) => {
        get("api/v1/restaurants/filtered", formData)
            .then(response => {
                setRestaurants(response)
            })
    }

    return (
        <>
            <FilterContainer>
                <SearchPanel filterRestaurants={filterRestaurants}/>
                <FiltersPanel filterRestaurants={filterRestaurants}/>
            </FilterContainer>
        </>
    );
}

export default FiltersHeader;
