
var Leaderboard = function() {
    if (!this.dashboard) {
        this.dashboard = {};
    }
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if (!this.dashboard[playerId]) {
        this.dashboard[playerId] = score;
    } else {
        this.dashboard[playerId] += score;
    }
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    const sum = 0;
    const sortedScores = Object.values(this.dashboard).reverse();
    for (let i = 0; i < k; i++) {
        sum += sortedScores[i];

    }
    return sum;
};



/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    this.dashboard[playerId] = 0;
};


  var obj = new Leaderboard()
  obj.addScore(playerId,score)
  console.log(param_2 = obj.top(K));
  obj.reset(playerId)

