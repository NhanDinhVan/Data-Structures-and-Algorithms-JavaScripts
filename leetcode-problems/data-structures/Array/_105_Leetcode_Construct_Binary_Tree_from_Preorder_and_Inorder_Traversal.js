/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let i = 0
    let myDict = {}

    inorder.map((node, index) => {
        myDict[node] = index
    })

    function buildBinaryTree(left, right) {
        if(left > right) return null

        const rootVal =  preorder[i++]
        const node = new TreeNode(rootVal)
        const mid = myDict[rootVal]

        node.left = buildBinaryTree(left, mid - 1)
        node.right = buildBinaryTree(mid + 1, right)

        return node
    }

    return buildBinaryTree(0, preorder.length - 1)
};