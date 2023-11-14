import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useUserContext} from "../../context/UserContextProvider";
import {useUpdate} from "../../hooks/useUpdate";
import {useToggle} from "../../hooks/useToggle";
import {useApi} from "../../hooks/useApi";
import {toast} from "react-toastify";
import UserDetailsForm from "./UserDetailsForm";
import UserDetails from "./UserDetails";
import UserContributeDetails from "./UserContributeDetails";
import UserOwnershipForm from "./UserOwnershipForm";
import {UserProfileGrid} from "./UserProfile.styles";

const UserProfileContainer = () => {
    const {user, removeUserCredentials} = useUserContext();
    const {get, put, remove} = useApi();
    const [userDetails, setUserDetails] = useState({
        name: undefined,
        surname: undefined,
        email: undefined,
        submissionTime: null,
        ownershipId: null
    });
    const {isOpen: isUserDetailsFormOpen, toggle: setUserDetailsFormOpen} = useToggle()
    const {isOpen: isOwnershipFormOpen, toggle: setOwnershipFormOpen} = useToggle()
    const navigate = useNavigate()
    const {updateDataObject} = useUpdate(userDetails, setUserDetails)

    useEffect(() => {
        get("api/v1/customers/" + user + "/details", {})
            .then(response => setUserDetails(response))
    }, []);

    const handleSaveChanges = () => {
        put("api/v1/customers/" + user, {
            name: userDetails.name,
            surname: userDetails.surname
        }).then(() => {
            toast.success('Zapisano zmiany!', {
                position: "top-center"
            })
        })
        setUserDetailsFormOpen()
    }

    const handleDeleteProfile = () => {
        const confirmation = window.confirm("Are you sure you want to delete the profile??");
        if (confirmation) {
            remove("api/v1/customers/" + user)
                .then(() => {
                    removeUserCredentials()
                    navigate('/main-page')
                })
        }
    }

    return (
        <UserProfileGrid>
            {isUserDetailsFormOpen ? (
                <UserDetailsForm
                    userDetails={userDetails}
                    updateDataObject={updateDataObject}
                    toggle={setUserDetailsFormOpen}
                />
            ) : isOwnershipFormOpen ? (
                <UserOwnershipForm
                    isOpen={isOwnershipFormOpen}
                    toggle={setOwnershipFormOpen}
                    userDetails={userDetails}
                />
            ) : (
                <UserDetails
                    userDetails={userDetails}
                    handleSaveChanges={handleSaveChanges}
                    toggleDetailsForm={setUserDetailsFormOpen}
                    toggleOwnershipForm={setOwnershipFormOpen}
                    handleDeleteProfile={handleDeleteProfile}
                />
            )}
            <UserContributeDetails userDetails={userDetails}/>
        </UserProfileGrid>
    )
}

export default UserProfileContainer;
