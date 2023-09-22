import {useEffect, useState} from "react";

const OpeningHours = (props) => {

    const [availableHours, setAvailableHours] = useState([])

    useEffect(() => {
        async function getOpeningHours() {
            const resp = await fetch(`http://localhost:8080/api/v1/business-hours?restaurantId=${props.id}`)
            if (!resp.ok) {
                throw new Error('HTTP error: ' + resp.status)
            }
            const data = resp.json()
            setAvailableHours(await data)
        }

        getOpeningHours().catch((err) => console.log('Wystąpił błąd: ' + err.message))
    }, [props.id]);

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

export default OpeningHours
