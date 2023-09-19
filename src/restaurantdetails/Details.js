import mockPhoto1 from "../mockphoto/mock-photo1.jpg";

const Details = (props) => {
    const padding2px = "p-2"

    return (
        <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="p-2 row-span-3">
                <img alt="sushi" src={mockPhoto1} className="w-auto h-auto"/>
            </div>
            <div className="row-span-2 col-span-2">
                <div className={padding2px}>{props.data.name}</div>
                <div className={padding2px}>{props.data.description}</div>
                <div className={padding2px}>{props.data.contactEmail}</div>
                <div className={padding2px}>{props.data.contactNumber}</div>
                <div className={padding2px}>{props.data.website}</div>
                <div className={padding2px}>tu będzie ocena</div>
            </div>
        </div>
    )
}

export default Details
