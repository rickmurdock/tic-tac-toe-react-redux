import React, { Component } from 'react';
import { connect } from "react-redux";
import '../styles/App.css';
import { takeTurn, checkCat, checkWin, newGame } from '../actions/gameActions';

const style = {
  boxStyle: {
    height: "25vh",
    backgroundColor: "lightBlue",
    margin: 10,
    verticleAlign: "middle",
    fontSize: "10em"
  },
  borderBottom: {
    borderBottom: "5 soild black"
  }
}

function playGame(index) {
  takeTurn(index);
  checkWin();
  checkCat();
};

class App extends Component {
  render() {
    let squareItems = this.props.board.map((square, index) => {
      return (
        <div key={index} 
             className="col-md-3 col-md-offset-1 block" 
             style={style.boxStyle}
             /*onClick={() => this.props.takeTurn(index)}*/
             onClick={() => playGame(index)}
        >
          {square}
        </div>
      );
    });

    return (
      <div className="App">
        <div className="App-header">
          <h2>Tic-Tac-Toe</h2>
          <button onClick={() => this.props.newGame()} style={{color:"red", borderRadius:10, padding:7}}>New Game</button>
        </div>
        <div className="conatiner-fluid">
          <div className="row">
            <div className="col-md-10 col-md-offset-2">
              <div>
                {squareItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    player: state.game.player,
    board: state.game.board
  }
};

let mapDispatchToProps = () => ({
  takeTurn, 
  checkCat, 
  checkWin,
  newGame
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
