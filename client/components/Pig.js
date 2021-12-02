import React from "react";
import ListItem from "./ListItem";

// Let's pretend pigsFavoriteThings is empty!
// We have to get them from the store!

// steps to connect your component to the store
// 1. import connect from react-redux
// 2. mapStateToProps (if we need state)
// 3. mapDispatchToProps (if we need to dispatch a function)
// 4. connect it all together

// after you are connected - steps to get that data
// 1. import the appropriate function
// 2. insert the function into mapDispatchToProps
// 3. call your new function that dispatches the imported function (wait, what)
//    in your componentDidMount. because you are "connected", you will find it on "props"
// 4. find your pigsFavoriteThings on props

class Pig extends React.Component {
  componentDidMount() {}

  render() {
    let pigsFavoriteThings = [];
    // const pigsFavoriteThings = ["mud", "pumpkins", "tummy rubs"];
    return (
      <div>
        <h2>This is a Pig.</h2>
        <img src="http://cdn.shopify.com/s/files/1/0078/8575/0369/products/Cute_Pig_Flowers.jpg?v=1571713797" />
        <h3>These are a pig's favorite things.</h3>
        <ul>
          {pigsFavoriteThings.map((oneFavoriteThing, idx) => (
            <ListItem key={idx} item={oneFavoriteThing} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Pig;
