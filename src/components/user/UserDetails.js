import React, {useState} from "react";
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
import {useUpdate} from "../../hooks/useUpdate";
import {useApi} from "../../hooks/useApi";
import {useUserContext} from "../../context/UserContextProvider";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {
    const {user, removeUserCredentials} = useUserContext()
    const {isOpen: isEditing, toggle: toggleEdit} = useToggle()
    const {isOpen: isDeleting, toggle: toggleDelete} = useToggle()
    const {isOpen: isOwnershipFormOpen, toggle: toggleOwnershipForm} = useToggle()
    const [userEditData, setUserEditData] = useState({
        name: userDetails.name,
        surname: userDetails.surname
    })
    const {updateDataObject} = useUpdate(userEditData, setUserEditData)
    const {put, remove} = useApi()
    const navigate = useNavigate()

    const handleEditUser = () => {
        put("api/v1/customers/" + user, userEditData)
            .then(() => {
                toast.success("Data changed successfully", {position: "top-center"})
            })
        toggleEdit()
    }

    const handleDeleteUser = () => {
        remove("api/v1/customers/" + user)
            .then(() => {
                toast.success("User deleted successfully", {position: "top-center"})
                removeUserCredentials()
                navigate("/")
            })
    }

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
                    <PrimaryInput name={"name"} onChange={updateDataObject}
                                  placeholder={userEditData.name}></PrimaryInput>
                    <UserProfileText>Surname </UserProfileText>
                    <PrimaryInput name={"surname"} onChange={updateDataObject}
                                  placeholder={userEditData.surname}></PrimaryInput>
                    <InfoButton onClick={handleEditUser}>Save</InfoButton>
                </PrimaryModal>
            )}
            {isDeleting && (
                <PrimaryModal isOpen={isDeleting} onClose={toggleDelete}>
                    <UserProfileText>Are you sure you want to delete this account?</UserProfileText>
                    <UserProfileText>This action is permanent and you won't be able to restore it</UserProfileText>
                    <DangerButton onClick={handleDeleteUser}>YES</DangerButton>
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
