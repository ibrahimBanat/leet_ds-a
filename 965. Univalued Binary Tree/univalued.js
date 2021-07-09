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
var isUnivalTree = function (root) {
  function traverse(node) {
    if (!node) return;
    if (node.val !== root.val) return false;

    if (traverse(node.left) == false) return false;
    if (traverse(node.right) == false) return false;

    return true;
  }
  return traverse(root);
};
