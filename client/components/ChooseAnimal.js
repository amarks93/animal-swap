import React from "react";

const ChooseAnimal = (props) => {
  const chooseAnimal = props.chooseAnimal;
  return (
    <select onChange={(evt) => chooseAnimal(evt.target.value)}>
      <option value="Cat">Cat</option>
      <option value="Pig">Pig</option>
    </select>
  );
};

export default ChooseAnimal;
