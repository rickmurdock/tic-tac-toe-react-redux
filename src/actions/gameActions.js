import store from "../store/store";

export let takeTurn = () => {
  store.dispatch({type: "TAKE_TURN"});
};

export let checkCat = () => {
  store.dispatch({type: "CHECK_CAT"});
};

export let checkWin = () => {
  store.dispatch({type: "CHECK_WIN"});
};