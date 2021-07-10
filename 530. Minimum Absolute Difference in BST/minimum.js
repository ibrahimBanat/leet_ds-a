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
  let result = Infinity;
  let previous;

  function traverse(node) {
    node.left && traverse(node.left);

    if (previous !== undefined) {
      result = Math.min(result, node.val - previous);
    }
    previous = node.val;
    node.right && traverse(node.right);
  }

  traverse(root);
  return result;
};
