import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: "X",
      winner: null,
    };
  }

  checkWinner() {
    let winningLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        this.state.board[a] &&
        this.state.board[a] === this.state.board[b] &&
        this.state.board[a] === this.state.board[c]
      ) {
        alert("You won.!");
        this.setState({
          winner: this.state.player,
        });
      }
    }
  }
  handleClick(index) {
    let newBoard = this.state.board;
    if (!this.state.board[index] && !this.state.winner) {
      newBoard[index] = this.state.player;
      this.setState({
        board: newBoard,
        player: this.state.player === "X" ? "O" : "X",
      });
      this.checkWinner();
    }
  }
  render() {
    const Box = this.state.board.map((box, index) => (
      <div key={index} className="box" onClick={() => this.handleClick(index)}>
        {box}
      </div>
    ));
    return (
      <div className="container">
        <h1>Tic Tac Toe App</h1>
        <div className="board">{Box}</div>
      </div>
    );
  }
}

export default App;
