import React from "react";
import {
    DangerButton,
    EditButton,
    InfoButton,
    UserCredentialsPanel,
    UserImage,
    UserProfileDetails,
    UserProfileText
} from "./UserProfile.styles";
import defaultPerson from "../../images/default_person.png";
import {PrimaryInput} from "../../styles/global.styles";
import {useToggle} from "../../hooks/useToggle";
import PrimaryModal from "../globalcomponents/PrimaryModal";
import UserOwnershipForm from "./UserOwnershipForm";

const UserDetails = ({userDetails}) => {

    const {isOpen: isEditing, toggle: toggleEdit} = useToggle()
    const {isOpen: isDeleting, toggle: toggleDelete} = useToggle()
    const {isOpen: isOwnershipFormOpen, toggle: toggleOwnershipForm} = useToggle()

    return (
        <UserProfileDetails>
            <UserImage alt="person" src={defaultPerson}/>
            <UserCredentialsPanel>
                <UserProfileText>Name: {userDetails.name} </UserProfileText>
                <UserProfileText>Surname: {userDetails.surname}</UserProfileText>
                <UserProfileText>Email: {userDetails.email}</UserProfileText>
                <UserProfileText>Created at: {userDetails.submissionTime}</UserProfileText>
                {userDetails.ownershipId && (
                    <UserProfileText className="details-text">Ownership: Yes</UserProfileText>
                )}
            </UserCredentialsPanel>
            <EditButton onClick={toggleEdit}>Edit data</EditButton>
            <DangerButton onClick={toggleDelete}>Delete profile</DangerButton>
            <InfoButton onClick={toggleOwnershipForm}>Become an Owner</InfoButton>
            {isEditing && (
                <PrimaryModal isOpen={isEditing} onClose={toggleEdit}>
                    <UserProfileText>Name </UserProfileText>
                    <PrimaryInput placeholder={userDetails.name}></PrimaryInput>
                    <UserProfileText>Surname </UserProfileText>
                    <PrimaryInput placeholder={userDetails.surname}></PrimaryInput>
                    <InfoButton>Save</InfoButton>
                </PrimaryModal>
            )}
            {isDeleting && (
                <PrimaryModal isOpen={isDeleting} onClose={toggleDelete}>
                    <UserProfileText>Are you sure you want to delete this account?</UserProfileText>
                    <UserProfileText>This action is permanent and you won't be able to restore it</UserProfileText>
                    <DangerButton>YES</DangerButton>
                </PrimaryModal>
            )}
            {isOwnershipFormOpen && (
                <UserOwnershipForm isOpen={isOwnershipFormOpen}
                                   toggle={toggleOwnershipForm}
                                   userDetails={userDetails}>
                </UserOwnershipForm>
            )}
        </UserProfileDetails>
    )
}

export default UserDetails
