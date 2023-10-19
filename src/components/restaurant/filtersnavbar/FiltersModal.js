import React, {useState} from "react";
import {
    filterLogo,
    styleModalCancelButton,
    styleModalHeader,
    styleModalSaveButton,
    styleOpenModalButton
} from './FiltersModal.styles';
import {
    TEInput,
    TEModal,
    TEModalBody,
    TEModalContent,
    TEModalDialog,
    TEModalFooter,
    TEModalHeader,
    TERipple
} from "tw-elements-react";
import {useToggle} from "../../../hooks/useToggle";
import {useApi} from "../../../hooks/useApi";
import {useUpdate} from "../../../hooks/useUpdate";


export default function FiltersModal({filterRestaurants}) {
    // todo: Handle List of Inputs
    const [formData, setFormData] = useState( {
        name: [],
        city: '',
        category: [],
        dishName: []
    })
    const {updateDataObject} = useUpdate(formData, setFormData)
    const {isOpen, toggle} = useToggle();

    // const handleInputChange = (e) => {
        // const {name, value} = e.target;
        //
        // setFormData((prevData) => ({
        //     ...prevData,
        //     [name]: name === "category" || name === "dishName" ? value.split(",") : undefined,
        // }));
        //
        // if (e.target.value.length === 0 && (e.target.name === 'dishName' || e.target.name === 'category')) {
        //     setFormData({...formData, [name]: []});
        // }
    // };

    const handleSubmit = (e) => {
        e.preventDefault()
        filterRestaurants(formData)
        toggle();
    };

    return (
        <form onSubmit={handleSubmit}>
            <TERipple rippleColor="white">
                <button
                    type="button"
                    className={styleOpenModalButton}
                    onClick={toggle}
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

            <TEModal show={isOpen} setShow={toggle}>
                <TEModalDialog>
                    <TEModalContent>
                        <TEModalHeader>
                            <h5 className={styleModalHeader}>
                                Filtry
                            </h5>
                        </TEModalHeader>

                        <TEModalBody>
                            <label htmlFor="modal-input-name">Nazwa: </label>
                            <TEInput
                                id="modal-input-city"
                                placeholder="Nazwa"
                                name="name"
                                value={formData.name}
                                onChange={updateDataObject}
                            />

                            <label htmlFor="modal-input-city">Miasto: </label>
                            <TEInput
                                id="modal-input-city"
                                placeholder="Warszawa"
                                name="city"
                                value={formData.city}
                                onChange={updateDataObject}
                            />

                            <label htmlFor="modal-input-category">Kategoria: </label>
                            <TEInput
                                id="modal-input-category"
                                placeholder="bar mleczny"
                                name="category"
                                value={formData.category}
                                onChange={updateDataObject}
                            />

                            <label htmlFor="modal-input-dish">Potrawa: </label>
                            <TEInput
                                id="modal-input-dish"
                                placeholder="frytki i cola"
                                name="dishName"
                                value={formData.dishName}
                                onChange={updateDataObject}
                            />

                        </TEModalBody>
                        <TEModalFooter>
                            <TERipple rippleColor="light">
                                <button
                                    type="button"
                                    className={styleModalCancelButton}
                                    onClick={toggle}
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
