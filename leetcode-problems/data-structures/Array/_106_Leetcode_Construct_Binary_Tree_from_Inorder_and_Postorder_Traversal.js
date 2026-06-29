/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let i = postorder.length - 1
    const myMap = {}

    inorder.map((item, index) => {
        myMap[item] = index
    })

    function buildBinaryTree(left, right) {
        if(left > right) return null

        const rootVal = postorder[i--]
        const node = new TreeNode(rootVal)
        const mid = myMap[rootVal]

        node.right = buildBinaryTree(mid + 1, right)
        node.left = buildBinaryTree(left, mid - 1)

        return node
    }

    return buildBinaryTree(0, i)
};