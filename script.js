const gameBoard = (() => {
  const board = [];
  return {
    board
  }
  })();

const newPlayer = () => {
  const name = prompt(`enter player name`, '');
  return name;
}




const gameFlow = (() => {
  const clear = () => {
    resultContainer.textContent = '';
    gameBoard.board = [];
    const squares = document.getElementsByClassName('area');
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = '';
    };      
  }

  let firstPlayer = 'playerOne';
  let secondPlayer = 'playerTwo';
  const newPlayers = document.querySelector('.new-players');
  newPlayers.addEventListener('click', () => {
    firstPlayer = newPlayer(one);
    secondPlayer = newPlayer(two);
    const updateNames = (() => {
      const nameOne = document.getElementById('name-one');
      nameOne.textContent = `${firstPlayer} (red)`;
      let scoreOne = document.getElementById('score-one');
      scoreOne.textContent = '0';
      const nameTwo = document.getElementById('name-two');
      nameTwo.textContent = `${secondPlayer} (green)`;
      let scoreTwo = document.getElementById('score-two');
      scoreTwo.textContent = '0';
      clear();
    })();
  });

  const resultContainer = document.getElementById('result-container');

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

  const showResult = () => {
    let final = checkResult();
    if (final.result === 'X') {
      let scoreOne = document.getElementById('score-one');
      scoreOne.textContent = Number(scoreOne.textContent) + 1;
      resultContainer.textContent = `${firstPlayer} wins`;
    } else if (final.result === 'O') {
      let scoreTwo = document.getElementById('score-two');
      scoreTwo.textContent = Number(scoreTwo.textContent) + 1;
      resultContainer.textContent = `${secondPlayer} wins`;
    } else if (final.result === 'draw') {
      resultContainer.textContent = 'it\'s a draw';
    }
  }

  const checkTurn = () => {
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

  const renderBoard = (() => {
    const squares = document.getElementsByClassName('area');
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', () => {
        if (!(resultContainer.textContent === '')) {
          clear();
        };
        if (squares[i].style.backgroundColor === '') {
          squares[i].style.backgroundColor = `${checkTurn().color}`;
          gameBoard.board[i] = `${checkTurn().sign}`;
          showResult();
        } else return;
      })
    };
  })();
})();