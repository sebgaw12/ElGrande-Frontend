import {useEffect, useState} from "react";
import Menu from "./Menu";
import {ApiDish} from "../../../../api/ApiDish";


const Menus = ({restaurantId}) => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        ApiDish.getDishesByRestaurantId(restaurantId).then(response => setMenu(response))
    }, [restaurantId]);

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
