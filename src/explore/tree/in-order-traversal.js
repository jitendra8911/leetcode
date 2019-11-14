// var inorderTraversal = function(root, output = []) {
//     if (root !== null) {
//         const stack = [];
//         if (root.right !== null) stack.push(root.right);
//         stack.push(root);
//         if (root.left !== null) stack.push(root.left);
//         root.visited = true;
//         while (stack.length !== 0) {
//            const currRoot = stack[stack.length - 1];
//            if (currRoot.visited || (currRoot.left === null && currRoot.right === null)) {
//                output.push(stack.pop().val);
//                continue;
//            }
//         stack.pop();   
//         if (currRoot.right !== null) stack.push(currRoot.right);
//         stack.push(currRoot);
//         if (currRoot.left !== null) stack.push(currRoot.left);
//         currRoot.visited = true;
//         }
//     }
    
//     return output;
// }

var inorderTraversal = function(root, output = []) {
    if (root !== null) {
        const stack = [];
        leftTraversal(root, stack);
        while(stack.length !== 0) {
            const currTop = stack.pop();
            output.push(currTop.val);
            leftTraversal(currTop.right, stack);
        }
    }
    
    return output;
}

var leftTraversal = function(root, stack = []) {
    while (root !== null) {
        stack.push(root);
        root = root.left
    }
}

let root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 6,
                left: null,
                right: null
            },
            right: {
                val: 7,
                left: null,
                right: null
            }
        },
        right: {
            val: 5,
            left: {
                val: 8,
                left: null,
                right: null
            },
            right: {
                val: 9,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 3,
        left: null,
        right: null,
    }
}
console.log(inorderTraversal(root))