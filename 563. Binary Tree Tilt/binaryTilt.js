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
var findTilt = function (root) {
  let sum = 0;
  if (root == null) return sum;

  function traverse(node) {
    if (!node) return 0;

    let left = traverse(node.left);
    let right = traverse(node.right);

    sum += Math.abs(left - right);
    return node.val + left + right;
  }

  traverse(root);
  return sum;
};
