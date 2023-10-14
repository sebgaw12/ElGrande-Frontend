import {useContext, useEffect, useState} from "react";
import {RestaurantContext} from "../../../context/RestaurantContextProvider";
import {useApiBusinessHour} from "../../../api/ApiBusinessHour";

const BusinessHour = () => {
    const [availableHours, setAvailableHours] = useState([])
    const {openRestaurant} = useContext(RestaurantContext)
    const restaurantId = openRestaurant.id
    const {getAllBusinessHourByRestaurantId} = useApiBusinessHour()

    useEffect(() => {
        getAllBusinessHourByRestaurantId(restaurantId).then(response => setAvailableHours(response))
    }, [restaurantId]);

    const formatTime = (time) => {
        const DECIMAL_SYSTEM = 10
        const INDEX_OF_HOURS = 0
        const INDEX_OF_MINUTES = 1

        const timeParts = time.split(':')
        let hours = parseInt(timeParts[INDEX_OF_HOURS], DECIMAL_SYSTEM)
        const minutes = timeParts[INDEX_OF_MINUTES]

        if (hours < 10) {
            hours = hours.toString()
        }

        return `${hours}:${minutes}`
    }

    const weekdays = {
        1: 'Poniedziałek',
        2: 'Wtorek',
        3: 'Środa',
        4: 'Czwartek',
        5: 'Piątek',
        6: 'Sobota',
        7: 'Niedziela'
    }
    const setWeekday = (numberOfDay) => {
        return weekdays[numberOfDay]
    }

    const daysOfWeek = [1, 2, 3, 4, 5, 6, 7]

    return (
        <div>
            <ul>
                {daysOfWeek.map(day => (
                    <li key={day}>
                        {availableHours.some((item) => item.dayOfWeek === day) ? (
                            <div className="p-2">
                                <div>{setWeekday(day)}</div>
                                <div>Godzina
                                    otwarcia: {formatTime(availableHours.find((item) => item.dayOfWeek === day).openingHour)}</div>
                                <div>Godzina
                                    zamknięcia: {formatTime(availableHours.find((item) => item.dayOfWeek === day).closingHour)}</div>
                            </div>
                        ) : (
                            <div className="p-2">
                                {setWeekday(day)} - zamknięte
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BusinessHour
