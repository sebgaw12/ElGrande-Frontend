import React, {useEffect, useState} from 'react';
import "./UserDetails.css";
import {useNavigate} from "react-router-dom";
import {useApiUser} from "../../api/ApiCustomer";
import {useUserContext} from "../../context/UserContextProvider";
import RestaurantItem from "./Restaurant";
import ReviewItem from "./Review";

const UserDetails = () => {
    const {user, logout} = useUserContext();
    const {getCustomerById, deleteCustomer, editCustomer} = useApiUser();
    const [userDetails, setUserDetails] = useState({
        name: "",
        surname: "",
        email: "",
        submissionTime: null,
        ownership: false
    });
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        getCustomerById(user)
            .then(response => {
                setUserDetails({
                    name: response.name,
                    surname: response.surname,
                    email: response.email,
                    submissionTime: response.submissionTime,
                    ownership: response.ownership ? "Yes" : "No"
                })
            })
    }, []);

    const handleOnChange = (e) => {
        e.preventDefault()
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSaveChanges = () => {
        setIsEditing(false);
        editCustomer(userDetails, user)
    }

    const handleDeleteProfile = () => {
        const confirmation = window.confirm("Are you sure you want to delete the profile??");
        if (confirmation) {
            deleteCustomer(user)
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
                {isEditing ? (
                    <div>
                        <label className="details-text">Name:</label>
                        <input name="name" value={userDetails.name} onChange={handleOnChange}/>
                        <label className="details-text">Surname:</label>
                        <input name="name" value={userDetails.surname} onChange={handleOnChange}/>
                        <button className="edit-button" onClick={handleSaveChanges}>Save changes</button>
                    </div>
                ) : (
                    <div>
                        <span className="details-text">Name: {userDetails.name}</span>
                        <span className="details-text">Surname: {userDetails.surname}</span>
                        <span className="details-text">Email: {userDetails.email}</span>
                        <span className="details-text">Created: {userDetails.submissionTime}</span>
                        <span className="details-text">Ownership: {userDetails.ownership}</span>
                        <button className="edit-button" onClick={() => setIsEditing(true)}>Edit data</button>
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
