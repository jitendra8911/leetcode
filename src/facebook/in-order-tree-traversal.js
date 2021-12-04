const inOrderTreeTraversal = (root) => {
    if (root !== null) {
        inOrderTreeTraversal(root.left);
        console.log(root.val);
        inOrderTreeTraversal(root.right);
    }
};

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

console.log(inOrderTreeTraversal(root));