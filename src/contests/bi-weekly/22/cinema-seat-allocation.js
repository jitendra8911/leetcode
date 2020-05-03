/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    const midSeats = [0,0,0,1,1,1,1,0,0,0];
    const sideSeats = [[0,1,1,1,1,0,0,0,0,0], [0,0,0,0,0,1,1,1,1,0]];
    const hashReservedSeats = {};
    let output = 0;
    for (let i = 0; i < reservedSeats.length; i++) {
        if (hashReservedSeats[reservedSeats[i][0]]) {
            hashReservedSeats[reservedSeats[i][0]].push(reservedSeats[i][1]);
        } else {
            hashReservedSeats[reservedSeats[i][0]] = [reservedSeats[i][1]];
        }
    }
    Object.keys(hashReservedSeats).forEach(row => {
        let side1Availability = 4;
        let side2Availability = 4;
        let midAvailability = 4;
        const i = parseInt(row);
        for (let j = 0; j < hashReservedSeats[i].length; j++) {
            if(midSeats[hashReservedSeats[i][j]-1]) {
                midAvailability--;
            } if (sideSeats[0][hashReservedSeats[i][j]-1]) {
                side1Availability--;
            } if (sideSeats[1][hashReservedSeats[i][j]-1]) {
                side2Availability--;
            }
        }

        if (side1Availability === 4 && side2Availability === 4) {
            output += 2;
        } else if (midAvailability === 4 || side1Availability === 4 || side2Availability === 4) {
            output += 1;
        }
    });
    output += (n-Object.keys(hashReservedSeats).length) * 2;

    return output;

};

console.log(maxNumberOfFamilies(4, [[4,3],[1,4],[4,6],[1,7]]));