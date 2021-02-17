export function findOutlier(integers: number[]): number {
  var evens = [];    // To store the even values from 'integers' array
  var odds = [];     // To store the odd values from 'integers' array

  // Loop through the 'integer' array
  for (var num in integers) {         
    // To check if the integer is even or odd
    if(integers[num] % 2 == 0) {      
      evens.push(integers[num]);         // If even, store into 'evens' array.
    }
    else {
      odds.push(integers[num]);          // If odd, store into 'odds' array
    }
  }

  // Now, if the length of 'evens' array is bigger than 'odds' array,
  // That means, value stored in 'odds[]' is outliner here.
  // Otherwise, value stored in 'evens[]' is outliner here.
  if(evens.length > odds.length) {
    return odds[0];
  } else {
    return evens[0];
  }
}