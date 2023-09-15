import photo from "../static/mock-photo.jpg";
import {useEffect, useState} from "react";

const RestaurantDetails = (props) => {
    const [data, setData] = useState({})

    useEffect(() => {
        async function fetchData () {
            const response = await fetch(`http://localhost:8080/api/v1/restaurants/${props.id}`)
            if (!response.ok){
                throw new Error('HTTP error: ' + response.status)
            }
            const data = response.json()
            setData(await data)
        }
        fetchData().catch((error) => console.log("błąd podczas pobierania danych: " + error))
    }, [props.id]);

    const padding2px = "p-2"
    return (
        <div className="flex flex-row">
            <div className={padding2px}>
                <img alt="sushi" src={photo} className="w-fit h-fit"/>
            </div>
            <div className="grid place-content-center">
                <div className={padding2px}>{data.name}</div>
                <div className={padding2px}>{data.description}</div>
                <div className={padding2px}>{data.contactEmail}</div>
                <div className={padding2px}>{data.contactNumber}</div>
                <div className={padding2px}>{data.website}</div>
                <div className={padding2px}>tu będzie ocena</div>
            </div>
        </div>
    )
}
export default RestaurantDetails
