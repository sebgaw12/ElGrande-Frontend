import {useEffect, useState} from "react";
import Menu from "./Menu";
import {Api} from "../../api/Api";

const Menus = (props) => {

    const [menu, setMenu] = useState([])

    useEffect(() => {

        Api.getDishes(props.id, setMenu).catch((err) => console.log('Wystąpił błąd: ' + err.message))

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
