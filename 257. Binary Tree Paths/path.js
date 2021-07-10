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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (root == null) return root;
  let array = [];

  function traverse(node, str) {
    if (!node) return '';
    str += node.val;
    if (!node.left && !node.right) {
      array.push(str);
      return;
    }
    str += '->';
    node.left && traverse(node.left, str);
    node.right && traverse(node.right, str);
  }

  traverse(root, '');
  return array;
};
