var tilingRectangle = function (n, m) {
    let minSquaresNeeded = Infinity;
    const area = n * m;

    const numberOfSquaresForArea = 0;

    minSquaresNeeded = dfs(m, n, area, minSquaresNeeded, []);

    return minSquaresNeeded;
};

function dfs(m, n, area, minSquaresNeeded, minSquares) {

    let minOfNandM = Math.min(m, n);

    if (area === 0) {
        minSquaresNeeded = Math.min(minSquaresNeeded, minSquares.length);
        return minSquaresNeeded;
    }

    while (minOfNandM > 0) {
        const areaOfI = minOfNandM * minOfNandM;
        if (areaOfI <= area) {
            minSquaresNeeded = dfs(m - (minOfNandM % m), n - (minOfNandM % n), area - (minOfNandM * minOfNandM), minSquaresNeeded, [...minSquares, minOfNandM]);
        }
        minOfNandM--;
    }
    return minSquaresNeeded;
}

console.log(tilingRectangle(11,13));
