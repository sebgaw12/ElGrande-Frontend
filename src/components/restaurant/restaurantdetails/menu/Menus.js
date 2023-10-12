import {useContext, useEffect, useState} from "react";
import Menu from "./Menu";
import {ApiDish} from "../../../../api/ApiDish";
import {RestaurantContext} from "../../../../context/RestaurantContextProvider";


const Menus = () => {

    const [menu, setMenu] = useState([])
    const {openRestaurant} = useContext(RestaurantContext)
    const restaurantId = openRestaurant.id

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
