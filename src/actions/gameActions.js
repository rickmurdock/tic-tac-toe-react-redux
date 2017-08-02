import store from "../store/store";

export let takeTurn = (index) => {
  store.dispatch({type: "TAKE_TURN", payload: index});
  console.log("INDEX ", index);
};

export let checkCat = () => {
  store.dispatch({type: "CHECK_CAT"});
};

export let checkWin = () => {
  store.dispatch({type: "CHECK_WIN"});
};