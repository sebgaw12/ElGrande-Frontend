const Menu = (props) => {
  return (
      <div className="p-2">
          <div>Nazwa dania: {props.menu.dishName}</div>
          <div>Cena: {props.menu.price}</div>
          <div>Składniki: {props.menu.ingredients}</div>
          <div>Kategorie: {props.menu.categories}</div>
      </div>
  )
}

export default Menu
