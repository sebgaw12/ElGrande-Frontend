import {mockCustomer} from "../../mockdata/MockCustomer";
import React, { useState } from 'react';
import "./CustomerDetails.css";

const CustomerDetails = () => {
    const [areCommentsVisible, setAreCommentsVisible] = useState(false);

    const toggleCommentsVisibility = () => {
        setAreCommentsVisible(!areCommentsVisible);
    }

    return (
        <div id="profile">
            <div id="details">
                <h1 id="details-header">Profile</h1>
                <div id="details-text">Customer: {mockCustomer.name} {mockCustomer.surname}</div>
                <div id="details-text">email: {mockCustomer.email}</div>
            </div>
            <div id="comments">
                <button id="show-comments-button" onClick={toggleCommentsVisibility}>
                    {areCommentsVisible ? "Hide comments" : "Show comments"}
                </button>
            </div>
        </div>
    );
}

export default CustomerDetails;
