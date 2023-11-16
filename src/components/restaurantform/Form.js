import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import IconArrowTurnLeft from '../globalcomponents/IconArrowTurnLeft';
import {StyleNormalButton, StyleRoundedBlueButton} from '../../styles/styles';
import RestaurantForm from './subcomponents/RestaurantForm';
import AddressForm from './subcomponents/AddressForm';
import BusinessHourForm from './subcomponents/BusinessHourForm';
import ImageForm from './subcomponents/ImageForm';
import {useApi} from "../../hooks/useApi";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {CUSTOMER_ID} from "../../constants/UserCredentials";
import {useMapbox} from "../../hooks/useMapbox";
import "./progressBar.css"
import {ButtonContainer, FormBtn, FormStyle, RestaurantFormSite} from "./form.styles";
import BackButton from "../globalcomponents/BackButton";
import {MAIN_PAGE} from "../../constants/RoutePaths";

function Form() {
    const [currentPage, setCurrentPage] = useState(1);
    const {getLocalStorage} = useLocalStorage(CUSTOMER_ID, '')
    const {post} = useApi()
    const navigate = useNavigate()
    const AMOUNT_OF_DAYS = 7

    const [restaurant, setRestaurant] = useState({
        name: '',
        description: '',
        website: '',
        contactNumber: '',
        contactEmail: ''
    });

    const [address, setAddress] = useState({
        country: '',
        city: '',
        postalCode: '',
        street: '',
        streetNumber: '',
        additionalDetails: ''
    })

    const initBusinessHour = []

    for (let i = 0; i < AMOUNT_OF_DAYS; i++) {
        initBusinessHour.push({
                dayOfWeek: i + 1,
                openingHour: '08:00',
                closingHour: '16:00'
            }
        )
    }

    const [businessHour, setBusinessHour] = useState(initBusinessHour)
    const {setAddressFromMapApi} = useMapbox()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {newCoordinates, newAddress} = await setAddressFromMapApi(address)

        const updatedData = {
            restaurant: restaurant,
            location: newCoordinates,
            businessHour: businessHour,
            address: newAddress,
            customerId: getLocalStorage()
        }
        post("api/v1/forms/restaurant", updatedData)
            .then(() => {
                navigate("/main-page")
            })
    };

    function ProgressBar({currentPage}) {
        const totalSteps = 4;
        const progress = (currentPage / totalSteps) * 100;

        return (
            <div className="progress-bar-container">
                <div className="progress-bar" style={{width: `${progress}%`}}></div>
            </div>
        );
    }


    return (
        <section className="h-screen">
            <FormStyle>
                <BackButton handleClick={() => navigate("/")}/>
                <form className="container grid grid-cols-1">
                    {currentPage === 1 && (
                        <RestaurantForm data={restaurant}
                                        setDataFunction={setRestaurant}/>)}
                    {currentPage === 2 && (
                        <AddressForm data={address}
                                     setDataFunction={setAddress}/>)}
                    {currentPage === 3 && (
                        <BusinessHourForm data={businessHour}
                                          setDataFunction={setBusinessHour}/>)}
                    {currentPage === 4 && (<ImageForm/>)}
                </form>
                <ProgressBar currentPage={currentPage}/>
                <ButtonContainer>
                    {currentPage > 1 && (
                        <FormBtn onClick={() => setCurrentPage(currentPage - 1)}>
                            <p>Previous</p>
                        </FormBtn>
                    )}
                    {currentPage < 4 && (
                        <FormBtn onClick={() => setCurrentPage(currentPage + 1)}>
                            <p>Next</p>
                        </FormBtn>
                    )}
                    {currentPage === 4 && (
                        <FormBtn onClick={handleSubmit}>
                            <p>Send Form</p>
                        </FormBtn>
                    )}
                </ButtonContainer>
            </FormStyle>
        </section>
    );
}

export default Form;