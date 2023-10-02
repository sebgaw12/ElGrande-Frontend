import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import UserRegisterFormView from './UserRegisterFormView';
import {ApiCustomer} from "../../api/ApiCustomer";

const UserRegisterForm = () => {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    const childToParent = async (childData) => {
        if (childData.password !== childData.passwordRepeat) {
            alert("Passwords do not match");
            return;
        }

        const updatedUserData = {
            name: childData.name,
            surname: childData.surname,
            email: childData.email,
            password: childData.password,
        };

        setUserData(updatedUserData);
        await handleSubmit(updatedUserData);
    }

    const handleSubmit = (updatedUserData) => {
        ApiCustomer.signUp(updatedUserData)
            .then(response =>
                navigate('/login')
            )
    };

    return (
        <div>
            <UserRegisterFormView
                childToParent={childToParent}
            />
        </div>
    );
}

export default UserRegisterForm;