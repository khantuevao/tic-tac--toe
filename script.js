const gameBoard = (() => {
  const board = [];
  return {
    board
  }
  })();

  const currentPlayer = () => {
    let determinePlayer = () => {
      let x = 0;
      let o = 0;
      gameBoard.board.forEach(e => {
        if (e === 'X') {
          return x++;
        } else if (e === 'O') {
          return o++;
        }
      })
      let result = (() => {
        return (x > o)? 'O' : 'X';
      })();
      return result;
    };

    let color = (() => {
      let result = determinePlayer();
      return (result === 'X')? '#900' : '#090';
    })();

    let sign = (() => {
      let result = determinePlayer();
      return (result === 'X')? 'X' : 'O';
    })();
    
    return {color, sign}
  }


const renderBoard = (() => {
  const zero = document.getElementById('zero');
  zero.addEventListener('click', () => {
  zero.style.backgroundColor = `${currentPlayer().color}`;
  gameBoard.board[0] = `${currentPlayer().sign}`;
  });
  const one = document.getElementById('one');
  one.addEventListener('click', () => {
  one.style.backgroundColor = `${currentPlayer().color}`;
  gameBoard.board[1] = `${currentPlayer().sign}`;
  });
  const two = document.getElementById('two');
  two.addEventListener('click', () => {
  two.style.backgroundColor = `${currentPlayer().color}`;
  gameBoard.board[2] = `${currentPlayer().sign}`;
  });
  const three = document.getElementById('three');
  three.addEventListener('click', () => {
  three.style.backgroundColor = `${currentPlayer().color}`;
  gameBoard.board[3] = `${currentPlayer().sign}`;
  });
  const four = document.getElementById('four');
  four.addEventListener('click', () => {
  four.style.backgroundColor = `${currentPlayer().color}`;
  gameBoard.board[4] = `${currentPlayer().sign}`;
  });
  const five = document.getElementById('five');
  five.addEventListener('click', () => {
  five.style.backgroundColor = `${currentPlayer().color}`;
  gameBoard.board[5] = `${currentPlayer().sign}`;
  });
  const six = document.getElementById('six');
  six.addEventListener('click', () => {
  six.style.backgroundColor = `${currentPlayer().color}`;
  gameBoard.board[6] = `${currentPlayer().sign}`;
  });
  const seven = document.getElementById('seven');
  seven.addEventListener('click', () => {
  seven.style.backgroundColor = `${currentPlayer().color}`;
  gameBoard.board[7] = `${currentPlayer().sign}`;
  });
  const eight = document.getElementById('eight');
  eight.addEventListener('click', () => {
  eight.style.backgroundColor = `${currentPlayer().color}`;
  gameBoard.board[8] = `${currentPlayer().sign}`;
  });
})();