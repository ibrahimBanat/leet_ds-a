'use strict';

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 *
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let totalSum = 0;
  function traverse(node) {
    if (!node) {
      return node;
    }
    traverse(node.left);
    if (node.val >= low && node.val <= high) {
      totalSum = totalSum + node.val;
    }
    traverse(node.right);
  }
  traverse(root);
  return totalSum;
};
