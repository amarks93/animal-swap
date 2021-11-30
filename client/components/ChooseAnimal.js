import React from "react";

const ChooseAnimal = (props) => {
  const chooseAnimal = props.chooseAnimal;
  return (
    <select onChange={(evt) => chooseAnimal(evt.target.value)}>
      <option value="cat">Cat</option>
      <option value="pig">Pig</option>
    </select>
  );
};

export default ChooseAnimal;
