import React from "react";
import Header from "./components/Header";
import ChooseAnimal from "./components/ChooseAnimal";
import Cat from "./components/Cat";
import Pig from "./components/Pig";
import Footer from "./components/Footer";

class Main extends React.Component {
  constructor() {
    super();
    this.state = { animal: "Cat" };
    this.chooseAnimal = this.chooseAnimal.bind(this);
  }

  chooseAnimal(selectedAnimal) {
    this.setState({ animal: selectedAnimal });
  }

  render() {
    return (
      <div id="main">
        <Header />
        <ChooseAnimal chooseAnimal={this.chooseAnimal} />
        {this.state.animal === "Cat" ? <Cat /> : <Pig />}
        <Footer />
      </div>
    );
  }
}

export default Main;
