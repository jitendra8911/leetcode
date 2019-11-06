var tilingRectangle = function (n, m) {
    let minSquaresNeeded = Infinity;
    let mem = {};
    const area = n * m;
    const minOfNandM = Math.min(n, m);
    
    const numberOfSquaresForArea = 0;

    minSquaresNeeded = dfs(minOfNandM, area, numberOfSquaresForArea, minSquaresNeeded);

    return minSquaresNeeded;
};

function dfs(minOfNandM, area, numberOfSquaresForArea, minSquaresNeeded) {
    //if (mem[area]) return mem[area];
    if (minOfNandM === 0 || area === 0) {
        minSquaresNeeded = Math.min(minSquaresNeeded, numberOfSquaresForArea);
        //mem[area] = minSquaresNeeded;
        return minSquaresNeeded;
    }



    while (minOfNandM > 0) {
        const numberOfSquaresNeededForI = parseInt(area / (minOfNandM * minOfNandM));
        if (numberOfSquaresNeededForI !== 0) {
            numberOfSquaresForArea += numberOfSquaresNeededForI;
            const remArea = area % (minOfNandM * minOfNandM);
            minSquaresNeeded = dfs(remArea/minOfNandM, remArea, numberOfSquaresForArea, minSquaresNeeded);
            //numberOfSquaresForArea = 0;
        }
        minOfNandM--;
    }

    //mem[area] = minSquaresNeeded;
    return minSquaresNeeded;
}

console.log(tilingRectangle(11, 13));