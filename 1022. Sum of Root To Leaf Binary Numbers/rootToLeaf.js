'use strict';
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
 var sumRootToLeaf = function(root) {
    if(root == null) return root;
    let sum = 0;
    
    function traverse(node, nodes='') {
        if(node.left == null && node.right == null) sum+= parseInt((nodes+node.val),2);
        
        if(node.left) traverse(node.left, nodes + node.val);
        if(node.right) traverse(node.right, nodes + node.val)
    }
    traverse(root)
    return sum
};