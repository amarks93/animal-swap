import React from "react";
import ListItem from "./ListItem";

// Let's pretend catsFavoriteThings is empty!
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
// 4. find your catsFavoriteThings on props

class Cat extends React.Component {
  componentDidMount() {}

  render() {
    let catsFavoriteThings = [];
    // const catsFavoriteThings = ["tuna", "bird watching", "naps", "tummy rubs"];
    return (
      <div>
        <h2>This is a Cat.</h2>
        <img src="http://placekitten.com/200/300" />
        <h3>These are a cat's favorite things.</h3>
        <ul>
          {catsFavoriteThings.map((oneFavoriteThing, idx) => (
            <ListItem key={idx} item={oneFavoriteThing} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Cat;
