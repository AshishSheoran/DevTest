class Connect4 {
    constructor(selector) {
      this.ROWS = 6;          // 6 Rows for our grid
      this.COLS = 7;          // 7 Columns for the grid
      this.player = 'red';
      this.selector = selector;
      this.isGameOver = false;
      this.onPlayerMove = function() {};
      this.createGrid();                  // Will create a grid every time constructor is called
      this.setupEventListeners();
    }
  
    createGrid() {
      const $board = $(this.selector);
      $board.empty();
      this.isGameOver = false;
      // Create a grid with 6 rows and 7 columns
      // and appending them into '<div>' elements
      this.player = 'red';
      for (let row = 0; row < this.ROWS; row++) {
        const $row = $('<div>')
          .addClass('row');
        for (let col = 0; col < this.COLS; col++) {
          const $col = $('<div>')
            .addClass('col empty')
            .attr('data-col', col)
            .attr('data-row', row);
          $row.append($col);                    // Will append 7 columns into each row
        }
        $board.append($row);                    // Will append 6 rows into the board 
      }
    }
  
    // Set our listeners to work with the grid.
    setupEventListeners() {
      const $board = $(this.selector);
      const that = this;                    // To keep reference to the original object. Access to the original 'this' attribute.
  
      // To find an empty cell in the given column.
      function findLastEmptyCell(col) {
        const cells = $(`.col[data-col='${col}']`);
        // Search from bottom for an empty col.
        for (let i = cells.length - 1; i >= 0; i--) {
          const $cell = $(cells[i]);
          if ($cell.hasClass('empty')) {
            return $cell;
          }
        }
         // If we found any empty cell, then return the column otherwise return null.
        return null;
      }
  
      // When we will hover over any column, it will highlight the bottom last empty cell in that column
      $board.on('mouseenter', '.col.empty', function() {
        if (that.isGameOver) return;
        const col = $(this).data('col');
        const $lastEmptyCell = findLastEmptyCell(col);
        $lastEmptyCell.addClass(`next-${that.player}`);
      });
  
      // When we will leave any column, this will remove the last highlighted cell
      $board.on('mouseleave', '.col', function() {
        $('.col').removeClass(`next-${that.player}`);
      });
  
      // To add the color to the bottom cell of the column clicked
      $board.on('click', '.col.empty', function() {
        if (that.isGameOver) return;
        const col = $(this).data('col');
        const $lastEmptyCell = findLastEmptyCell(col);
        $lastEmptyCell.removeClass(`empty next-${that.player}`);
        $lastEmptyCell.addClass(that.player);
        $lastEmptyCell.data('player', that.player);
  
        const winner = that.checkForWinner(
          $lastEmptyCell.data('row'), 
          $lastEmptyCell.data('col')
        )
        if (winner) {
          that.isGameOver = true;
          alert(`Game Over! Player ${that.player} has won!`);
          $('.col.empty').removeClass('empty');
          return;
        }
  
        // Assign turns to the players
        that.player = (that.player === 'red') ? 'black' : 'red';
        that.onPlayerMove();
        $(this).trigger('mouseenter');
      });
    }
  
    checkForWinner(row, col) {
      const that = this;
  
      function $getCell(i, j) {
        return $(`.col[data-row='${i}'][data-col='${j}']`);
      }
  
      function checkDirection(direction) {
        let total = 0;
        let i = row + direction.i;
        let j = col + direction.j;
        let $next = $getCell(i, j);
        while (i >= 0 &&
          i < that.ROWS &&
          j >= 0 &&
          j < that.COLS && 
          $next.data('player') === that.player
        ) {
          total++;
          i += direction.i;
          j += direction.j;
          $next = $getCell(i, j);
        }
        return total;
      }
  
      function checkWin(directionA, directionB) {
        const total = 1 +
          checkDirection(directionA) +
          checkDirection(directionB);
        if (total >= 4) {
          return that.player;
        } else {
          return null;
        }
      }
  
      function checkDiagonalBLtoTR() {
        return checkWin({i: 1, j: -1}, {i: 1, j: 1});
      }
  
      function checkDiagonalTLtoBR() {
        return checkWin({i: 1, j: 1}, {i: -1, j: -1});
      }
  
      function checkVerticals() {
        return checkWin({i: -1, j: 0}, {i: 1, j: 0});
      }
  
      function checkHorizontals() {
        return checkWin({i: 0, j: -1}, {i: 0, j: 1});
      }
  
      return checkVerticals() || 
        checkHorizontals() || 
        checkDiagonalBLtoTR() ||
        checkDiagonalTLtoBR();
    }
  
    restart () {
      this.createGrid();
      this.onPlayerMove();
    }
  }