import React, {useEffect, useState} from 'react';
import "./UserDetails.css";
import {useNavigate} from "react-router-dom";
import {useUserContext} from "../../context/UserContextProvider";
import RestaurantItem from "./RestaurantList";
import ReviewItem from "./ReviewList";
import {useUpdate} from "../../hooks/useUpdate";
import {useToggle} from "../../hooks/useToggle";
import {useApi} from "../../hooks/useApi";

const UserDetails = () => {
    const {user, logout} = useUserContext();
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
        })
        toggle()
    }

    const handleDeleteProfile = () => {
        const confirmation = window.confirm("Are you sure you want to delete the profile??");
        if (confirmation) {
            remove("api/v1/customers/" + user)
                .then(() => {
                    logout()
                    navigate('/main-page')
                })
        }
    }

    return (
        <div id="profile">
            <div id="details">
                <h1 id="details-header">Profile</h1>
                {isOpen ? (
                    <div>
                        <label className="details-text">Name:</label>
                        <input name="name" value={userDetails.name} onChange={updateDataObject}/>
                        <label className="details-text">Surname:</label>
                        <input name="surname" value={userDetails.surname} onChange={updateDataObject}/>
                        <button className="edit-button" onClick={handleSaveChanges}>Save changes</button>
                    </div>
                ) : (
                    <div>
                        <span className="details-text">Name: {userDetails.name}</span>
                        <span className="details-text">Surname: {userDetails.surname}</span>
                        <span className="details-text">Email: {userDetails.email}</span>
                        <span className="details-text">Created: {userDetails.submissionTime}</span>
                        <span className="details-text">Ownership: {userDetails.ownership}</span>
                        <button className="edit-button" onClick={toggle}>Edit data</button>
                        <button className="delete-button" onClick={handleDeleteProfile}>Delete profile</button>
                    </div>
                )}
            </div>
            <ReviewItem/>
            <RestaurantItem/>
        </div>
    )
        ;
}

export default UserDetails;
