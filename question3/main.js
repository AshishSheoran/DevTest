// export class Connect4 {
  
//   constructor() {
//     //  Both player's inputs
//     var grid = [7][6];
//     for (var i = 0; i < 7; i++) {
//       for (var j = 0; j < 6; j++) {
//         grid[i][j] = '*';
//       }
//     }
    
//   }

//   play(col: number): string {

//     // Player 1 added column value
//     // Check if the base row is available by comparing '*' vs '?'
//     // To count number of similar appearences vertically
//     var column = col;

//     if()
//     for(var i = column; i < column + 1; i ++) {
//       for(var j = 0; j < 6; j++) {
//         if(column[i][j] === "*") {
//           column[i][j] = "1";
//         }
//       }
//     }
//     var message;
//     return message;
//   }
// }

$(document).ready(function() {
    // TODO: Draq a grid
    const connect4 = new Connect4('#connect4');
})
