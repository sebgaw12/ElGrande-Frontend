import React from 'react';
import FiltersModal from './FiltersModal';

function FiltersPanel({filterRestaurants}) {
    return (
        <>
            <div className="w-3/5 h-auto p-2 ml-2 relative mb-2 flex flex-wrap items-stretch">
                <FiltersModal filterRestaurants={filterRestaurants}/>
            </div>
        </>
    );
}

export default FiltersPanel;
