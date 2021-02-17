class Connect4 {

    constructor(selector) {
        this.ROWS = 6;      // 6 Rows for our grid
        this.COLS = 7;      // 7 Columns for the grid
        this.selector = selector;
        this.createGrid();      // Will create a grid every time constructor is called
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
                $row.append($col)                   // Will append 7 columns into each row
            }
            $board.append($row);                    // Will append 6 rows into the board 
        }
    }
}