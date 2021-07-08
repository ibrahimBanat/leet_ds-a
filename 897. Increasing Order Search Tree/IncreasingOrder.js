'user strict';

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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let treeNode = new TreeNode(0);
  inOrderedTree = treeNode;

  function traverse(node) {
    if (node) {
      traverse(node.left);
      inOrderedTree.right = new TreeNode(node.val);
      inOrderedTree = inOrderedTree.right;
      traverse(node.right);
    }
  }
  traverse(root);

  return treeNode.right;
};
