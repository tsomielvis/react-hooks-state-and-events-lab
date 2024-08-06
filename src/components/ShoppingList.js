import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  function HandleChange (event) {
    setSelectedCategory(event.target.value);
  }

  const categorySelected = items.filter((item) =>{
    return selectedCategory === "All" ? items : item.category == selectedCategory
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={HandleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categorySelected.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
