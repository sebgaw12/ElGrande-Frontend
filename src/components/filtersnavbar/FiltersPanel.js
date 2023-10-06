import React, { useState } from 'react';
import FiltersModal from './FiltersModal';

function FiltersPanel() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="w-3/5 h-auto p-2 ml-2 relative mb-2 flex flex-wrap items-stretch">
                <FiltersModal />
            </div>
        </>
    );
}

export default FiltersPanel;
