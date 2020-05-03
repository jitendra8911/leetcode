/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    const mem = {};
    const maxPossibleJ = Math.min(parseInt(tomatoSlices / 4), cheeseSlices);
    const maxPossibleS = Math.min(parseInt(tomatoSlices / 2), cheeseSlices);
    
    for (let i = 0; i <= maxPossibleJ; i++) {
        const remTomato = tomatoSlices - i * 4;
        const remCheese = cheeseSlices - i;
        const j = remCheese;
        if (remTomato % 2 === 0 && remCheese === parseInt(remTomato / 2)) return [i, j];
    }
    
    for (let j = 0; j <= maxPossibleS; j++) {
        const remTomato = tomatoSlices - j * 2;
        const remCheese = cheeseSlices - j;
        const i = remCheese;
        if (remTomato % 4 === 0 && remCheese === parseInt(remTomato / 4)) return [i,j];
    }
    
    return [];
    
};

console.log(numOfBurgers(16, 7));