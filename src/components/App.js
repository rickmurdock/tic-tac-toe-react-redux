import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from '../logo.svg';
import '../styles/App.css';
import { takeTurn, checkCat, checkWin } from '../actions/gameActions';

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
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Tic-Tac-React</h2>
        </div>
        <br/>

        <div className="conatiner">
          <div className="row">
             {squareItems}
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
  checkWin
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
