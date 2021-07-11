/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 *   
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  function traverse(node) {
    if (node === p || node === q) return node;

    if (p.val < node.val && q.val > node.val) return node;
    if (p.val > node.val && q.val < node.val) return node;

    if (p.val < node.val) return traverse(node.left);
    return traverse(node.right);
  }

  return traverse(root);
};
