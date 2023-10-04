// BasicDataForm.jsx
import React, {useState} from 'react';

function RestaurantRegisterBasics({ formData, onChange })
{
    return (
        <>
            <input
                className="mb-4"
                type='text'
                name='name'
                placeholder='name'
                onChange={onChange}
                value={formData.name}
            />
            <textarea
                className="mb-4"
                name='description'
                placeholder='description'
                onChange={onChange}
                value={formData.description}
            />
            <input
                className="mb-4"
                type='text'
                name='website'
                placeholder='website'
                onChange={onChange}
                value={formData.website}
            />
            <input
                className="mb-4"
                type='tel'
                name='contactNumber'
                placeholder='Contact Number'
                onChange={onChange}
                value={formData.contactNumber}
            />
            <input
                className="mb-4"
                type='email'
                name='contactEmail'
                placeholder='Contact Email'
                onChange={onChange}
                value={formData.contactEmail}
            />
        </>
    );
}

export default RestaurantRegisterBasics;
