import React, {Component} from 'react';

class FilterBadge extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name} = this.props;

        return (
            <div
                className="inline-flex items-center rounded-md bg-green-50 px-3
        py-1 text-xs font-medium text-green-700 ring-1 bg-size-xs ring-inset ring-green-600/20">
                {name}
            </div>
        );
    }
}

export default FilterBadge;