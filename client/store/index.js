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

const initialState = { pigsThings: [], catsThings: [] };

const SET_PIGS_THINGS = "SET_PIGS_THINGS";
const SET_CATS_THINGS = "SET_CATS_THINGS";

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

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PIGS_THINGS:
      return { ...state, pigsThings: action.pigsFavoriteThings };
    case SET_CATS_THINGS:
      return { ...state, catsThings: action.catsFavoriteThings };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
