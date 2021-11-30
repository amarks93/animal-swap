import React from "react";
import ListItem from "./ListItem";

const Cat = () => {
  const catsFavoriteThings = ["tuna", "bird watching", "naps", "tummy rubs"];
  return (
    <div>
      <h4>This is a Cat.</h4>
      <img src="http://placekitten.com/200/300" />
      <ul>
        {catsFavoriteThings.map((oneFavoriteThing, idx) => (
          <ListItem key={idx} item={oneFavoriteThing} />
        ))}
      </ul>
    </div>
  );
};

export default Cat;
