import React, {Component} from 'react';
import FilterBadge from './FilterBadge';
import {Api} from "../../../api/Api";
import {ApiIngredient} from "../../../api/ApiIngredient";

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
            <nav
                className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-200 lg:py-2">
                <div className="flex w-full flex-wrap items-center justify-between px-3">
          <span className="ml-2 text-neutral-800 dark:text-neutral-900">
            Filters: {filterBadges}
          </span>
                </div>
            </nav>
        );
    }
}

export default FiltersNavbar;