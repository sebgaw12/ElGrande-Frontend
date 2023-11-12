import React, {useState} from 'react';
import {useUpdate} from "../../../../hooks/useUpdate";
import {PrimaryBtn} from "../../../../styles/global.styles";
import {SearchPanelContainer} from "./SearchPanel.styles";

function SearchPanel({filterRestaurants}) {
    const [restaurantName, setRestaurantName] = useState({
        name: ''
    })
    const {updateDataObject} = useUpdate(restaurantName, setRestaurantName)
    const handleSearch = () => {
        filterRestaurants(restaurantName)
    }

    return (
        <SearchPanelContainer>
                <div className="relative mb-2 flex w-full flex-wrap items-stretch">
                    <input
                        type="search"
                        placeholder="Restaurant Name"
                        aria-label="Search"
                        aria-describedby="button-addon3"
                        name={"name"}
                        onChange={updateDataObject}
                    />

                    <PrimaryBtn onClick={handleSearch}>
                        Search
                    </PrimaryBtn>
                </div>
        </SearchPanelContainer>
    );
}

export default SearchPanel;
