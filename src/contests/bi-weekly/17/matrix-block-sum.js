/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, K) {
    let output = [];
    // let mem = [];
    // for (let i = 0; i < mat.length; i++) {
    //     mem[i] = [];
    // }
    for (let i = 0; i < mat.length; i++) {
        output[i] = [];
        for (let j = 0; j < mat[i].length; j++) {
            output[i][j] = 0;

            for (let l = i - K; l <= i + K; l++) {
                if (mat[l]) {
                    for (let m = j - K; m <= j + K; m++) {
                        if (mat[l][m]) {
                            output[i][j] += mat[l][m];
                            //sum = sum + mat[l][m];
                        }

                    }
                }
            }


        }
    }

    return output;

};