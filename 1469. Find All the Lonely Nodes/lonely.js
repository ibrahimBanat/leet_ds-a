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
    if (node.left != null && node.right === null) {
      lonelyNodes.push(node.left);
    }
    if (node.right !== null && node.left === null) {
      lonelyNodes.push(node.right);
    }
  }

  traverse(root);
  return loneyNodes;
}
