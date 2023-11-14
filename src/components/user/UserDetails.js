import React from "react";
import {
    DangerButton,
    EditButton,
    InfoButton,
    UserCredentialsPanel, UserImage,
    UserProfileDetails,
    UserContributePanel
} from "./UserProfile.styles";
import defaultPerson from "../../images/default_person.png";
import {PrimaryText} from "../../styles/global.styles";

const UserDetails = ({userDetails, handleDeleteProfile, toggleOwnershipForm, toggleDetailsForm}) => {
    return (
        <UserProfileDetails>
            <UserImage alt="person" src={defaultPerson}/>
            <UserCredentialsPanel>
                <PrimaryText>Name: {userDetails.name} </PrimaryText>
                <PrimaryText>Surname: {userDetails.surname}</PrimaryText>
                <PrimaryText>Email: {userDetails.email}</PrimaryText>
                <PrimaryText>Created at: {userDetails.submissionTime}</PrimaryText>
                {userDetails.ownershipId && (
                    <PrimaryText className="details-text">Ownership: Yes</PrimaryText>
                )}
            </UserCredentialsPanel>
            <EditButton onClick={toggleDetailsForm}>Edit data</EditButton>
            <DangerButton onClick={handleDeleteProfile}>Delete profile</DangerButton>
            <InfoButton onClick={toggleOwnershipForm}>Become an Owner</InfoButton>
        </UserProfileDetails>
    )
}

export default UserDetails
