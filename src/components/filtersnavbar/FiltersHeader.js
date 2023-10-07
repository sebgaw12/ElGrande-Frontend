import React, {useState} from 'react';
import SearchPanel from './SearchPanel';
import FiltersPanel from './FiltersPanel';

function FiltersHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="flex items-left h-[6vh]">
                <SearchPanel/>
                <FiltersPanel openModal={openModal}/>
            </div>
        </>
    );
}

export default FiltersHeader;