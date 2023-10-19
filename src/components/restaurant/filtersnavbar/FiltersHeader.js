import React, {useState} from 'react';
import SearchPanel from './SearchPanel';
import FiltersPanel from './FiltersPanel';
import {useApi} from "../../../hooks/useApi";

function FiltersHeader({restaurants}) {
    // const [formData, setFormData] = useState( {
    //     name: [],
    //     city: '',
    //     category: [],
    //     dishName: []
    // })
    const {get} = useApi()

    const filterRestaurants = (formData) => {
        console.log(formData)
        get("api/v1/restaurants/filtered", formData)
            .then(response => {
                console.log(response)
                restaurants = response
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