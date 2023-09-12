import React, {Component} from 'react';

class FiltersNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500
        shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-200 lg:py-2">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <span className="ml-2 text-neutral-800 dark:text-neutral-900">
                    Filters: {this.props.children}
                </span>
            </div>
        </nav>
        )
    }
}

export default FiltersNavbar;