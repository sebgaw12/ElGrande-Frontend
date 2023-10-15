/**
 * Hook for updating data from useState hook
 *
 * @param {object} data
 * @param {function} dataUpdateFunction
 * @returns {{updateDataObject: updateDataObject, updateDataList: updateDataList}}
 */
export const useUpdate = (data, dataUpdateFunction) => {
    /**
     * This function uses
     *
     * event.target.dataset.name as a key of object
     * event.target.dataset.value as a value of that key
     * @param e
     */
    const updateDataObject = (e) => {
        dataUpdateFunction({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    /**
     * This function uses
     *
     * event.target.dataset.index to relate to it
     * event.target.dataset.name as a key of object
     * event.target.dataset.value as a value of that key
     * @param {event} e - event
     */
    const updateDataList = (e) => {
        const updatedData = [...data]
        updatedData[e.target.dataset.index] = {
            ...updatedData[e.target.dataset.index],
            [e.target.name]: e.target.value
        }
        dataUpdateFunction(updatedData)
    }

    return {updateDataObject, updateDataList}
}