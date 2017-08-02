import { combineReducers, createStore } from "redux";
import gameReducer from "../reducers/gameReducer";

let reducers = combineReducers({
  game: gameReducer
})

let store = createStore(reducers);

export default store;