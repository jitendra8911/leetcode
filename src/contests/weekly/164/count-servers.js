/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const total = 0;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                if (grid[i][j+1] || (grid[i+1] && grid[i+1][j]) || (grid[i-1] && grid[i-1][j]) || grid[i][j-1]) total++;
            }
        }
    }
    
    return total;
};


console.log(countServers([[1,0],[0,1]]))