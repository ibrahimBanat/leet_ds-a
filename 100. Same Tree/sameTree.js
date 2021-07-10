/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (q == null && p == null) return true;
  if (!q || !p) return false;
  function traverse(node1, node2) {
    if (!node1 && !node2) return true;
    if (node1.left == null && node2.left != null) return false;
    if (node1.left !== null && node2.left == null) return false;
    if (node1.right == null && node2.right != null) return false;
    if (node1.right !== null && node2.right == null) return false;

    if (node1.val !== node2.val) return false;

    let left = traverse(node1.left, node2.left);
    let right = traverse(node1.right, node2.right);
    return left && right;
  }

  return traverse(p, q);
};
