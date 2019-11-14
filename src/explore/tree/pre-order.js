var preorderTraversal = function(root, output = []) {
    if(root === null) return;
    output.push(root.val);
    output.push(preorderTraversal(root.left), output);
    output.push(preorderTraversal(root.right), output);
    
    return output;
};

function TreeNode(val) {
         this.val = val;
        this.left = this.right = null;
     }

     