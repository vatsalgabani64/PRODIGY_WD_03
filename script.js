let currentPlayer = 'X';
let gameActive = true;
let board = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function placeMarker(cellIndex) {
  if (gameActive && board[cellIndex] === '') {
    board[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
    if (checkForWin()) {
      document.getElementById('status').innerText = `${currentPlayer} wins!`;
      gameActive = false;
    } else if (isBoardFull()) {
      document.getElementById('status').innerText = "It's a tie!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkForWin() {
  return winningConditions.some(condition => {
    return condition.every(index => {
      return board[index] === currentPlayer;
    });
  });
}

function isBoardFull() {
  return board.every(cell => cell !== '');
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
  document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
  gameActive = true;
}
