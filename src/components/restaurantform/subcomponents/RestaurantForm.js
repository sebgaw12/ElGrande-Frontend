import React from 'react';
import {useUpdate} from "../../../hooks/useUpdate";

function RestaurantForm({data, setDataFunction}) {
    const {updateDataObject} = useUpdate(data, setDataFunction)

    return (
        <>
            <input
                className="mb-4"
                type='text'
                name='name'
                placeholder='name'
                onChange={updateDataObject}
                value={data.name}
            />
            <textarea
                className="mb-4"
                name='description'
                placeholder='description'
                onChange={updateDataObject}
                value={data.description}
            />
            <input
                className="mb-4"
                type='text'
                name='website'
                placeholder='website'
                onChange={updateDataObject}
                value={data.website}
            />
            <input
                className="mb-4"
                type='tel'
                name='contactNumber'
                placeholder='Contact Number'
                onChange={updateDataObject}
                value={data.contactNumber}
            />
            <input
                className="mb-4"
                type='email'
                name='contactEmail'
                placeholder='Contact Email'
                onChange={updateDataObject}
                value={data.contactEmail}
            />
        </>
    );
}

export default RestaurantForm;
