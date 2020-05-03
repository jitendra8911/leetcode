var countUnivalSubtrees = function(root) {
    let noOfUniqueTrees = 0;
    const countUsingDFS = function(root, initialRoot) {
        
        if (!root) return true;
        if (root.val !== initialRoot.val) return false;
        if (!root.left && !root.right) {
            return true;
        }
        const leftAns = countUsingDFS(root.left, root);
        const rightAns = countUsingDFS(root.right, root);
        if (leftAns && rightAns) noOfUniqueTrees++;
        
        countUsingDFS(root.left, root.left);
        countUsingDFS(root.right, root.right);

        return true;
        
    }
    countUsingDFS(root, root);
    
    return noOfUniqueTrees;
    
};


const root = {
   val: 5,
   left: {
       val: 1,
       left: {
           val: 5,
           left: null,
           right: null
       },
       right: {
        val: 5,
        left: null,
        right: null
    }

   },
   right: {
       val: 5,
       left: null,
       right: {
        val: 5,
        left: null,
        right: null
    }
   }
}

console.log(countUnivalSubtrees(root));