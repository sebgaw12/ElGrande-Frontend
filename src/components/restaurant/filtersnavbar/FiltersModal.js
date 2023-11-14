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
import {useUpdate} from "../../../hooks/useUpdate";
import {PrimaryBtn} from "../../../styles/global.styles";


export default function FiltersModal({filterRestaurants}) {
    const [formData, setFormData] = useState({
        name: [],
        city: [],
        category: [],
        dishName: []
    });
    const {isOpen, toggle} = useToggle();

    const Tag = ({value, onRemove}) => (
        <div style={{border: '1px solid black', padding: '5px', display: 'inline-block', margin: '5px'}}>
            {value}
            <button type="button" onClick={onRemove} style={{marginLeft: '10px'}}>X</button>
        </div>
    );


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const name = e.target.name;
            const value = e.target.value.trim();

            if (value) {
                if (formData[name].includes(value)) {
                    alert(`Tag "${value}" jest już dodany.`);
                } else {
                    setFormData(prevFormData => ({
                        ...prevFormData,
                        [name]: [...prevFormData[name], value]
                    }));
                }
                e.target.value = '';
            }
        }
    };

    const removeTag = (name, valueToRemove) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: prevFormData[name].filter(value => value !== valueToRemove)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        filterRestaurants(formData)
        toggle();
    };

    return (
        <>
        </>
        // <form onSubmit={handleSubmit}>
        //     <TEModal show={isOpen} setShow={toggle}>
        //         <TEModalDialog>
        //             <TEModalContent>
        //                 <TEModalHeader>
        //                     <h5 className={styleModalHeader}>
        //                         Filtry
        //                     </h5>
        //                 </TEModalHeader>
        //
        //                 <TEModalBody>
        //                     <div>
        //                         <label htmlFor="modal-input-name">Nazwa: </label>
        //                         <TEInput
        //                             id="modal-input-name"
        //                             placeholder="Nazwa"
        //                             name="name"
        //                             onKeyPress={handleKeyPress}
        //                         />
        //                         <div>
        //                             {formData.name.map((nameValue, index) => (
        //                                 <Tag key={index} value={nameValue} onRemove={() => removeTag('name', nameValue)} />
        //                             ))}
        //                         </div>
        //                     </div>
        //
        //                     <div>
        //                         <label htmlFor="modal-input-city">Miasto: </label>
        //                         <TEInput
        //                             id="modal-input-city"
        //                             placeholder="Miasto"
        //                             name="city"
        //                             onKeyPress={handleKeyPress}
        //                         />
        //                         <div>
        //                             {formData.city.map((cityValue, index) => (
        //                                 <Tag key={index} value={cityValue} onRemove={() => removeTag('city', cityValue)} />
        //                             ))}
        //                         </div>
        //                     </div>
        //
        //                     <div>
        //                         <label htmlFor="modal-input-category">Kategoria: </label>
        //                         <TEInput
        //                             id="modal-input-category"
        //                             placeholder="Kategoria"
        //                             name="category"
        //                             onKeyPress={handleKeyPress}
        //                         />
        //                         <div>
        //                             {formData.category.map((categoryValue, index) => (
        //                                 <Tag key={index} value={categoryValue} onRemove={() => removeTag('category', categoryValue)} />
        //                             ))}
        //                         </div>
        //                     </div>
        //
        //                     <div>
        //                         <label htmlFor="modal-input-dish">Potrawa: </label>
        //                         <TEInput
        //                             id="modal-input-dish"
        //                             placeholder="Potrawa"
        //                             name="dishName"
        //                             onKeyPress={handleKeyPress}
        //                         />
        //                         <div>
        //                             {formData.dishName.map((dishValue, index) => (
        //                                 <Tag key={index} value={dishValue} onRemove={() => removeTag('dishName', dishValue)} />
        //                             ))}
        //                         </div>
        //                     </div>
        //
        //                 </TEModalBody>
        //                 <TEModalFooter>
        //                     <TERipple rippleColor="light">
        //                         <button
        //                             type="button"
        //                             className={styleModalCancelButton}
        //                             onClick={toggle}
        //                         >
        //                             Anuluj
        //                         </button>
        //                     </TERipple>
        //                     <TERipple rippleColor="light">
        //                         <button
        //                             type="submit"
        //                             className={styleModalSaveButton}
        //                         >
        //                             Zapisz zmiany
        //                         </button>
        //                     </TERipple>
        //                 </TEModalFooter>
        //             </TEModalContent>
        //         </TEModalDialog>
        //     </TEModal>
        // </form>
    );
}
