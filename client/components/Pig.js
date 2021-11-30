import React from "react";
import ListItem from "./ListItem";

const Pig = () => {
  const pigsFavoriteThings = ["mud", "pumpkins", "tummy rubs"];
  return (
    <div>
      <h4>This is a Pig.</h4>
      <img src="http://cdn.shopify.com/s/files/1/0078/8575/0369/products/Cute_Pig_Flowers.jpg?v=1571713797" />
      <ul>
        {pigsFavoriteThings.map((oneFavoriteThing, idx) => (
          <ListItem key={idx} item={oneFavoriteThing} />
        ))}
      </ul>
    </div>
  );
};

export default Pig;
