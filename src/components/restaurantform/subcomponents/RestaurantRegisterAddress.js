import React from 'react';

function RestaurantRegisterAddress({ formData, onChange }) {

    return (
        <>
            <input
                className="mb-4"
                type='string'
                name='country'
                placeholder='Country'
                onChange={onChange}
                value={formData.country}
            />
            <input
                className="mb-4"
                type='string'
                name='city'
                placeholder='City'
                onChange={onChange}
                value={formData.city}
            />
            <input
                className="mb-4"
                type='string'
                name='postalCode'
                placeholder='Postal Code'
                onChange={onChange}
                value={formData.postalCode}
            />
            <input
                className="mb-4"
                type='string'
                name='street'
                placeholder='Street'
                onChange={onChange}
                value={formData.street}
            />
            <input
                className="mb-4"
                type='string'
                name='streetNumber'
                placeholder='Street Number'
                onChange={onChange}
                value={formData.streetNumber}
            />
            <textarea
                className="mb-4"
                name='additionalDetails'
                placeholder='Additional Details'
                onChange={onChange}
                value={formData.additionalDetails}
            />
        </>
    );
}

export default RestaurantRegisterAddress;
