import { useState } from 'react';
import '../styles/TicTacToe.css'

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setXTurn] = useState(true);

    function handleClick(index) {
        if (board[index]) {
            return;
        }
        else if (Winner) {
            alert("Please Restart the Game!")
        }
        else {
            board[index] = isXTurn ? 'X' : 'O';
            setBoard([...board]);
            setXTurn(!isXTurn);
        }
        checkWinner;
    }

    const Winner = checkWinner(board);
    function checkWinner(board) {
        let winner = null;

        if (board[0] === "X" && board[1] === "X" && board[2] === "X") winner = "X";
        else if (board[3] === "X" && board[4] === "X" && board[5] === "X") winner = "X";
        else if (board[6] === "X" && board[7] === "X" && board[8] === "X") winner = "X";
        else if (board[0] === "X" && board[3] === "X" && board[6] === "X") winner = "X";
        else if (board[1] === "X" && board[4] === "X" && board[7] === "X") winner = "X";
        else if (board[2] === "X" && board[5] === "X" && board[8] === "X") winner = "X";
        else if (board[0] === "X" && board[4] === "X" && board[8] === "X") winner = "X";
        else if (board[2] === "X" && board[4] === "X" && board[6] === "X") winner = "X";

        else if (board[0] === "O" && board[1] === "O" && board[2] === "O") winner = "O";
        else if (board[3] === "O" && board[4] === "O" && board[5] === "O") winner = "O";
        else if (board[6] === "O" && board[7] === "O" && board[8] === "O") winner = "O";
        else if (board[0] === "O" && board[3] === "O" && board[6] === "O") winner = "O";
        else if (board[1] === "O" && board[4] === "O" && board[7] === "O") winner = "O";
        else if (board[2] === "O" && board[5] === "O" && board[8] === "O") winner = "O";
        else if (board[0] === "O" && board[4] === "O" && board[8] === "O") winner = "O";
        else if (board[2] === "O" && board[4] === "O" && board[6] === "O") winner = "O";

        if (!board.includes(null)) return "Draw";
        return winner;
    }

    function handleRestart() {
        setBoard(Array(9).fill(null));
        setXTurn(true);
    }

    return (
        <div className='container'>
            <h1>Tic Tac Toe</h1>
            <div className='board'>
                {board.map((cell, index) => (
                    <button key={index} onClick={() => handleClick(index)}>
                        {cell}
                    </button>
                ))}
            </div>
            <h2>{Winner ? (Winner === "Draw" ? "It's a Draw!" : `Winner is ${ Winner }`) : ` Next Turn ${isXTurn ? 'X' : 'O'}`} </h2>
            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}

export default TicTacToe;