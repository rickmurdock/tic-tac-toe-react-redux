let initialState = { 
  player: "X",
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
      return newState;
    case "CHECK_CAT":
      if (state.board.indexOf(" ") < 0) {
        setTimeout(() => alert("Cat game! Play again!"), 200);
        // playTicTacToe(); // restart game
      }
      return newState;
    case "CHECK_WIN":
      for (let i = 0; i < winningCombinations.length; i++) {
            let option1 = winningCombinations[i][0];
            let option2 = winningCombinations[i][1];
            let option3 = winningCombinations[i][2];
            console.log(">>" + state.board[option1] + "=" + state.board[option2] + "=" + state.board[option3] + "<<");
            if (
              state.board[option1] &&
              state.board[option1] === state.board[option2] &&
              state.board[option2] === state.board[option3] && state.board[option1] !== " "
            ) {
              let letter = state.board[option1];
              let blocks = document.querySelectorAll('.block');

              blocks[option1].style.color = "green";
              blocks[option2].style.color = "green";
              blocks[option3].style.color = "green";
              setTimeout(() => alert(`Game over! ${letter}'s win!`), 200);
              // setTimeout(() => playTicTacToe(), 500);
            }
          }
      return newState;
    default: 
      return newState;
  }
};