let initialState = { 
  player: "X",
  board: ["X", "O", " ", " ", " ", " ", " ", " ", " "]
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);

  switch(action.type){
    case "TAKE_TURN":

      return newState;
    case "CHECK_CAT":

      return newState;
    case "CHECK_WIN":

      return newState;
    default: 
      return newState;
  }
};