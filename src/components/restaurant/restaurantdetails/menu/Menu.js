const Menu = (props) => {
  return (
      <div className="p-2">
          <div>Dish name: {props.menu.dishName}</div>
          <div>Price: {props.menu.price}</div>
          <div>Ingredients: {props.menu.ingredients}</div>
          <div>Categories: {props.menu.categories}</div>
      </div>
  )
}

export default Menu
