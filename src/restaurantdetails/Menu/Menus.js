import {useEffect, useState} from "react";
import Menu from "./Menu";

const Menus = (props) => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        async function getDishes() {
            const response = await fetch(`http://localhost:8080/api/v1/dishes?restaurantId=${props.id}`)

            if (!response.ok) {
                throw new Error('HTTP error: ' + response.status)
            }

            const data = response.json()
            setMenu(await data)
        }

        getDishes().catch((err) => console.log('Wystąpił błąd: ' + err.message))
    }, [props.id]);
    return (
        <>
            {menu.length === 0 ? (
                <div>Brak dodanych dań</div>
            ) : (
                menu.map((profile, index) => <Menu key={index} menu={profile}/>)
            )}
        </>
    )
}

export default Menus
