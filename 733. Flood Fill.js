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
var floodFill = function (image, sr, sc, newColor) {
  var queue = [];
  const r = image.length;
  c = image[0].length;
  queue.push(sr, sc);
  let i,
    j,
    k,
    visited = [];
  for (var q = 0; q < r; q++) {
    visited[q] = [];
    for (var w = 0; w < c; w++) {
      visited[q][w] = 0;
    }
  }
  while (queue.length) {
    i = queue[0];
    j = queue[1];
    visited[i][j] = 1;

    if (
      i + 1 < image.length &&
      !visited[i + 1][j] &&
      image[i + 1][j] == image[i][j]
    )
      queue.push(i + 1, j);
    if (i - 1 >= 0 && !visited[i - 1][j] && image[i - 1][j] == image[i][j])
      queue.push(i - 1, j);
    if (
      j + 1 < image[i].length &&
      !visited[i][j + 1] &&
      image[i][j + 1] == image[i][j]
    )
      queue.push(i, j + 1);
    if (j - 1 >= 0 && !visited[i][j - 1] && image[i][j - 1] == image[i][j])
      queue.push(i, j - 1);
    image[i][j] = newColor;
    for (let e = 0; e <= 1; e++) queue.shift();
  }
  return image;
};
const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  sr = 1,
  sc = 1,
  newColor = 2;
console.log(floodFill(image, sr, sc, newColor));

// Output: [[2,2,2],[2,2,0],[2,0,1]]
