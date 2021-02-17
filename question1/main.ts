export function isValidWalk(walk: string[]) {
    var northSouth = 0; // To store the length walked in 'North' and 'South' directions from the beginning point
    var eastWest = 0; // To store the length walked in 'East' and 'West' directions from the beginning point
  
    for (let dir of walk) {
      // If the direction traveled is 'North', increase "northSouth" by 1
      if (dir == "n") {
          northSouth += 1;
      }
      // If the direction traveled is 'South', decrease "northSouths" by 1
      if (dir == "s") {
          northSouth -= 1;
      }
      // If the direction traveled is 'East', increase "eastWest" by 1
      if (dir == "e") {
          eastWest += 1;
      }
      // If the direction traveled is 'West', decrease "eastWest" by 1.
      if (dir == "w") {
          eastWest -= 1;
      }
    }
  
    return (walk.length === 10 && northSouth === 0 && eastWest === 0);
  }
