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
    return (result === 'X')? 'rgb(153, 0, 0)' : 'rgb(0, 153, 0)';
  })();

   let sign = (() => {
    let result = determinePlayer();
    return (result === 'X')? 'X' : 'O';
  })();

  return {color, sign}
  }


let player1

let player2

let checkTurn

const checkIsOver = () => {
  const result = (() => {
    let count = 0;
    for (let i = 0; i < 9; i++) {
      if (gameBoard.board[i] === undefined) count++;
    }
    return (count === 0)? true : false;
  })();
  return result;
}

const checkResult = () => {
  const area = gameBoard.board;
  const result = (() => {
    return ((area[0] === area[1] && area[0] === area[2]) || 
            (area[0] === area[3] && area[0] === area[6]) ||
            (area[0] === area[4] && area[0] === area[8]) ||
            (area[6] === area[7] && area[6] === area[8]) || 
            (area[6] === area[4] && area[6] === area[2]) ||
            (area[8] === area[5] && area[8] === area[2]))? 'win' : 'draw';
  })();
  return {result};
};

const renderBoard = (() => {
  const squares = document.getElementsByClassName('area');
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
      if (squares[i].style.backgroundColor === '') {
        squares[i].style.backgroundColor = `${currentPlayer().color}`;
        gameBoard.board[i] = `${currentPlayer().sign}`;
      } else return;
    })
  };
})();