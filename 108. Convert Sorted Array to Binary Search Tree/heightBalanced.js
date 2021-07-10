/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function tree(left, right) {
    if (left == right) return new TreeNode(nums[left]);
    let mid = Math.floor((left + right) / 2);
    let node = new TreeNode(nums[mid]);

    if (left <= mid - 1) node.left = tree(left, mid - 1);
    node.right = tree(mid + 1, right);

    return node;
  }

  return tree(0, nums.length - 1);
};
