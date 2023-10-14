import GradeStars from "../../star/GradeStars";
import {useContext} from "react";
import {RestaurantContext} from "../../../context/RestaurantContextProvider";

const Details = ({averageGrade}) => {

    const padding2px = "p-2"
    const {openRestaurant} = useContext(RestaurantContext)

    return (
        <div className="flex flex-col flex-flow-col gap-2 row-span-2 col-span-2">

            <div className={`${padding2px} text-3xl font-semibold`}>{openRestaurant.name}</div>

            <div className="flex flex-row text-xl">
                <div className="w-1/2">
                    <div className={padding2px}>{openRestaurant.contactEmail}</div>
                    <div className={padding2px}>{openRestaurant.contactNumber}</div>
                    <div className={padding2px}>{openRestaurant.website}</div>
                </div>

                <div className="w-1/2">
                    <div className={padding2px}>{openRestaurant.description}</div>
                </div>
            </div>

            <div className="flex justify-center mt-4">
                <div className={padding2px}>{averageGrade}</div>
                <div className={padding2px}>
                    <GradeStars grade={averageGrade}/>
                </div>
            </div>
        </div>
    )
}

export default Details
