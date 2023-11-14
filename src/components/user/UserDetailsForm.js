import React from "react";

const UserDetailsForm = ({userDetails, handleSaveChanges, toggle, updateDataObject}) => {
    return (
        <div className="flex flex-col">
            <label className="details-text">Name:</label>
            <input className="mr-5 ml-5" name="name" value={userDetails.name} onChange={updateDataObject}/>
            <label className="details-text">Surname:</label>
            <input className="mr-5 ml-5" name="surname" value={userDetails.surname} onChange={updateDataObject}/>
            <div className="flex flex-row justify-center mt-3">
                <button className="edit-button" onClick={handleSaveChanges}>Save changes</button>
                <button className="delete-button" onClick={toggle}>Close</button>
            </div>
        </div>
    )
}

export default UserDetailsForm
