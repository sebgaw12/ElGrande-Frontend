import React, {useState} from 'react';
import SearchPanel from './SearchPanel';
import FiltersPanel from './FiltersPanel';
import {useApi} from "../../../hooks/useApi";

function FiltersHeader({setRestaurants}) {
    const {get} = useApi()

    const filterRestaurants = (formData) => {
        get("api/v1/restaurants/filtered", formData)
            .then(response => {
                setRestaurants(response)
            })
    }

    return (
        <>
            <div className="flex items-left h-[6vh]">
                <SearchPanel filterRestaurants={filterRestaurants}/>
                <FiltersPanel filterRestaurants={filterRestaurants}/>
            </div>
        </>
    );
}

export default FiltersHeader;