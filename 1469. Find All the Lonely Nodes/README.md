# 1469. Find All the Lonely Nodes

`level : Easy`.

## Problem Domain

In a binary tree, a **lonely** node is a node that is the only child of its parent node. The root of the tree is not lonely because it does not have a parent node.

Given the `root` of a binary tree, return an array containing the values of all lonely nodes in the tree. Return the list in any **order**.

![](https://assets.leetcode.com/uploads/2020/06/03/e1.png)

```
Input: root = [1,2,3,null,4]

Output: [4]
```

**Explanation**: Light blue node is the only lonely node.

Node 1 is the root and is not lonely.

Nodes 2 and 3 have the same parent and are not lonely.
