var levelOrder = function(root) {
    if (root === null) return [];
    const stack = [root];
    const output = [];
    while (stack.length) {
        const temp = [];
        const outputTemp = [];
        while (stack.length) {
            const currNode = stack.pop();
            temp.unshift(currNode);
            outputTemp.unshift(currNode.val)
       }
       if (outputTemp.length) output.push(outputTemp);
       while (temp.length) {
           const currNode = temp.pop();
           if (currNode.right) stack.unshift(currNode.right);
           if (currNode.left) stack.unshift(currNode.left);
       }
    }
    
    return output;
    
    
};