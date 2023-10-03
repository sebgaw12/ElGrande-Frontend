import React, {Component} from 'react';
import FilterBadge from './FilterBadge';
import FiltersSearchBar from './FiltersSearchBar';
import {ApiIngredient} from "../../api/ApiIngredient";

class FiltersNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterData: [],
        };
    }

    componentDidMount() {
        ApiIngredient.getIngredients().then(response => this.setState(response))
    }

    render() {
        const {filterData} = this.state;

        const filterBadges = filterData.map((item, index) => (
            <FilterBadge key={index} name={item.name}/>
        ));

        return (
            <nav className="flex w-full flex-wrap items-center justify-between p-1 h-[5vh]">
                <div className="flex">
                    <div className="mb-3 md:w-96 mx-auto flex items-center">
                        <FiltersSearchBar/>
                    </div>
                    <span className="text-neutral-800 dark:text-neutral-900 p-1">
                      Filters: {filterBadges}
                    </span>
                </div>
            </nav>
        );
    }
}

export default FiltersNavbar;