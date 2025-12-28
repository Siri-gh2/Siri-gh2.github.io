---
layout: post
title: "Python – Day 22: NumPy Hands-on Practice"
date: 2025-12-26
categories: python numpy
description: "Hands-on practice with NumPy arrays, dimensions, indexing, slicing, reshaping, random values, and real-world problem solving."
---

## Hands-on

Day 19 focused on **hands-on practice with NumPy**, strengthening concepts through implementation rather than theory.  
The goal was to become comfortable working with arrays, dimensions, reshaping, filtering data, and generating random values.

---

## Creating NumPy Arrays with Different Data Types

```python
import numpy as np

a = np.array([1, 2, 3, 4, 6])
b = np.array([1, 2, 3, 4, 6], dtype=float)

print(a)
print(b)

NumPy arrays are homogeneous, meaning all elements are stored as the same data type.

Arrays with Different Dimensions
a0 = np.array(5)
a1 = np.array([1, 2, 3])
a2 = np.array([[1, 2, 3], [4, 5, 6]])
a3 = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])

| Array | Dimensions | Shape          |
| ----- | ---------- | -------------- |
| 0-D   | Scalar     | `()`           |
| 1-D   | Vector     | `(n,)`         |
| 2-D   | Matrix     | `(rows, cols)` |
| 3-D   | Tensor     | `(x, y, z)`    |

Identity Matrices
i2 = np.identity(2)
i3 = np.identity(3)
i4 = np.identity(4)
i49 = np.eye(4, 9)

print(i2)
print(i3)
print(i4)
print(i49)


identity() → square identity matrix

eye() → identity-like matrix with custom rows & columns

Using arange() and reshape()
arr1 = np.arange(10)
arr2 = np.arange(12).reshape(4, 3)
arr3 = np.arange(24).reshape(2, 3, 4)

print(arr1)
print(arr2)
print(arr3)


Reshaping works only if total elements remain the same.

Filtering Data Using Conditions
arr = np.array([1, 3, 2, 9, 25, 32, 78, 54, 4, 49, 39, 5, 12])
result = arr[arr >= 12]
print(result)


This is called Boolean indexing.

Replacing Values Using Conditions
arr[arr % 2 == 0] = 0
print(arr)


All even values are replaced with 0.

Creating Constant Matrices (Multiple Ways)
arr1 = np.zeros((3, 5), dtype=int) + 550
arr2 = np.ones((3, 5)) * 550
arr3 = np.full((3, 5), 550)

print(arr1)
print(arr2)
print(arr3)

Random Values and Dice Simulation
a = np.random.randint(1, 7)
print(a)

dice = [1, 2, 3, 4, 5, 6]
roll = np.random.choice(dice)
print(roll)


This simulates a Ludo dice roll using NumPy.

**Key Takeaways**

NumPy arrays are faster and memory-efficient

Indexing & slicing work across multiple dimensions

Boolean indexing enables clean data filtering

Reshaping is powerful but size-dependent

Random functions help in simulations & ML tasks
