let initialState = { 
  player: "X",
  board: [" ", " ", " ", " ", " ", " ", " ", " ", " "]
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  let index = action.payload;
  newState.board = state.board.slice();
  switch(action.type){
    case "TAKE_TURN":
        if (state.board[index] === " ") {
          newState.board[index] = state.player;
          newState.player = state.player === "X" ? "O": "X";
        }
      return newState;
    case "CHECK_CAT":

      return newState;
    case "CHECK_WIN":

      return newState;
    default: 
      return newState;
  }
};