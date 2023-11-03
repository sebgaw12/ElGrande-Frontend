import React from "react";

const UserDetails = ({userDetails, handleDeleteProfile, toggle}) => {
    console.log(userDetails);
    return (
        <div className="flex flex-col">
            <span className="details-text">Email: {userDetails.email}</span>
            <span className="details-text">Created: {userDetails.submissionTime}</span>
            {userDetails.ownership ? (
                <span className="details-text">Ownership: {userDetails.ownership}</span>
            ) : (
                <></>
            )}

            <div className="flex flex-row justify-center mt-3">
                <button className="edit-button" onClick={toggle}>Edit data</button>
                <button className="delete-button" onClick={handleDeleteProfile}>Delete profile</button>
            </div>
        </div>
    )
}

export default UserDetails
