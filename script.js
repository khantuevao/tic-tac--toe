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

const areaBoard = (() => {
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