import React from 'react';
import {useUpdate} from "../../../hooks/useUpdate";

function BusinessHourForm({data, setDataFunction}) {
    const {updateDataList} = useUpdate(data, setDataFunction)
    const DAY_OF_WEEKS = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    }

    return (
        <>
            {data.map((bh, index) => (
                <div key={bh.dayOfWeek} className="container grid grid-cols-3">
                    <span>{DAY_OF_WEEKS[index + 1]}</span>
                    <div className="mb1">
                        <label htmlFor="monday-open">Open: </label>
                        <input
                            type="time"
                            data-index={index}
                            id="monday-open"
                            name="openingHour"
                            defaultValue="08:00"
                            onChange={updateDataList}
                            required/>
                    </div>
                    <div className="mb1">
                        <label htmlFor="monday-close">Close: </label>
                        <input type="time"
                               data-index={index}
                               id="monday-close"
                               name="closingHour"
                               defaultValue="16:00"
                               onChange={updateDataList}
                               required/>
                    </div>
                </div>
            ))}
        </>
    );
}

export default BusinessHourForm;
