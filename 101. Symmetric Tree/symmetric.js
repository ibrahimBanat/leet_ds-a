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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root == null) return false;

  function traverse(firstNode, secondNode) {
    if (firstNode == null && secondNode == null) return true;
    if (firstNode == null && secondNode !== null) return false;
    if (firstNode !== null && secondNode == null) return false;
    if (firstNode.val !== secondNode.val) return false;

    return (
      traverse(firstNode.left, secondNode.right) &&
      traverse(firstNode.right, secondNode.left)
    );
  }

  return traverse(root.left, root.right);
};
