class Connect4 {

    constructor(selector) {
        this.ROWS = 6;      // 6 Rows for our grid
        this.COLS = 7;      // 7 Columns for the grid
        this.selector = selector;
        this.createGrid();      // Will create a grid every time constructor is called
        this.setUpEventListener();
    }

    createGrid() {
        const $board = $(this.selector);
        console.log($board);
        // Create a grid with 6 rows and 7 columns
        // and appending them into '<div>' elements
        for(let row = 0; row < this.ROWS; row++) {
            const $row = $('<div>')
                .addClass('row');
            for(let col = 0; col < this.COLS; col++) {
                const $col = $('<div>')
                    .addClass('col empty')
                    .attr('data-col', col)
                    .attr('data-row', row)
                $row.append($col)                   // Will append 7 columns into each row
            }
            $board.append($row);                    // Will append 6 rows into the board 
        }
    }

    // When we will hover over our grid, it will show the last empty column
    setUpEventListener() {
        const $board = $(this.selector);

        // To find an empty cell in the given column.
        function findLastEmptyCell(col) {
            const cells = $(`.col[data-col = '${col}']`);

            // Search from bottom for an empty col.
            for(let i = cells.length; i >= 0; i--) {
                const $cell = $(cells[i]);
                if($cell.hasClass('empty')) {
                    return $cell;
                }
            }
            // If we found any empty cell, then return the column otherwise return null.
            return null;
        }

        // When we will hover over any column, it will highlight the bottom last empty cell in that column
        $board.on('mouseenter', '.col.empty', function() {
            const col = $(this).data('col');
            const $lastEmptyCell = findLastEmptyCell(col);
            $lastEmptyCell.addClass(`next-red`);

        })

        // When we will leave any column, this will remove the last highlighted cell
        $board.on('mouseleave', '.col', function() {
            $('.col').removeClass(`next-red`);
        })
    }
}