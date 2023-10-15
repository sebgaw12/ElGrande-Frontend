import React, {useState} from 'react';
import SearchPanel from './SearchPanel';
import FiltersPanel from './FiltersPanel';
import {useToggle} from "../../hooks/useToggle";

function FiltersHeader() {
    return (
        <>
            <div className="flex items-left h-[6vh]">
                <SearchPanel/>
                <FiltersPanel/>
            </div>
        </>
    );
}

export default FiltersHeader;