import React, {useState} from "react";
import {Link} from 'react-router-dom';
import IconArrowTurnLeft from './elements/icons/IconArrowTurnLeft';
import {StyleNormalButton, StyleRoundedBlueButton} from '../../styles/styles';
import RestaurantForm from './subcomponents/RestaurantForm';
import AddressForm from './subcomponents/AddressForm';
import BusinessHourForm from './subcomponents/BusinessHourForm';
import ImageForm from './subcomponents/ImageForm';
import {useApi} from "../../hooks/useApi";
import {useMapbox} from "../mainpage/useMapbox";

function Form() {
    const [currentPage, setCurrentPage] = useState(1);
    const {post} = useApi()
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
            address: newAddress
        }
        post("api/v1/forms/restaurant", updatedData)
    }

    return (
        <section className="h-screen">
            <div className="g-6 flex h-full flex-col items-center justify-center lg:justify-between">
                <Link to={"/main-page"}>
                    <button className={StyleRoundedBlueButton}>
                        <IconArrowTurnLeft/>
                    </button>
                </Link>

                <form onSubmit={handleSubmit} className="container grid grid-cols-1">
                    {currentPage === 1 && (
                        <RestaurantForm data={restaurant}
                                        setDataFunction={setRestaurant}/>)}
                    {currentPage === 2 && (
                        <AddressForm data={address} setDataFunction={setAddress}/>)}
                    {currentPage === 3 && (
                        <BusinessHourForm data={businessHour}
                                          setDataFunction={setBusinessHour}/>)}
                    {currentPage === 4 && (<ImageForm/>)}
                    {currentPage === 4 && (<button className={StyleNormalButton}>Send data</button>)}
                </form>


                <div className="block space-x-2">
                    {currentPage > 1 && (<button className={StyleNormalButton} onClick={() =>
                        setCurrentPage(currentPage - 1)}>
                        Previous
                    </button>)
                    }
                    {currentPage < 4 &&
                        (<button className={StyleNormalButton} onClick={() =>
                            setCurrentPage(currentPage + 1)}>
                            Next
                        </button>)
                    }
                </div>
            </div>
        </section>
    );
}

export default Form;