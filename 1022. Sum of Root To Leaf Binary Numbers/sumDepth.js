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
var maxDepth = function (root) {
  if (root == null) return 0;
  leftDepth = maxDepth(root.left);
  rightDepth = maxDepth(root.right);

  if (leftDepth > rightDepth) {
    return leftDepth + 1;
  } else {
    return rightDepth + 1;
  }
};
