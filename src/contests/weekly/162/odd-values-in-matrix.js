var oddCells = function(n, m, indices) {
    let a = [];
    for (let i = 0; i < n; i++) {
        a[i] = [];
        for (let j = 0; j < m; j++) {
            a[i].push(0);
        }
    }
    
    for (let i = 0; i < indices.length; i++) {
        const row = indices[i][0];
        const col = indices[i][1];
        for (let j = 0; j < m; j++) {
            a[row][j] += 1;
        }
        for (let k = 0; k < n; k++) {
            a[k][col] += 1;
        }
    }
    
    let odd = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (a[i][j] % 2 !== 0) {
                odd++;
            }
        }
    }
    
    return odd;
    
};

console.log(oddCells(2,3,[[0,1],[1,1]]));