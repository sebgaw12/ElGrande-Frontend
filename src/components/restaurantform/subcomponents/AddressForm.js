import React from 'react';
import {useUpdate} from "../../../hooks/useUpdate";
import {FormInput} from "../form.styles";

function AddressForm({data, setDataFunction}) {
    const {updateDataObject} = useUpdate(data, setDataFunction)

    return (
        <div>
            <FormInput type={"string"} placeholder={"Country"} onChange={updateDataObject}></FormInput>
            <FormInput type={"string"} placeholder={"City"} onChange={updateDataObject}></FormInput>
            <FormInput type={"string"} placeholder={"Postal Code"} onChange={updateDataObject}></FormInput>
            <FormInput type={"string"} placeholder={"Street"} onChange={updateDataObject}></FormInput>
            <FormInput type={"string"} placeholder={"Street Number"} onChange={updateDataObject}></FormInput>
            <FormInput type={"string"} placeholder={"Additional Details"} onChange={updateDataObject}></FormInput>
        </div>
    );
}

export default AddressForm;
