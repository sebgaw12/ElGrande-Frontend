import GradeStars from "../../star/GradeStars";

const Details = ({restaurant}) => {
    return (
        <div className="flex flex-col text-center">
            <div className={`text-3xl font-bold`}>{restaurant.name}</div>
            <div className="flex justify-center mt-4">
                <p>{restaurant.averageGrade}</p>
                <GradeStars grade={restaurant.averageGrade}/>
            </div>
            <div className="flex flex-col text-xl">
                <div>{restaurant.contactEmail}</div>
                <div>{restaurant.contactNumber}</div>

                <div>{restaurant.website}</div>
                <div className="w-1/2">
                    <div>{restaurant.description}</div>
                </div>
            </div>
        </div>
    )
}

export default Details
