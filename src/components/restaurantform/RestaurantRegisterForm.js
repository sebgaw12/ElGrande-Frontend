import React, {useState} from "react";
import {Link} from 'react-router-dom';
import IconArrowTurnLeft from './elements/icons/IconArrowTurnLeft';
import {StyleLongButton, StyleNormalButton, StyleRoundedBlueButton} from '../../styles/styles';
import RestaurantRegisterBasics from './subcomponents/RestaurantRegisterBasics';
import RestaurantRegisterAddress from './subcomponents/RestaurantRegisterAddress';
import RestaurantRegisterBusinessHours from './subcomponents/RestaurantRegisterBusinessHours';
import RestaurantRegisterImages from './subcomponents/RestaurantRegisterImages';

function RestaurantRegisterForm()
{
    const [currentPage, setCurrentPage] = useState(1);

    const [basicData, setBasicData] = useState({
        name: '',
        description: '',
        website: '',
        contactNumber: '',
        contactEmail: ''
    });

    const [addressData, setAddressData] = useState({
        country: '',
        city: '',
        postalCode: '',
        street: '',
        streetNumber: '',
        additionalDetails: ''
    })

    const [locationData, setLocationData] = useState({
        latitude: 1.5,
        longitude: 1.5
    })

    const [openingHoursData, setOpeningHoursData] = useState([])

    const updateBasicData = (e) => {
        setBasicData({
            ...basicData,
            [e.target.name]: e.target.value
        });
    };

    const updateAddressData = (e) => {
        setAddressData({
           ...addressData,
             [e.target.name]: e.target.value
        });
    }

    const updateLocationData = (e) => {
        setLocationData({
          ...locationData,
            [e.target.name]: e.target.value
        });
    }

    const updateOpenHoursData = (e) => {
        setOpeningHoursData(e);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedData = {
            restaurant: basicData,
            location: locationData,
            businessHour: openingHoursData,
            address: addressData
        }

        console.log(updatedData);

        try {
            const response = await fetch('http://127.0.0.1:8080/api/v1/forms/restaurant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                console.log('Data saved successfully.');
            } else {
                console.error('Error during saving data.');
            }
        } catch (error) {
            console.error('Error from server, code:', error);
        }
    };


    return (
        <section className="h-screen">
            <div className="g-6 flex h-full flex-col items-center justify-center lg:justify-between">
                <Link to={"/main-page"}>
                    <button className={StyleRoundedBlueButton}>
                        <IconArrowTurnLeft />
                    </button>
                </Link>

                <form onSubmit={handleSubmit} className="container grid grid-cols-1">
                    { currentPage === 1 && ( <RestaurantRegisterBasics formData={basicData} onChange={updateBasicData}/> ) }
                    { currentPage === 2 && ( <RestaurantRegisterAddress formData={addressData} onChange={updateAddressData}/> ) }
                    { currentPage === 3 && ( <RestaurantRegisterBusinessHours formData={openingHoursData} onChange={updateOpenHoursData}/> ) }
                    { currentPage === 4 && ( <RestaurantRegisterImages /> ) }
                    { currentPage === 4 && ( <button className={StyleNormalButton}>Send data</button> ) }
                </form>


                <div className="block space-x-2">
                    { currentPage > 1 && ( <button className={StyleNormalButton} onClick={() =>
                        setCurrentPage(currentPage - 1)}>
                        Previous
                    </button> )
                    }
                    { currentPage < 4 &&
                        ( <button className={StyleNormalButton} onClick={() =>
                            setCurrentPage(currentPage + 1)}>
                            Next
                        </button> )
                    }
                </div>

            </div>
        </section>
    );
}

export default RestaurantRegisterForm;