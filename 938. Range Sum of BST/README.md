# 938. Range Sum of BST

- `Level: Easy`.

[Link](https://leetcode.com/problems/range-sum-of-bst/).

## Problem Domain

Given the root node of a binary search tree and two integers `low` and `high`, return the sum of values of all nodes with a value in the _inclusive_ **range** `[low, high]`.

## Example:

![](https://assets.leetcode.com/uploads/2020/11/05/bst1.jpg)

```
Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
```

## Constraints:

- The number of nodes in the tree is in the range `[1, 2 * 104]`.
- `1 <= Node.val <= 105`
- `1 <= low <= high <= 105`
- All `Node.val` are unique.
