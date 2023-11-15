import React from 'react';
import {useUpdate} from "../../../hooks/useUpdate";
import {FormInput} from "../form.styles";

function RestaurantForm({data, setDataFunction}) {
    const {updateDataObject} = useUpdate(data, setDataFunction)

    return (
        <div>
            <FormInput type={"text"} placeholder={"Name"} onChange={updateDataObject}></FormInput>
            <FormInput type={"string"} placeholder={"Description"} onChange={updateDataObject}></FormInput>
            <FormInput type={"text"} placeholder={"Website"} onChange={updateDataObject}></FormInput>
            <FormInput type={"tel"} placeholder={"Contact Number"} onChange={updateDataObject}></FormInput>
            <FormInput type={"email"} placeholder={"Contact Email"} onChange={updateDataObject}></FormInput>
        </div>
    );
}

export default RestaurantForm;
