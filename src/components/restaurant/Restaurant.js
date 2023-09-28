import RestaurantDetails from "./restaurantdetails/RestaurantDetails";

const Restaurant = (props) => {

    const shadowOutside = 'shadow-md shadow-gray-500'
    const shadowInside = 'shadow-inner shadow-gray-500'

    const {isOpen, restaurant, onToggle} = props

    const displayRestaurantDetails = () => {
        return (
            <>
                <RestaurantDetails id={restaurant.id}/>
            </>
        )
    }

    const hideRestaurantDetails = () => {
        return (
            <div className="flex flex-row">
                <div className="p-2">{restaurant != null ? restaurant.name : null}</div>
                <div className="p-2">{restaurant != null && restaurant.averageGrade != null
                ? restaurant.averageGrade.toFixed(2) : 'Brak oceny'}</div>
            </div>
        )
    }

    return (
        <div className={`flex flex-row p-2 rounded-xl m-4 bg-gray-300 ${isOpen ? shadowInside : shadowOutside} justify-items-center`}>
            {isOpen ? displayRestaurantDetails() : hideRestaurantDetails()}
            <button onClick={onToggle} className="m-2 p-2 border-black border-2">{isOpen ? "Ukryj" : "Pokaż szczegóły"}</button>
        </div>
    )
}

export default Restaurant;