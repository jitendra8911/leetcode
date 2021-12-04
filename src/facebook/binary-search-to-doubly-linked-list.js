var treeToDoublyList = function(root) {
    if (!root || (root.left === null && root.right === null)) return root;
    let firstNode = null;
    let lastNode = null;
    const inorderTreeTraversal = (curr) => {
        if (curr) {
            inorderTreeTraversal(curr.left);
            if (lastNode) {
                lastNode.right = curr;
                curr.left = lastNode;
            } else {
                firstNode = curr;
            }
            lastNode = curr;
            inorderTreeTraversal(curr.right);
        }
    };

    inorderTreeTraversal(root);
    firstNode.left = lastNode;
    lastNode.right = firstNode;

    return firstNode;
};

// [4,2,5,1,3]
const root = {
    val: 4,
    left: {
        val: 2,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
};

console.log(treeToDoublyList(root));