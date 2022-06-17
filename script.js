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

const checkResult = () => {
  const checkIsOver = () => {
    const result = (() => {
      let count = 0;
      for (let i = 0; i < 9; i++) {
        if (gameBoard.board[i] === undefined) count++;
      }
      return (count === 0)? true : false;
    })();
    return result;
  };
  const area = gameBoard.board;
  const result = (() => {
    if ((area[0] === 'X' && area[1] === 'X' && area[2] === 'X') || 
        (area[0] === 'X' && area[3] === 'X' && area[6] === 'X') ||
        (area[0] === 'X' && area[4] === 'X' && area[8] === 'X') ||
        (area[6] === 'X' && area[7] === 'X' && area[8] === 'X') || 
        (area[6] === 'X' && area[4] === 'X' && area[2] === 'X') ||
        (area[8] === 'X' && area[5] === 'X' && area[2] === 'X') ||
        (area[3] === 'X' && area[4] === 'X' && area[5] === 'X') ||
        (area[1] === 'X' && area[4] === 'X' && area[7] === 'X')) {
          return `X`;
        } else if ((area[0] === 'O' && area[1] === 'O' && area[2] === 'O') || 
                   (area[0] === 'O' && area[3] === 'O' && area[6] === 'O') ||
                   (area[0] === 'O' && area[4] === 'O' && area[8] === 'O') ||
                   (area[6] === 'O' && area[7] === 'O' && area[8] === 'O') || 
                   (area[6] === 'O' && area[4] === 'O' && area[2] === 'O') ||
                   (area[8] === 'O' && area[5] === 'O' && area[2] === 'O') ||
                   (area[3] === 'O' && area[4] === 'O' && area[5] === 'O') ||
                   (area[1] === 'O' && area[4] === 'O' && area[7] === 'O')) {
          return `O`;
        } else if (checkIsOver()) {
          return 'draw';
        } else {
          return;
        }
  })();
  return {result};
};

const resultContainer = document.getElementById('result-container');

const renderBoard = (() => {
  const squares = document.getElementsByClassName('area');
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
      if (!(resultContainer.textContent === '')) {
        resultContainer.textContent = '';
        gameBoard.board = [];
        for (let i = 0; i < squares.length; i++) {
          squares[i].style.backgroundColor = '';
        };
      };
      if (squares[i].style.backgroundColor === '') {
        squares[i].style.backgroundColor = `${currentPlayer().color}`;
        gameBoard.board[i] = `${currentPlayer().sign}`;
        showResult();
      } else return;
    })
  };
})();

const showResult = () => {
  let final = checkResult();
  if (final.result === 'X') {
    let scoreOne = document.getElementById('score-one');
    scoreOne.textContent = Number(scoreOne.textContent) + 1;
    resultContainer.textContent = 'playerOne wins';
  } else if (final.result === 'O') {
    let scoreTwo = document.getElementById('score-two');
    scoreTwo.textContent = Number(scoreTwo.textContent) + 1;
    resultContainer.textContent = 'playerTwo wins';
  } else if (final.result === 'draw') {
    resultContainer.textContent = 'it\'s a draw';
  }
}