const gameBoard = (() => {
  const board=  [];
  return {
    board
  }
  })();

const player = {
  color: '#900',
  number: 'X'
}

const renderBoard = (() => {
  const zero = document.getElementById('zero');
  zero.addEventListener('click', () => {
  zero.style.backgroundColor = `${player.color}`;
  gameBoard.board[0] = `${player.number}`;
  });
  const one = document.getElementById('one');
  one.addEventListener('click', () => {
  one.style.backgroundColor = `${player.color}`;
  gameBoard.board[1] = `${player.number}`;
  });
  const two = document.getElementById('two');
  two.addEventListener('click', () => {
  two.style.backgroundColor = `${player.color}`;
  gameBoard.board[1] = `${player.number}`;
  });
  const three = document.getElementById('three');
  three.addEventListener('click', () => {
  three.style.backgroundColor = `${player.color}`;
  gameBoard.board[1] = `${player.number}`;
  });
  const four = document.getElementById('four');
  four.addEventListener('click', () => {
  four.style.backgroundColor = `${player.color}`;
  gameBoard.board[1] = `${player.number}`;
  });
  const five = document.getElementById('five');
  five.addEventListener('click', () => {
  five.style.backgroundColor = `${player.color}`;
  gameBoard.board[1] = `${player.number}`;
  });
  const six = document.getElementById('six');
  six.addEventListener('click', () => {
  six.style.backgroundColor = `${player.color}`;
  gameBoard.board[1] = `${player.number}`;
  });
  const seven = document.getElementById('seven');
  seven.addEventListener('click', () => {
  seven.style.backgroundColor = `${player.color}`;
  gameBoard.board[1] = `${player.number}`;
  });
  const eight = document.getElementById('eight');
  eight.addEventListener('click', () => {
  eight.style.backgroundColor = `${player.color}`;
  gameBoard.board[1] = `${player.number}`;
  });
})();
  

  const two = document.getElementById('two');
  const three = document.getElementById('three');
  const four = document.getElementById('four');
  const five = document.getElementById('five');
  const six = document.getElementById('six');
  const seven = document.getElementById('seven');
  const eight = document.getElementById('eight');