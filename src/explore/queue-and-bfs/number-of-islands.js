

var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;

    const bfs = function() {
        const queue = [];
        const m = grid.length;
        const n = grid[0].length;
        const allDir = [
            [1,0],
            [0,1],
            [0,-1],
            [-1,0]
            ];
        let numOfIslands = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    numOfIslands++;
                    // mark the element as visited
                    grid[i][j] = 0;
                    // add the element to queue
                    queue.push({x:i, y:j});
                    while (queue.length) {
                        let item = queue.shift();
                        let xIndex = item.x;
                        let yIndex = item.y;
                        for (let k = 0; k < allDir.length; k++) {
                            let xDir = allDir[k][0];
                            let yDir = allDir[k][1];
                            if (grid[xIndex + xDir] && grid[xIndex + xDir][yIndex + yDir]) {
                                if (grid[xIndex + xDir][yIndex + yDir] == 1) {
                                    queue.push({x: xIndex + xDir, y: yIndex + yDir});
                                    grid[xIndex + xDir][yIndex + yDir] = 0;
                                }
                            }
                        }
                    }
                }
            }
        }
        
        return numOfIslands;  
    }
    const numOfIslands = bfs();

    return numOfIslands;
};

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))