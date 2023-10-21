import GradeStars from "../../star/GradeStars";
import {useContext} from "react";
import {RestaurantContext} from "../../../context/RestaurantContextProvider";

const Details = ({restaurant}) => {

    const padding2px = "p-2"
    // const {openRestaurant} = useContext(RestaurantContext)

    return (
        <div className="flex flex-col flex-flow-col gap-2 row-span-2 col-span-2">

            <div className={`${padding2px} text-3xl font-semibold`}>{restaurant.name}</div>

            <div className="flex flex-row text-xl">
                <div className="w-1/2">
                    <div className={padding2px}>{restaurant.contactEmail}</div>
                    <div className={padding2px}>{restaurant.contactNumber}</div>
                    <div className={padding2px}>{restaurant.website}</div>
                </div>

                <div className="w-1/2">
                    <div className={padding2px}>{restaurant.description}</div>
                </div>
            </div>

            <div className="flex justify-center mt-4">
                <div className={padding2px}>{restaurant.averageGrade}</div>
                <div className={padding2px}>
                    <GradeStars grade={restaurant.averageGrade}/>
                </div>
            </div>
        </div>
    )
}

export default Details
