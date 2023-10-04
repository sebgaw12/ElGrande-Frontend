import React, {useEffect, useState} from "react";
import {styleModalHeader, styleOpenModalButton, styleModalCancelButton, filterLogo} from './FiltersModalStyles';
import {
    TERipple, TEModal, TEModalDialog, TEModalContent,
    TEModalHeader, TEModalBody, TEModalFooter, TEInput, TETabs, TETabsItem, TETabsContent
} from "tw-elements-react";

import axios from 'axios';
import {ApiIngredient} from '../../../api/ApiIngredient';

import RatingStar from './RatingStar';
import Dropdown from './Dropdown';


export default function FiltersModal()
{
    const [showModal, setShowModal] = useState(false);

    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        ApiIngredient.getIngredients().then(response =>
            setIngredients(response)
    );
    }, []);

    return (
        <div>
            <TERipple rippleColor="white">
                <button
                    type="button"
                    className={styleOpenModalButton}
                    onClick={() => setShowModal(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={filterLogo} />
                    </svg>
                </button>
            </TERipple>

            <TEModal show={showModal} setShow={setShowModal}>
                <TEModalDialog>
                    <TEModalContent>
                        <TEModalHeader>
                            <h5 className={styleModalHeader}>
                                Filters
                            </h5>
                        </TEModalHeader>

                        <TEModalBody>
                            <label htmlFor="modal-input-city">Miasto: </label>
                            <TEInput id="modal-input-city" placeholder="Warszawa"></TEInput>

                            <label htmlFor="modal-input-city">Kategoria: </label>
                            <TEInput id="modal-input-category" placeholder="bar mleczny"></TEInput>

                            <label htmlFor="modal-input-dish">Potrawa: </label>
                            <TEInput id="modal-input-dish" placeholder="frytki i cola"></TEInput>

                            <RatingStar className="mb-4 mt-4" initialValue={1} labelText="Min. rating: " />
                            <RatingStar  initialValue={5} labelText="Max. rating: " />

                            <Dropdown className="m-2" title="Sortuj" elements={["Oceny malejąco", "Oceny rosnąco"]} />

                            {ingredients.map((ingredient, index) => (
                                <div key={index}>{ingredient.name}</div>
                            ))}
                        </TEModalBody>
                        <TEModalFooter>
                            <TERipple rippleColor="light">
                                <button
                                    type="button"
                                    className={styleModalCancelButton}
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                            </TERipple>
                            <TERipple rippleColor="light">
                                <button
                                    type="button"
                                    className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    onClick={() => setShowModal(false)}
                                >
                                    Save changes
                                </button>
                            </TERipple>
                        </TEModalFooter>
                    </TEModalContent>
                </TEModalDialog>
            </TEModal>
        </div>
    );
}