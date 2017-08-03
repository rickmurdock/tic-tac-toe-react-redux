let initialState = { 
  player: "X",
  winStatus: false,
  board: [" ", " ", " ", " ", " ", " ", " ", " ", " "]
};

let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  let index = action.payload;
  newState.board = state.board.slice();
  switch(action.type){
    case "TAKE_TURN":
        if (state.board[index] === " ") {
          newState.board[index] = state.player;
          newState.turn += 1;
          newState.player = state.player === "X" ? "O": "X";
        }
        else {
          alert("That block has been selected");
        }
      return newState;
    case "CHECK_CAT":
      if (state.board.indexOf(" ") < 0 && state.winStatus === false) {
        setTimeout(() => alert("Cat game! Play again!"), 200);
      }
      return newState;
    case "CHECK_WIN":
      for (let i = 0; i < winningCombinations.length; i++) {
            let option1 = winningCombinations[i][0];
            let option2 = winningCombinations[i][1];
            let option3 = winningCombinations[i][2];

            if (
              state.board[option1] &&
              state.board[option1] === state.board[option2] &&
              state.board[option2] === state.board[option3] && state.board[option1] !== " "
            ) {
              newState.winStatus = true;
              let letter = state.board[option1];
              let blocks = document.querySelectorAll('.block');

              blocks[option1].style.color = "green";
              blocks[option2].style.color = "green";
              blocks[option3].style.color = "green";
              setTimeout(() => alert(`Game over! ${letter}'s win!`), 200);
            }
          }
      return newState;
    case "NEW_GAME":
      newState = initialState;
      let blocks = document.querySelectorAll('.block');
      for(let j = 0; j < 9; j++){
        blocks[j].style.color = "black";
      }
      return newState;
    default: 
      return newState;
  }
};