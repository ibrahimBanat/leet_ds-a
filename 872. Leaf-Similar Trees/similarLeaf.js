/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let leaf1 = '';
  let leaf2 = '';
  if (root1 == null && root2 == null) return false;

  function traverse(node) {
    if (node == null) return;
    if (node.left == null && node.right == null) {
      leaf1 = leaf1 + ' ' + node.val;
    }

    traverse(node.left);
    traverse(node.right);
  }

  traverse(root1);

  leaf2 = leaf1;
  leaf1 = '';
  traverse(root2);
  console.log(leaf1);
  console.log(leaf2);
  return leaf1 == leaf2;
};
