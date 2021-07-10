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
 * @return {string}
 */
var tree2str = function (root) {
  function toString(node) {
    if (!node) return '';
    if (!node.left && !node.right) return '' + node.val;

    const left = '(' + toString(node.left) + ')';
    const right = node.right ? '(' + toString(node.right) + ')' : '';
    return node.val + left + right;
  }
  return toString(root);
};
