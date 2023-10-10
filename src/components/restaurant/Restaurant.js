import RestaurantDetails from "./restaurantdetails/RestaurantDetails";

const Restaurant = (props) => {

    const shadowOutside = 'shadow-md shadow-gray-500'
    const shadowInside = 'shadow-inner shadow-gray-500'

    const {isOpen, restaurant, onToggle} = props

    const displayRestaurantDetails = () => {
        return (
            <>
                <RestaurantDetails id={restaurant.id}
                                   onToggle={onToggle}
                                   averageGrade={restaurant.averageGrade != null
                                       ? restaurant.averageGrade.toFixed(2) : 'Brak oceny'}/>
            </>
        )
    }

    const hideRestaurantDetails = () => {
        return (
            <div className="flex flex-row justify-around"
                 onClick={onToggle}>
                <div className="p-2">{restaurant != null ? restaurant.name : null}</div>
                <div className="p-2">{restaurant != null && restaurant.averageGrade != null
                ? restaurant.averageGrade.toFixed(2) : 'Brak oceny'}</div>
                <div>kategorie lokalu</div>
                <span className="ml-2">&#9660;</span>
            </div>
        )
    }

    return (
        <div className={`p-2 rounded-xl m-4 bg-gray-300 ${isOpen ? shadowInside : shadowOutside} min-h-[6vh]`}>
            {isOpen ? displayRestaurantDetails() : hideRestaurantDetails()}
        </div>
    )
}

export default Restaurant;
