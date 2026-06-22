/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let ans = Infinity;
  let prev = null;

  function inorder(root) {
    if (!root) {
      return;
    }

    inorder(root.left);

    if (prev !== null) {
      ans = Math.min(ans, root.val - prev);
    }

    prev = root.val;

    inorder(root.right);
  }

  inorder(root);

  return ans;
};
