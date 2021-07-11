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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let depth = 0;
  let result = [];

  function traverse(node, depth) {
    if (node == null) return;

    result[depth] ? result[depth].push(node.val) : result.push([node.val]);

    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  }
  traverse(root, depth);
  return result;
};
