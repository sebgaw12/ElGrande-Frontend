import React from 'react';
import {useUpdate} from "../../../hooks/useUpdate";
import {DaySchedule, TimePicker} from "../form.styles";

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
        <div>
            {data.map((bh, index) => (
                <DaySchedule
                    key={bh.dayOfWeek}
                    dayOfWeek={DAY_OF_WEEKS[index + 1]}
                    index={index}
                    updateDataList={updateDataList}
                />
            ))}
        </div>
    );
}

export default BusinessHourForm;
