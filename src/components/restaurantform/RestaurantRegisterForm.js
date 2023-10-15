import React, {useState} from "react";
import {Link} from 'react-router-dom';
import IconArrowTurnLeft from './elements/icons/IconArrowTurnLeft';
import {StyleNormalButton, StyleRoundedBlueButton} from '../../styles/styles';
import RestaurantRegisterBasics from './subcomponents/RestaurantRegisterBasics';
import RestaurantRegisterAddress from './subcomponents/RestaurantRegisterAddress';
import RestaurantRegisterBusinessHours from './subcomponents/RestaurantRegisterBusinessHours';
import RestaurantRegisterImages from './subcomponents/RestaurantRegisterImages';
import {useApiForm} from "../../api/ApiForm";

function RestaurantRegisterForm() {
    const [currentPage, setCurrentPage] = useState(1);
    const {postRestaurant} = useApiForm()

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

    const [location, setLocation] = useState({
        latitude: 1.5,
        longitude: 1.5
    })

    const [businessHour, setBusinessHour] = useState([])

    const updateData = (updateFunction) => (e) => {
        updateFunction((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedData = {
            restaurant: restaurant,
            location: location,
            businessHour: businessHour,
            address: address
        }
        console.log(updatedData)
        postRestaurant(updatedData)

    };


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
                        <RestaurantRegisterBasics formData={restaurant}
                                                  onChange={updateData}/>)}
                    {currentPage === 2 && (
                        <RestaurantRegisterAddress formData={address} onChange={updateData}/>)}
                    {currentPage === 3 && (
                        <RestaurantRegisterBusinessHours formData={businessHour}
                                                         onChange={updateData}/>)}
                    {currentPage === 4 && (<RestaurantRegisterImages/>)}
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

export default RestaurantRegisterForm;