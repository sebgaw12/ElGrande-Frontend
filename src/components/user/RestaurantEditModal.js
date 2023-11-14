import React, {useEffect, useState} from "react";
import {useUpdate} from "../../hooks/useUpdate";

const RestaurantEditModal = ({isOpen, toggle, restaurant}) => {
    const [editedRestaurant, setEditedRestaurant] = useState({})
    const {updateDataObject} = useUpdate(editedRestaurant, setEditedRestaurant)

    useEffect(() => {
        setEditedRestaurant(restaurant)
    }, [restaurant]);

    const handleEditRestaurant = () => {

    }

    return (
        <>
        </>
        // <TEModal show={isOpen} setShow={toggle}>
        //     <TEModalContent>
        //         <TEModalHeader>
        //             <h5 className={styleModalHeader}>
        //                 Edit Restaurant
        //             </h5>
        //         </TEModalHeader>
        //
        //         <TEModalBody>
        //             <label>Name: {editedRestaurant.name}</label>
        //             <TEInput
        //                 onChange={updateDataObject}
        //             >
        //
        //             </TEInput>
        //
        //         </TEModalBody>
        //         <TEModalFooter>
        //             <TERipple rippleCentered="light">
        //                 <button
        //                     type={"submit"}
        //                     className={styleModalSaveButton}
        //                     onClick={handleEditRestaurant}
        //                 >
        //                     Save Changes
        //                 </button>
        //             </TERipple>
        //         </TEModalFooter>
        //     </TEModalContent>
        // </TEModal>
    )
}

export default RestaurantEditModal