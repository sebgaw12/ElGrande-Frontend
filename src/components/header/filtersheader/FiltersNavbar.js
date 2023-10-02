import React, {Component} from 'react';
import FilterBadge from './FilterBadge';
import {ApiIngredient} from "../../../api/ApiIngredient";
import FiltersSearchBar from './FiltersSearchBar';

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

            <nav className="flex w-full flex-wrap items-center justify-between px-3">
                <div className="flex items-center">
                    <div className="mb-3 md:w-96 mx-auto flex items-center">
                        <FiltersSearchBar />
                    </div>
                    <span className="text-neutral-800 dark:text-neutral-900 mr-10">
          Filters: {filterBadges}
        </span>
                </div>
            </nav>

        );
    }
}

export default FiltersNavbar;