import React, {useEffect, useState} from 'react';
import "./UserContainer.css";
import {useNavigate} from "react-router-dom";
import {useUserContext} from "../../context/UserContextProvider";
import {useUpdate} from "../../hooks/useUpdate";
import {useToggle} from "../../hooks/useToggle";
import {useApi} from "../../hooks/useApi";
import {toast} from "react-toastify";
import UserDetailsForm from "./UserDetailsForm";
import UserDetails from "./UserDetails";
import defaultPerson from "../../images/default_person.png";
import ReviewRestaurantContainer from "./ReviewRestaurantContainer";

const UserContainer = () => {
    const {user, removeUserCredentialsFromStorage} = useUserContext();
    const {get, put, remove} = useApi();
    const [userDetails, setUserDetails] = useState({
        name: undefined,
        surname: undefined,
        email: undefined,
        submissionTime: null,
        ownership: false
    });
    const {isOpen, toggle} = useToggle()
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
        toggle()
    }

    const handleDeleteProfile = () => {
        const confirmation = window.confirm("Are you sure you want to delete the profile??");
        if (confirmation) {
            remove("api/v1/customers/" + user)
                .then(() => {
                    removeUserCredentialsFromStorage()
                    navigate('/main-page')
                })
        }
    }

    return (
        <div id="profile" className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div id="details" className="md:col-span-1">
                <div className="flex flex-row m-3">
                    <img alt="person" src={defaultPerson}/>
                    <h1 id="details-header" className="p-4">{userDetails.name} {userDetails.surname}</h1>
                </div>
                {isOpen ? (
                    <UserDetailsForm
                        userDetails={userDetails}
                        updateDataObject={updateDataObject}
                        handleSaveChanges={handleSaveChanges}
                        toggle={toggle}
                    />
                ) : (
                    <UserDetails
                        userDetails={userDetails}
                        toggle={toggle}
                        handleDeleteProfile={handleDeleteProfile}
                    />
                )}
            </div>
            <div className="md:col-span-2">
                <ReviewRestaurantContainer/>
            </div>
        </div>
    )
}

export default UserContainer;
