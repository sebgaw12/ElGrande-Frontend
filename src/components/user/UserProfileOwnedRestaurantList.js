import React, {useState} from "react";
import {useToggle} from "../../hooks/useToggle";
import {
    ContributionItem,
    ContributionText,
    EditOwnedRestaurantButton,
    InfoButton,
    UserProfileText
} from "./UserProfile.styles";
import {PrimaryInput} from "../../styles/global.styles";
import PrimaryModal from "../globalcomponents/PrimaryModal";
import {useApi} from "../../hooks/useApi";
import {useUpdate} from "../../hooks/useUpdate";
import {toast} from "react-toastify";

const UserProfileOwnedRestaurantList = ({restaurants}) => {
    const {isOpen: isEditing, toggle: toggleEdit} = useToggle(false)
    const {put} = useApi()
    const [restaurantToEdit, setRestaurantToEdit] = useState({})
    const {updateDataObject} = useUpdate(restaurantToEdit, setRestaurantToEdit)

    const editOwnedRestaurant = (restaurant) => {
        setRestaurantToEdit(restaurant)
        toggleEdit()
    }

    const saveRestaurantChanges = () => {
        put("api/v1/restaurants/" + restaurantToEdit.id, restaurantToEdit)
            .then(() => {
                toast.success('Changes saved successfully!', {
                    position: "top-center"
                })
            })
        toggleEdit()
    }

    return (
        restaurants.map((restaurant) =>
            <ContributionItem key={restaurant.id} className="restaurant-item">
                <ContributionText>Name: {restaurant.name}</ContributionText>
                <ContributionText>Website: {restaurant.website}</ContributionText>
                <ContributionText>Contact number: {restaurant.contactNumber}</ContributionText>
                <ContributionText>Contact email: {restaurant.contactEmail}</ContributionText>
                <EditOwnedRestaurantButton onClick={() => editOwnedRestaurant(restaurant)}>Manage</EditOwnedRestaurantButton>
                {isEditing && (
                    <PrimaryModal isOpen={isEditing} onClose={toggleEdit}>
                        <UserProfileText>Name</UserProfileText>
                        <PrimaryInput name={"name"} placeholder={restaurantToEdit.name} onChange={updateDataObject}></PrimaryInput>
                        <UserProfileText>Description</UserProfileText>
                        <PrimaryInput name={"description"} placeholder={restaurantToEdit.description} onChange={updateDataObject}></PrimaryInput>
                        <UserProfileText>Website</UserProfileText>
                        <PrimaryInput name={"website"} placeholder={restaurantToEdit.website} onChange={updateDataObject}></PrimaryInput>
                        <UserProfileText>Contact Number</UserProfileText>
                        <PrimaryInput name={"contactNumber"} placeholder={restaurantToEdit.contactNumber} onChange={updateDataObject}></PrimaryInput>
                        <UserProfileText>Contact Email</UserProfileText>
                        <PrimaryInput name={"contactEmail"} placeholder={restaurantToEdit.contactEmail} onChange={updateDataObject}></PrimaryInput>
                        <InfoButton onClick={() => saveRestaurantChanges(restaurant)}>Save</InfoButton>
                    </PrimaryModal>
                )}
            </ContributionItem>
        )
    )
}


export default UserProfileOwnedRestaurantList