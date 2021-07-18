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
var findMode = function (root) {
  const seen = new Map();
  let modes = [];
  let highest = 0;

  const dfs = function (node) {
    if (!node) return;

    seen.set(node.val, seen.has(node.val) ? seen.get(node.val) + 1 : 1);
    const count = seen.get(node.val);

    if (count > highest) {
      highest = count;
      modes = [node.val];
    }

    if (count === highest && !modes.includes(node.val)) modes.push(node.val);

    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);

  return modes;
};
