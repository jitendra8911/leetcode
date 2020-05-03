/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const xRow = {};
    const xCol = {};
    const xDiag = {0 : 0, 1 : 0};
    const oRow = {};
    const oCol = {};
    const oDiag = {0 : 0, 1: 0};
    
    for (let i = 0; i < moves.length; i++) {
        // if (xRow[0] === 3 || xRow[1] === 3 || xRow[2] === 3 || xCol[0] === 3 || xCol[1] === 3 || xCol[2] === 3 || xDiag[0] === 3 || xDiag[1] === 3) return "A";
        // if (oRow[0] === 3 || oRow[1] === 3 || oRow[2] === 3 || oCol[0] === 3 || oCol[1] === 3 || oCol[2] === 3 || oDiag[0] === 3 || oDiag[1] === 3) return "B";
        if (i % 2 === 0) {
            const move = moves[i];
            if (xRow[move[0]]) xRow[move[0]]++;
            else xRow[move[0]] = 1;
            if (xCol[move[1]]) xCol[move[1]]++;
            else xCol[move[1]] = 1;
            if (move[0] === move[1]) {
                xDiag[0]++;
            }
            if (move[0] === 2 && move[1] === 0) xDiag[1]++;
            if (move[0] === 0 && move[1] === 2) xDiag[1]++;
            if (move[0] === 1 && move[1] === 1) xDiag[1]++;
            
            if (xRow[0] === 3 || xRow[1] === 3 || xRow[2] === 3 || xCol[0] === 3 || xCol[1] === 3 || xCol[2] === 3 || xDiag[0] === 3 || xDiag[1] === 3) return "A";
        }
        
        else {
            const move = moves[i];
            if (oRow[move[0]]) oRow[move[0]]++;
            else oRow[move[0]] = 1;
            if (oCol[move[1]]) oCol[move[1]]++;
            else oCol[move[1]] = 1;
            if (move[0] === move[1]) {
                oDiag[0]++;
            }
            if (move[0] === 2 && move[1] === 0) oDiag[1]++;
            if (move[0] === 0 && move[1] === 2) oDiag[1]++;
            if (move[0] === 1 && move[1] === 1) oDiag[1]++;
            
            if (oRow[0] === 3 || oRow[1] === 3 || oRow[2] === 3 || oCol[0] === 3 || oCol[1] === 3 || oCol[2] === 3 || oDiag[0] === 3 || oDiag[1] === 3) return "B";
        }
    }
    
    return "Draw";
};


console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]));