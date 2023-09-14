const Restaurant = (props) => {
    return (
        <div className="flex flex-row p-2 rounded-xl m-4 bg-gray-300 shadow-md shadow-gray-500 justify-items-center">
            <div className="p-2">tu będzie zdj</div>
            <div className="p-2">Name of restaurant: {props.restaurant != null ? props.restaurant.name : null}</div>
            <div className="p-2">tu będzie ocena</div>
        </div>
    )
}

export default Restaurant;
