import {TEModal, TEModalBody, TEModalContent, TEModalFooter, TEModalHeader, TERipple} from "tw-elements-react";
import {styleModalHeader, styleModalSaveButton} from "../restaurant/filtersnavbar/FiltersModal.styles";
import React, {useState} from "react";
import {useUpdate} from "../../hooks/useUpdate";
import {useApi} from "../../hooks/useApi";
import {useUserContext} from "../../context/UserContextProvider";

const UserOwnershipForm = ({isOpen, toggle, userDetails}) => {
    const {user} = useUserContext()
    const [restaurants, setRestaurants] = useState([])
    const selectedRestaurants = new Set();
    const [searchInput, setSearchInput] = useState({name: ''})
    const {updateDataObject} = useUpdate(searchInput, setSearchInput)
    const {get, post, put} = useApi()

    const handleSearch = () => {
        get("api/v1/restaurants/filtered", searchInput)
            .then(response => {
                setRestaurants(response)
            })
    }

    const selectRestaurant = (key) => {
        selectedRestaurants.add(key)
    }

    const handleOwnershipForm = () => {
        if (userDetails.ownershipId) {
            put("api/v1/ownerships/" + userDetails.ownershipId, {restaurantsId: Array.from(selectedRestaurants)})
        } else {
            post("api/v1/ownerships", {customerId: user})
                .then(response => {
                    put("api/v1/ownerships/" + response.id, {restaurantsId: Array.from(selectedRestaurants)})
                })
        }
    }

    return (
        <TEModal show={isOpen} setShow={toggle}>
            <TEModalContent>
                <TEModalHeader>
                    <h5 className={styleModalHeader}>
                        Ownership Form
                    </h5>
                </TEModalHeader>

                <TEModalBody>
                    <div className="w-2/5 p-2 ml-2">
                        <div className="relative mb-2 flex w-full flex-wrap items-stretch">
                            <input
                                type="search"
                                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Restaurant Name"
                                aria-label="Search"
                                aria-describedby="button-addon3"
                                name={"name"}
                                onChange={updateDataObject}
                            />

                            <button
                                className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                                type="button"
                                id="button-addon3"
                                onClick={handleSearch}>
                                Search
                            </button>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        {restaurants.map((restaurant) =>
                            <button className={"edit-button"}
                                    onClick={() => selectRestaurant(restaurant.id)}
                                    key={restaurant.id}>
                                {restaurant.name}
                            </button>
                        )}
                    </div>
                    <hr/>
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file"
                               className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                    className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">PDF</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden"/>
                        </label>
                    </div>
                </TEModalBody>
                <TEModalFooter>
                    <TERipple rippleCentered="light">
                        <button
                            type={"submit"}
                            className={styleModalSaveButton}
                            onClick={handleOwnershipForm}
                        >
                            Send form
                        </button>
                    </TERipple>
                </TEModalFooter>
            </TEModalContent>
        </TEModal>
    )
}

export default UserOwnershipForm