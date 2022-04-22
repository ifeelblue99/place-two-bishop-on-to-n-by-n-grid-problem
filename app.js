function countOfWays(gridSize) {
  if (gridSize<=1) {
    return "grid size must be: gridSize => 2"
  }
  return Math.pow(gridSize, 2)*Math.pow(gridSize-1, 2)
}

console.log("count of ways ->", countOfWays(4));
