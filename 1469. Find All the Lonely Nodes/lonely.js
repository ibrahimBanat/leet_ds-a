'use strict';

/**
 * class Node {
 * constructor(value) {
 *   this.value = value;
 *   this.right = this.left = null;
 *  }
 * }
 */

function getLonely(root) {
  let loneyNodes = [];
  if (root === null) retrun;
  function traverse(node) {
    if (node.left !== null) {
      if (node.right === null) {
        lonelyNodes.push(node.left.val);
      }
      traverse(node.left);
    }

    if (node.right !== null) {
      if (node.left === null) {
        loneyNodes.push(node.right);
      }
      traverse(node.right);
    }
  }

  traverse(root);
  return loneyNodes;
}
