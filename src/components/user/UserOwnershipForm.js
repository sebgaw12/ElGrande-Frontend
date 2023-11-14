import {TEModal, TEModalBody, TEModalContent, TEModalFooter, TEModalHeader, TERipple} from "tw-elements-react";
import {styleModalHeader, styleModalSaveButton} from "../restaurant/filtersnavbar/FiltersModal.styles";
import React, {useEffect, useState} from "react";
import {useUpdate} from "../../hooks/useUpdate";
import {useApi} from "../../hooks/useApi";
import {useUserContext} from "../../context/UserContextProvider";
import PrimaryModal from "../globalcomponents/PrimaryModal";
import {PrimaryBtn, PrimaryInput} from "../../styles/global.styles";
import {
    EditButton,
    InfoButton,
    OwnershipFormRestaurantButton,
    OwnershipFormRestaurantButtonChecked,
    RestaurantListContainer
} from "./UserProfile.styles";

const UserOwnershipForm = ({isOpen, toggle, userDetails}) => {
    const {user} = useUserContext()
    const [restaurants, setRestaurants] = useState([])
    const [selectedRestaurants, setSelectedRestaurants] = useState(new Set())
    const [searchInput, setSearchInput] = useState({name: ''})
    const {updateDataObject} = useUpdate(searchInput, setSearchInput)
    const {get, post, put} = useApi()

    const handleSearch = () => {
        get("api/v1/restaurants/filtered", searchInput)
            .then(response => {
                setRestaurants(response)
            })
    }

    const selectRestaurant = (key) => {
        if (selectedRestaurants.has(key)) {
            const newSet = new Set(selectedRestaurants)
            newSet.delete(key)
            setSelectedRestaurants(newSet)
        } else {
            setSelectedRestaurants(new Set([...selectedRestaurants, key]))
        }
    }

    const handleOwnershipForm = () => {
        if (userDetails.ownershipId) {
            put("api/v1/ownerships/" + userDetails.ownershipId, {restaurantsId: Array.from(selectedRestaurants)})
        } else {
            post("api/v1/ownerships", {customerId: user})
                .then(response => {
                    put("api/v1/ownerships/" + response.id, {restaurantsId: Array.from(selectedRestaurants)})
                })
        }
        toggle()
    }

    return (
        <PrimaryModal isOpen={isOpen} onClose={toggle}>
            <PrimaryInput onChange={updateDataObject} placeholder={"Restaurant Name"}></PrimaryInput>
            <RestaurantListContainer>
                {restaurants.map((restaurant) => {
                        if (!selectedRestaurants.has(restaurant.id)) {
                            return (
                                <OwnershipFormRestaurantButton
                                    key={restaurant.id} onClick={() => selectRestaurant(restaurant.id)}>
                                    {restaurant.name}
                                </OwnershipFormRestaurantButton>
                            )
                        } else {
                            return (
                                <OwnershipFormRestaurantButtonChecked
                                    key={restaurant.id} onClick={() => selectRestaurant(restaurant.id)}>
                                    {restaurant.name}
                                </OwnershipFormRestaurantButtonChecked>
                            )
                        }
                    }
                )}
            </RestaurantListContainer>
            <EditButton onClick={handleSearch}>Search</EditButton>
            <InfoButton onClick={handleOwnershipForm}>Send Request</InfoButton>
        </PrimaryModal>
    )
}

export default UserOwnershipForm