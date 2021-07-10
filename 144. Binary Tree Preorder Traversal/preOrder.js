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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let array = [];
  if (root == null) return array;

  function traverse(node) {
    array.push(node.val);
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  }
  traverse(root);
  return array;
};
