import React from "react";
import Button from "./button/button";


const ShoppingItem = ({ item }) => {
    return (
      <div className="shopping-item">
        <h3>{item.title}</h3>
        <img src={`https://source.unsplash.com/random/200x300?sig=${item.id}`} alt="item" />
        <div className="description">
          <span>{item.stockStatus}</span>
          <span>{item.rating}</span>
        </div>
        <div className="badges">
          {item.badges.map((badge, index) => (
            <span key={index} className="badge">{badge}</span>
          ))}
        </div>
        <Button label="Add to cart" />
      </div>
    );
  };

  export default ShoppingItem