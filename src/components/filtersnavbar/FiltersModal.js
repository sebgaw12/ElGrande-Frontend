import React, {useState} from "react";
import RatingStar from './RatingStar';
import Dropdown, {useSelectedElement} from './Dropdown';
import {
    styleModalHeader, styleOpenModalButton, styleModalCancelButton,
    styleModalSaveButton, filterLogo
} from './FiltersModalStyles';
import {
    TERipple, TEModal, TEModalDialog, TEModalContent, TEModalHeader,
    TEModalBody, TEModalFooter, TEInput
} from "tw-elements-react";
import {ApiRestaurant} from "../../api/ApiRestaurant";


export default function FiltersModal() {

    const [showModal, setShowModal] = useState(false);
    const sortTypes = ["DESC", "ASC"];
    const sortTypesAsText = ["oceny malejąco", "oceny rosnąco"];

    const [sortType, setSortType] = useState(sortTypes[0]);

    const [formData, setFormData] = useState({
        city: undefined,
        category: [],
        dishName: [],
        reviewMin: undefined,
        reviewMax: undefined,
        reviewSort: "ASC",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;


        setFormData((prevData) => ({
            ...prevData,
            [name]: name === "category" || name === "dishName" ? value.split(",") : undefined,
        }));

        if (e.target.value.length === 0 && (e.target.name === 'dishName' || e.target.name === 'category')) {
            setFormData({...formData, [name]: []});
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("SENDING DATA: ", formData);
        ApiRestaurant.getFilteredRestaurants(formData).then((restaurants) => {
            console.log("RESPONSE: ", restaurants);
        });

        setShowModal(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TERipple rippleColor="white">
                <button
                    type="button"
                    className={styleOpenModalButton}
                    onClick={() => setShowModal(true)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={filterLogo}
                        />
                    </svg>
                </button>
            </TERipple>

            <TEModal show={showModal} setShow={setShowModal}>
                <TEModalDialog>
                    <TEModalContent>
                        <TEModalHeader>
                            <h5 className={styleModalHeader}>
                                Filtry
                            </h5>
                        </TEModalHeader>

                        <TEModalBody>
                            <label htmlFor="modal-input-city">Miasto: </label>
                            <TEInput
                                id="modal-input-city"
                                placeholder="Warszawa"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                            />

                            <label htmlFor="modal-input-category">Kategoria: </label>
                            <TEInput
                                id="modal-input-category"
                                placeholder="bar mleczny"
                                name="category"
                                value={formData.category.join(",")}
                                onChange={handleInputChange}
                            />

                            <label htmlFor="modal-input-dish">Potrawa: </label>
                            <TEInput
                                id="modal-input-dish"
                                placeholder="frytki i cola"
                                name="dishName"
                                value={formData.dishName.join(",")}
                                onChange={handleInputChange}
                            />

                            <RatingStar className="mb-4 mt-4" initialValue={1} labelText="Min. rating: "/>
                            <RatingStar initialValue={5} labelText="Max. rating: "/>

                            <Dropdown
                                className="m-2"
                                title="Sortuj"
                                elements={sortTypesAsText}
                            />

                        </TEModalBody>
                        <TEModalFooter>
                            <TERipple rippleColor="light">
                                <button
                                    type="button"
                                    className={styleModalCancelButton}
                                    onClick={() => setShowModal(false)}
                                >
                                    Anuluj
                                </button>
                            </TERipple>
                            <TERipple rippleColor="light">
                                <button
                                    type="submit"
                                    className={styleModalSaveButton}
                                >
                                    Zapisz zmiany
                                </button>
                            </TERipple>
                        </TEModalFooter>
                    </TEModalContent>
                </TEModalDialog>
            </TEModal>
        </form>
    );
}
