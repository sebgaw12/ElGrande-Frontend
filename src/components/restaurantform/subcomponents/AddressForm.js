import React from 'react';
import {useUpdate} from "../../../hooks/useUpdate";

function AddressForm({data, setDataFunction}) {
    const {updateDataObject} = useUpdate(data, setDataFunction)

    return (
        <>
            <input
                className="mb-4"
                type='string'
                name='country'
                placeholder='Country'
                onChange={updateDataObject}
                value={data.country}
            />
            <input
                className="mb-4"
                type='string'
                name='city'
                placeholder='City'
                onChange={updateDataObject}
                value={data.city}
            />
            <input
                className="mb-4"
                type='string'
                name='postalCode'
                placeholder='Postal Code'
                onChange={updateDataObject}
                value={data.postalCode}
            />
            <input
                className="mb-4"
                type='string'
                name='street'
                placeholder='Street'
                onChange={updateDataObject}
                value={data.street}
            />
            <input
                className="mb-4"
                type='string'
                name='streetNumber'
                placeholder='Street Number'
                onChange={updateDataObject}
                value={data.streetNumber}
            />
            <textarea
                className="mb-4"
                name='additionalDetails'
                placeholder='Additional Details'
                onChange={updateDataObject}
                value={data.additionalDetails}
            />
        </>
    );
}

export default AddressForm;
