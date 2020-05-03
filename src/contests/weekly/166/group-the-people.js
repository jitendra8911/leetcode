/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    console.log('groupSizes', groupSizes);
    let hashMap = [];
    let sizes = [];
    let output = [];
    for (let i = 0; i < groupSizes.length; i++) {
        if (!sizes[groupSizes[i]]) {
            sizes.push
        }
        console.log('groupSizes[i]', groupSizes[i]);
        if (!hashMap[groupSizes[i]]) {
            hashMap[groupSizes[i]] = [i];
        } else {
            hashMap[groupSizes[i]].push(i);
        }
    }
    for (let i = 0; i < sizes.length; i++) {
        if (hashMap[sizes[i]].length === i) output.push(hashMap[sizes[i]]);
        else {
            let j = 0;
            while (j < hashMap[sizes[i]].length) {
                output.push(hashMap[sizes[i]].slice(j, j + sizes[i]));
                j = j + sizes[i];
            }
        }
    }
    
    console.log('output', output);
    
    console.log(output);
    
};

groupThePeople([2,2,1,1,1,1,1,1])