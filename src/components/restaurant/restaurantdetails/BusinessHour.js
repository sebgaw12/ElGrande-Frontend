import {useEffect, useState} from "react";
import {useApi} from "../../../hooks/useApi";

const BusinessHour = ({restaurant}) => {
    const [availableHours, setAvailableHours] = useState([])
    const {get} = useApi()

    useEffect(() => {
        get("api/v1/business-hours", {restaurantId: restaurant.id})
            .then(response => setAvailableHours(response))
    }, []);

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
        1: 'Monday   ',
        2: 'Tuesday   ',
        3: 'Wednesday   ',
        4: 'Thursday   ',
        5: 'Friday   ',
        6: 'Saturday   ',
        7: 'Sunday   '
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
                            <div className="p-2 text-2xl">
                                <div>{setWeekday(day)}
                                    {formatTime(availableHours.find((item) => item.dayOfWeek === day).openingHour)} -
                                    {formatTime(availableHours.find((item) => item.dayOfWeek === day).closingHour)}</div>
                                {/*<div>Opening hour: {formatTime(availableHours.find((item) => item.dayOfWeek === day).openingHour)}</div>*/}
                                {/*<div>Closing hour: {formatTime(availableHours.find((item) => item.dayOfWeek === day).closingHour)}</div>*/}
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
