/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    if (!rooms || !rooms.length) return rooms;
    const m = rooms.length;
    const n = rooms[0].length;
    const INF = 2147483647;
    const memVisited = [[]];
    const allDir = [
        [1,0],
        [0,1],
        [0,-1],
        [-1,0]
    ]
    const queue = [];
    const setShortestDistance = function(memVisited, queue) {
        let distance = 0;
        const INF = 2147483647;
        while (queue.length) {
            let size = queue.length;
            distance++;
            while (size > 0) {
            const currNode = queue.pop();
            if (rooms[currNode.m][currNode.n] !== -1 && rooms[currNode.m][currNode.n] !== 0) {
                rooms[currNode.m][currNode.n] = Math.min(distance - 1, rooms[currNode.m][currNode.n]);
            }
            for (let i = 0; i < allDir.length; i++) {
                if (rooms[currNode.m + allDir[i][0]] && 
                    rooms[currNode.m + allDir[i][0]][currNode.n + allDir[i][1]] !== undefined &&
                    rooms[currNode.m + allDir[i][0]][currNode.n + allDir[i][1]] !== -1
                    ) {
                        if ((!memVisited[currNode.m + allDir[i][0]] ||
                        !memVisited[currNode.m + allDir[i][0]][currNode.n + allDir[i][1]]
                        )) {
                            queue.unshift({m: currNode.m + allDir[i][0], n: currNode.n + allDir[i][1]});
                            memVisited[currNode.m + allDir[i][0]][currNode.n + allDir[i][1]] = true;
                        }
                    }
            }
            size--;
            memVisited[currNode.m][currNode.n] = true;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        const rowVisited = [];
        for (let j = 0; j < n; j++) {
            rowVisited[j] = false;
        }
        memVisited[i] = rowVisited;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rooms[i][j] === 0) {
                queue.push({m: i, n: j});
            }
        }
    }

    setShortestDistance(memVisited, queue);

    console.log('rooms', rooms);
};



console.log(wallsAndGates([[2147483647,-1,0,2147483647],
    [2147483647,2147483647,2147483647,-1],
    [2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]));