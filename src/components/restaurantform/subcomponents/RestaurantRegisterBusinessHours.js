// BusinessHoursForm.jsx
import React, { useState } from 'react';

function RestaurantRegisterBusinessHours({ formData, onChange })
{
    const [businessHours, setBusinessHours] = useState(
        []);

    function createBusinessHours(dayOfWeek, openingHour, closingHour)
    {
        return {
            dayOfWeek,
            openingHour,
            closingHour
        };
    }

    const updateBusinessHours = (dayOfWeek, hourType, value) => {
        setBusinessHours((prevBusinessHours) => {
            const existingDayIndex = prevBusinessHours.findIndex(
                (hour) => hour.dayOfWeek === dayOfWeek
            );

            if (existingDayIndex !== -1) {
                const updatedHours = [...prevBusinessHours];
                updatedHours[existingDayIndex] = {
                    ...updatedHours[existingDayIndex],
                    [hourType]: value,
                };
                return updatedHours;
            } else {
                const newBusinessHour = createBusinessHours(dayOfWeek, "08:00", "16:00");
                newBusinessHour[hourType] = value;
                return [...prevBusinessHours, newBusinessHour];
            }
        });
        onChange(businessHours);
    };



    return(
        <>
            <div className="container grid grid-cols-3">
                <span>Monday: </span>
                <div className="mb1">
                    <label htmlFor="monday-open">Open: </label>
                    <input type="time"
                           id="monday-open"
                           name="openingHour"
                           defaultValue="08:00"
                           onChange={(e) => updateBusinessHours(1, 'openingHour', e.target.value)}
                           required />
                </div>
                <div className="mb1">
                    <label htmlFor="monday-close">Close: </label>
                    <input type="time" id="monday-close" name="closingHour" defaultValue="16:00"
                           onChange={(e) => updateBusinessHours(1, 'closingHour', e.target.value)}
                           required />
                </div>
            </div>
            <div className="container grid grid-cols-3">
                <span>Tuesday: </span>
                <div className="mb1">
                    <label htmlFor="tuesday-open">Open: </label>
                    <input type="time" id="tuesday-open" name="openingHour"
                           onChange={(e) => updateBusinessHours(2, 'openingHour', e.target.value)}
                           defaultValue="08:00"
                           required />
                </div>
                <div className="mb1">
                    <label htmlFor="tuesday-open">Close: </label>
                    <input type="time" id="tuesday-close" name="closingHour"
                           onChange={(e) => updateBusinessHours(2, 'closingHour', e.target.value)}
                           defaultValue="16:00"
                           required />
                </div>
            </div>
            <div className="container grid grid-cols-3">
                <span>Wednesday :</span>
                <div className="mb1">
                    <label htmlFor="wednesday-open">Open: </label>
                    <input type="time" id="wednesday-open" name="wednesday-open"
                           onChange={(e) => updateBusinessHours(3, 'openingHour', e.target.value)}
                           defaultValue="08:00" required />
                </div>
                <div className="mb1">
                    <label htmlFor="wednesday-close">Close: </label>
                    <input type="time" id="wednesday-close" name="wednesday-close"
                           onChange={(e) => updateBusinessHours(3, 'closingHour', e.target.value)}
                           defaultValue="16:00" required />
                </div>
            </div>
            <div className="container grid grid-cols-3">
                <span>Thursday :</span>
                <div className="mb1">
                    <label htmlFor="thursday-open">Open: </label>
                    <input type="time" id="thursday-open"
                           onChange={(e) => updateBusinessHours(4, 'openingHour', e.target.value)}
                           name="thursday-open" defaultValue="08:00" required />
                </div>
                <div className="mb1">
                    <label htmlFor="thursday-close">Close: </label>
                    <input type="time" id="thursday-close" name="thursday-close"
                           onChange={(e) => updateBusinessHours(4, 'closingHour', e.target.value)}
                           defaultValue="16:00" required />
                </div>
            </div>
            <div className="container grid grid-cols-3">
                <span>Friday :</span>
                <div className="mb1">
                    <label htmlFor="friday-open">Open: </label>
                    <input type="time" id="friday-open" name="friday-open"
                           onChange={(e) => updateBusinessHours(5, 'openingHour', e.target.value)}
                           defaultValue="08:00" required />
                </div>
                <div className="mb1">
                    <label htmlFor="friday-close">Close: </label>
                    <input type="time" id="friday-close" name="friday-close"
                           onChange={(e) => updateBusinessHours(5, 'closingHour', e.target.value)}
                           defaultValue="16:00" required />
                </div>
            </div>
            <div className="container grid grid-cols-3">
                <span>Saturday :</span>
                <div className="mb1">
                    <label htmlFor="saturday-open">Open: </label>
                    <input type="time" id="saturday-open" name="saturday-open"
                           onChange={(e) => updateBusinessHours(6, 'openingHour', e.target.value)}
                           defaultValue="08:00" required />
                </div>
                <div className="mb1">
                    <label htmlFor="saturday-close">Close: </label>
                    <input type="time" id="saturday-close" name="saturday-close"
                           onChange={(e) => updateBusinessHours(6, 'closingHour', e.target.value)}
                           defaultValue="16:00" required />
                </div>
            </div>
            <div className="container grid grid-cols-3">
                <span>Sunday :</span>
                <div className="mb1">
                    <label htmlFor="sunday-open">Open: </label>
                    <input type="time" id="sunday-open" name="sunday-open"
                           onChange={(e) => updateBusinessHours(7, 'openingHour', e.target.value)}
                           defaultValue="08:00" required />
                </div>
                <div className="mb1">
                    <label htmlFor="sunday-close">Close: </label>
                    <input type="time" id="sunday-close" name="sunday-close"
                           onChange={(e) => updateBusinessHours(7, 'closingHour', e.target.value)}
                           defaultValue="16:00" required />
                </div>
            </div>


        </>
    );
}

export default RestaurantRegisterBusinessHours;
