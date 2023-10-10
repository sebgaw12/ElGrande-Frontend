import GradeStars from "../../star/GradeStars";

const Details = ({data, averageGrade}) => {
    const padding2px = "p-2"

    return (
        <div className="grid grid-rows-3 grid-flow-col gap-4">

            <div className="row-span-2 col-span-2">
                <div className={padding2px}>{data.name}</div>
                <div className={padding2px}>{data.description}</div>
                <div className={padding2px}>{data.contactEmail}</div>
                <div className={padding2px}>{data.contactNumber}</div>
                <div className={padding2px}>{data.website}</div>
                <GradeStars grade={averageGrade} />
                <div>Średnia ocen: {averageGrade}</div>
            </div>
        </div>
    )
}

export default Details
