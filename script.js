var board = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = 'X';
var gameOver = false;

function makeMove(index) {
  if (!gameOver && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    if (checkWinner(currentPlayer)) {
      document.getElementById('board').style.pointerEvents = 'none';
      document.getElementById('board').style.opacity = '0.5';
      document.getElementById('board').style.backgroundColor = '#ccc';
      document.getElementsByTagName('button')[0].disabled = false;
      gameOver = true;
      document.getElementById("winner-player").textContent = 'Jogador ' + currentPlayer + ' venceu!'
     
    } else if (board.indexOf('') === -1) {
      document.getElementById('board').style.pointerEvents = 'none';
      document.getElementById('board').style.opacity = '0.5';
      document.getElementById('board').style.backgroundColor = '#ccc';
      document.getElementsByTagName('button')[0].disabled = false;
      gameOver = true;
      alert('Empate!');
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
   document.getElementById("current-player").textContent = currentPlayer;
  }
}

function checkWinner(player) {
  var winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
    [0, 4, 8], [2, 4, 6]             // diagonais
  ];
  
  for (var i = 0; i < winningCombos.length; i++) {
    var combo = winningCombos[i];
    if (board[combo[0]] === player && board[combo[1]] === player && board[combo[2]] === player) {
      return true;
    }
  }
  
  return false;
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
  document.getElementById('board').style.pointerEvents = 'auto';
  document.getElementById('board').style.opacity = '1';
  document.getElementById('board').style.backgroundColor = '#fff';
  document.getElementsByTagName('button')[0].disabled = true;
}
