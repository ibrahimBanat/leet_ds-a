# 606. Construct String from Binary Tree

`level: Easy`.

[Link](https://leetcode.com/problems/construct-string-from-binary-tree/)

## Problem Domain

Given the `root` of a binary tree, construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way, and return it.

Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.

![](https://assets.leetcode.com/uploads/2021/05/03/cons1-tree.jpg)

```
Input: root = [1,2,3,4]
Output: "1(2(4))(3)"
Explanation: Originallay it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs. And it will be "1(2(4))(3)"

```
