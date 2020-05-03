var luckyNumbers  = function(matrix) {
    const output = [];
    for (let i = 0; i < matrix.length; i++) {
        let min = Infinity;
        let col = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j];
                col = j;
            }
        }
        let max = min;
        let found = true;
        for (let k = 0; k < matrix.length; k++) {
            if (k === i) continue;
            if (matrix[k][col] > max) {
                found = false;
                break;
            }
        }
        if (found) {
            output.push(matrix[i][col])
        }
    }

    return output;

};

console.log(luckyNumbers([[7,8],[1,2]]))