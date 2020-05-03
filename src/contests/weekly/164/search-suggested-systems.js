/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    // build a trie on products
    const dict = {};
    const output = [];
    const sortedProducts = products.sort();
    const buildTree = function() {
    
        for (let i = 0; i < sortedProducts.length; i++) {
            let currNode = dict;
            for (let j = 0; j < sortedProducts[i].length; j++) {
               // if there is no node with the key, then create one 
               if (!currNode[sortedProducts[i][j]]) {
                   currNode[sortedProducts[i][j]] = { val: sortedProducts[i].substring(0, j + 1)};
               }
               currNode = currNode[sortedProducts[i][j]];
            }
        }
    }
    
    const searchTree = function(key) {
        let currNode = dict;
        for (let i = 0; i < key.length; i++) {
            if (currNode[key[i]]) {
                currNode = currNode[key[i]];
            } else {
                return null;
            }
        }
        
        return currNode;
    }
    
    const dag = function(node, output) {
        const keys = Object.keys(node).sort();
        //if (output.length >= 3) return;
        // if it is leaf node, it will only have one property which is value
        if (keys.length === 1) {
            output.push(node.val);
            return output;
        }
        if (binarySearch(node.val)) output.push(node.val);
        keys.forEach(key => {
            if (output.length >= 3) return output;
            if (key !== 'val') {
                output = dag(node[key], output);
            }
        });
        
        return output;
    }
    
    const binarySearch = function(val) {
        let i = 0;
        let j = sortedProducts.length - 1;
    
        while (i <= j) {
            const mid = parseInt((i+j)/2);
            if (sortedProducts[mid] === val) return true;
            
            if (sortedProducts[mid] < val) {
                i = mid+1;
            }
            
            if (sortedProducts[mid] > val) {
                j = mid - 1;
            }
        }
        
        return false;
        
    }
    
    buildTree();
    
    // loop the search keyword
    for (let i = 0; i < searchWord.length; i++) {
        const currNode = searchTree(searchWord.substr(0, i+1));
        if (!currNode) {
            output.push([]);
            continue;
        }
        output.push(dag(currNode, []));
    }
    
    return output;
    
};

console.log(suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], 'mouse'));
