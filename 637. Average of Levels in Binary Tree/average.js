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
var averageOfLevels = function (root) {
  let stack = [root];
  const res = [];

  while (stack.length) {
    let sum = 0;
    const newStack = [];

    for (let node of stack) {
      sum += node.val;
      if (node.left) newStack.push(node.left);
      if (node.right) newStack.push(node.right);
    }

    res.push(sum / stack.length);
    stack = newStack;
  }

  return res;
};
