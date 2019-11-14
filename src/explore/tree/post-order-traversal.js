/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var postorderTraversal = function(root, output = []) {
//     if(root === null) return output; 
//     postorderTraversal(root.left, output);
//     postorderTraversal(root.right, output);
//     output.push(root.val);
    
//     return output;
// };

var postorderTraversal = function(root) {
    const output = [];
    if (root !== null) {
        const childStack = [root];

        while(childStack.length) {
            const currRootInChildStack = childStack.pop();
            output.unshift(currRootInChildStack.val);
            if (currRootInChildStack.left) childStack.push(currRootInChildStack.left);
            if (currRootInChildStack.right) childStack.push(currRootInChildStack.right);
        }
        
    }
    
    return output;
}