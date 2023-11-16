import React from 'react';
import {useUpdate} from "../../../hooks/useUpdate";
import {FormInput} from "../form.styles";

function AddressForm({data, setDataFunction}) {
    const {updateDataObject} = useUpdate(data, setDataFunction)

    return (
        <div>
            <FormInput type={"string"} name={"country"} placeholder={"Country"} onChange={updateDataObject}></FormInput>
            <FormInput type={"string"} name={"city"} placeholder={"City"} onChange={updateDataObject}></FormInput>
            <FormInput type={"string"} name={"postalCode"} placeholder={"Postal Code"} onChange={updateDataObject}></FormInput>
            <FormInput type={"string"} name={"street"} placeholder={"Street"} onChange={updateDataObject}></FormInput>
            <FormInput type={"string"} name={"streetNumber"} placeholder={"Street Number"} onChange={updateDataObject}></FormInput>
            <FormInput type={"string"} name={"additionalDetails"} placeholder={"Additional Details"} onChange={updateDataObject}></FormInput>
        </div>
    );
}

export default AddressForm;
