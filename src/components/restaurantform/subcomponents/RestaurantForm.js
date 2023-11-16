import React from 'react';
import {useUpdate} from "../../../hooks/useUpdate";
import {FormInput} from "../form.styles";

function RestaurantForm({data, setDataFunction}) {
    const {updateDataObject} = useUpdate(data, setDataFunction)

    return (
        <div>
            <FormInput type={"text"} name={"name"} placeholder={"Name"} onChange={updateDataObject}></FormInput>
            <FormInput type={"string"} name={"description"}  placeholder={"Description"} onChange={updateDataObject}></FormInput>
            <FormInput type={"text"} name={"website"}  placeholder={"Website"} onChange={updateDataObject}></FormInput>
            <FormInput type={"tel"} name={"contactNumber"}  placeholder={"Contact Number"} onChange={updateDataObject}></FormInput>
            <FormInput type={"email"} name={"contactEmail"}  placeholder={"Contact Email"} onChange={updateDataObject}></FormInput>
        </div>
    );
}

export default RestaurantForm;
