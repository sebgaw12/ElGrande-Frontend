import {useEffect, useState} from "react";
import Menu from "./Menu";
import {ApiDish} from "../../../../api/ApiDish";


const Menus = (props) => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        ApiDish.getDishesByRestaurantId(props.id).then(response => setMenu(response))
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
