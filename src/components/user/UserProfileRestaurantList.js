import React from 'react';
import {ContributionItem, ContributionText} from "./UserProfile.styles";

const UserProfileRestaurantList = ({restaurants}) => {

    return (
        restaurants.map((restaurant) =>
            <ContributionItem key={restaurant.id} className="restaurant-item">
                <ContributionText>Name: {restaurant.name}</ContributionText>
                <ContributionText>Website: {restaurant.website}</ContributionText>
                <ContributionText>Contact number: {restaurant.contactNumber}</ContributionText>
                <ContributionText>Contact email: {restaurant.contactEmail}</ContributionText>
            </ContributionItem>
        )
    )
}

export default UserProfileRestaurantList;
