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
var diameterOfBinaryTree = function (root) {
  const longest = node => {
    if (node) {
      const [left, lDiameter] = longest(node.left);
      const [right, rDiameter] = longest(node.right);

      const diameter = Math.max(left + right + 1, lDiameter, rDiameter);

      return [Math.max(left, right) + 1, diameter];
    }
    return [0, 0];
  };

  return longest(root)[1] - 1;
};
