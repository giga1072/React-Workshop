import React from "react"
import ShoppingItems from "../constants/data"
import ShoppingItem from './ShoppingItem'; 


const ShoppingList = () => {
    return (
      <div>
        {ShoppingItems.map((item) => (
          <ShoppingItem key={item.id} item={item} />
        ))}
      </div>
    );
  };
export default ShoppingList