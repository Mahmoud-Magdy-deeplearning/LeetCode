/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var maxAreaOfIsland = function (grid) {
  var queue = [];

  const queuePop = (queue) => {
    for (let e = 0; e <= 1; e++) queue.shift();
    return queue;
  };
  const r = grid.length;
  c = grid[0].length;
  let i,
    j,
    islands = 0,
    visited = [];
  for (var q = 0; q < r; q++) {
    visited[q] = [];
    for (var w = 0; w < c; w++) {
      visited[q][w] = 0;
    }
  }

  for (var q = 0; q < r; q++) {
    for (var w = 0; w < c; w++) {
      counter = 0;
      if (!visited[q][w] && grid[q][w] == 1) {
        queue.push(q, w);
        visited[q][w] = 1;
        while (queue.length) {
          i = queue[0];
          j = queue[1];
          if (
            i + 1 < grid.length &&
            !visited[i + 1][j] &&
            grid[i + 1][j] == grid[i][j]
          ) {
            queue.push(i + 1, j);
            visited[i + 1][j] = 1;
          }
          if (
            i - 1 >= 0 &&
            !visited[i - 1][j] &&
            grid[i - 1][j] == grid[i][j]
          ) {
            queue.push(i - 1, j);
            visited[i - 1][j] = 1;
          }
          if (
            j + 1 < grid[i].length &&
            !visited[i][j + 1] &&
            grid[i][j + 1] == grid[i][j]
          ) {
            queue.push(i, j + 1);
            visited[i][j + 1] = 1;
          }
          if (
            j - 1 >= 0 &&
            !visited[i][j - 1] &&
            grid[i][j - 1] == grid[i][j]
          ) {
            queue.push(i, j - 1);
            visited[i][j - 1] = 1;
          }
          queuePop(queue);
          counter++;
        }
        console.log("counter" + counter + "\n");
        islands = Math.max(islands, counter);
        console.log("islands" + islands + "\n");
      }
    }
  }
  return islands;
};

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

console.log(maxAreaOfIsland(grid));

// Output: 6
