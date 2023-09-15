import React, { Component } from 'react';
import FilterBadge from './FilterBadge';

class FiltersNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterData: [],
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8080/api/v1/ingredients')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ filterData: data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { filterData } = this.state;

    const filterBadges = filterData.map((item, index) => (
      <FilterBadge key={index} name={item.name} />
    ));

    return (
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-200 lg:py-2">
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