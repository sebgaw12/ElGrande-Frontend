import GradeStars from "../../star/GradeStars";

const Details = ({data, averageGrade}) => {
    const padding2px = "p-2"

    return (
        <div className="flex flex-col flex-flow-col gap-2 row-span-2 col-span-2">

            <div className={`${padding2px} text-3xl font-semibold`}>{data.name}</div>

            <div className="flex flex-row text-xl">
                <div className="w-1/2">
                    <div className={padding2px}>{data.contactEmail}</div>
                    <div className={padding2px}>{data.contactNumber}</div>
                    <div className={padding2px}>{data.website}</div>
                </div>

                <div className="w-1/2">
                    <div className={padding2px}>{data.description}</div>
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
