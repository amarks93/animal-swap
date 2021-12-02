import { catsFavoriteThings, pigsFavoriteThings } from "../data";

// starting steps for a store file
// 1. import createStore and applyMiddleware from redux
// 2. import loggerMiddleware from redux-logger
// 3. create a reducer
// 4. create your store, passing in the reducer and middleware
// 5. export your store

// once you know what is changing in your state
// 6. set your initial state
// 7. create action types
// 8. create action creators
// 9. incorporate into reducer

// PLEASE NOTE - NORMALLY DATA WILL BE COMING FROM A DATABASE
// I DID NOT FEEL LIKE SETTING UP MY DATABASE...
// YOU WILL NEVER AGAIN SEE IT IMPORTED LIKE I DID ON LINE 1
// JUST PRETEND IT CAME FROM A DATABASE

import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";

// ACTION TYPES
const SET_PIGS_THINGS = "SET_PIGS_THINGS";
const SET_CATS_THINGS = "SET_CATS_THINGS";
const HIDE_CATS_THINGS = "HIDE_CATS_THINGS";

// ACTION CREATORS
export const setPigsThings = () => {
  return {
    type: SET_PIGS_THINGS,
    pigsFavoriteThings,
  };
};

export const setCatsThings = () => {
  return {
    type: SET_CATS_THINGS,
    catsFavoriteThings,
  };
};

export const hideCatsThings = () => {
  return {
    type: HIDE_CATS_THINGS,
  };
};

const initialState = { catsThings: [], pigsThings: ["ball"] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PIGS_THINGS:
      // {catsThings: [], pigsThings: action.pigsFavoriteThings}
      return { ...state, pigsThings: action.pigsFavoriteThings };
    case SET_CATS_THINGS:
      return { ...state, catsThings: action.catsFavoriteThings };
    case HIDE_CATS_THINGS:
      return { ...state, catsThings: [] };
    default:
      return state;
  }
}

// let oldThing  = state.pigsThings
// let newThings = action.pigsFavoriteThings
// { ...state, pigsThings: [...oldThing, newThings]}
// { ------ , pigsThings: ["ball", all the other things]}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
