import React from "react";

const UserDetails = ({userDetails, handleDeleteProfile, toggleOwnershipForm, toggleDetailsForm}) => {
    return (
        <div className="flex flex-col">
            <span className="details-text">Email: {userDetails.email}</span>
            <span className="details-text">Created: {userDetails.submissionTime}</span>
            {userDetails.ownershipId ? (
                <span className="details-text">Ownership: Yes</span>
            ) : (
                <></>
            )}

            <div className="flex flex-row justify-center mt-3">
                <button className="edit-button" onClick={toggleDetailsForm}>Edit data</button>
                <button className="delete-button" onClick={handleDeleteProfile}>Delete profile</button>
                <button className="edit-button" onClick={toggleOwnershipForm}>Become an Owner</button>
            </div>
        </div>
    )
}

export default UserDetails
