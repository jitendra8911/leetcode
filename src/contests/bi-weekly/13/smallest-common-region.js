/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */

var findSmallestRegion = function(regions, region1, region2) {
    if (region1 === regions[0][0] || region2 === regions[0][0]) return regions[0][0];
    if (!region1 && !region2) return;
    if (!region1) return region2;
    if (!region2) return region1;
    const root = {
        val: regions[0][0],
        left: null,
        right: null,
    };
    const nodesSoFar = [root];
    for (let i = 0; i < regions.length; i++) {
        const indexFound = nodesSoFar.findIndex(node => node.val === regions[i][0]);
        if (indexFound !== -1) {
            const currRoot = nodesSoFar[indexFound];
            nodesSoFar.splice(indexFound, 1);
            for (let j = regions[i].length - 1; j >=1 ; j--) {
                if (regions[i][j]) {
                    const currNode = {
                        val: regions[i][j]
                    };
                    currRoot[j - 1] = currNode;
                    nodesSoFar.push(currNode);
                }
            }
            currRoot.noOfChildNodes = regions[i].length - 1;
        }
    }
    //console.log('root', root);
    const mem = {};
    var DFS = function(root, path) {
        if (!root) return;
        if (root.val === region1) {
            mem[region1] = path;
        }
        if (root.val === region2) {
            mem[region2] = path;
        }
        if (mem[region1] && mem[region2]) return;
        
        let i = 0;
        for (let i = 0; i < root.noOfChildNodes; i++) {
            if (root[i]) DFS(root[i], [...path, root[i].val]);
        }
    }
    
    DFS(root, [root.val]);
    //console.log('mem', mem);
    let lowestCommonAncestor;
    for (let i = 0; i < Math.max(mem[region1].length, mem[region2].length); i++) {
        if (mem[region1][i] === mem[region2][i]) continue;
        else {
            lowestCommonAncestor = i - 1;
            break;
        }
    }
    
    //console.log('mem[region1]', mem[region1][0]);
    return mem[region1][lowestCommonAncestor];
};


const regions = [["tQvrH","QG","ZcyyW","TTHy"],["QG","uzBJT","iM","fHC","iJ","Uc"],
["ZcyyW","rw"],["TTHy","RHY","dL","we","s"],["RHY","WsJi","lQmkd","WIaw"],
["dL","dKC","XSoQ"],["dKC","vwg"],["rw","wTRE","GHhXN","bq"],
["wTRE","rEr","LO","mn","x","QJ"],["uzBJT","DKhq"],["XSoQ","qGUn"],["WsJi","wJIR","JSZ","V"],
["GHhXN","B"],["iM","umVT","m"],["fHC","fHYsT","n"],["umVT","W"],["B","tScvQ"],["DKhq","CjbVa"],
["JSZ","sjZWd"],["sjZWd","Yo","y"],["rEr","dnzXI"],["LO","M"],["lQmkd","SPvwQ"],["Yo","ArrX"],
["M","b"],["W","S"]];
const region1 = "V";
const region2 = "WIaw";
console.log(findSmallestRegion(regions, region1, region2))