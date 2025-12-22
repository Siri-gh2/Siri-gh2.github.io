---
layout: post
title: "Python – Day 19: NumPy Basics – Arrays, Dimensions, and Indexing"
date: 2025-12-22
categories: python numpy
description: "Introduction to NumPy: why it is faster than lists, array creation, dimensions (0D–3D), indexing, and slicing with examples."
---

# NumPy Basics

Today’s session introduced **NumPy (Numerical Python)** — a powerful Python library used for **numerical computation, data analysis, and scientific computing**.  
NumPy forms the foundation for libraries like **Pandas, SciPy, TensorFlow, and PyTorch**.

---

## What is NumPy?

NumPy is a library designed for:

- Fast numerical calculations
- Efficient memory usage
- Handling large datasets
- Working with multi-dimensional arrays

### Why NumPy over Python Lists?

|       Python List               |            NumPy Array              |
|---------------------------------|-------------------------------------|
| Stores mixed data types         | Stores homogeneous data             |
| Slower execution                | Very fast (C-based implementation)  |
| High memory usage               | Memory efficient                    |
| No direct arithmetic operations | Supports vectorized operations      |

---

## 🔹 Creating a NumPy Array

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])

Even if you pass mixed data types, NumPy converts them into a single dominant type

Priority Order:
String > Float > Integer > Boolean

Example:

arr = np.array([1, 2, 3, True])
print(arr)

🔹 NumPy Array Type
type(arr)

Output:
<class 'numpy.ndarray'>

ndarray stands for n-dimensional array.

🔹 Dimensions in NumPy
0-D Array (Scalar)

zero_arr = np.array(30)
zero_arr.ndim

1-D Array
one_arr = np.array([1, 2, 3, 4, 5])
one_arr.ndim

2-D Array
two_arr = np.array([[1, 2, 3], [4, 5, 6]])
two_arr.ndim

3-D Array
three_arr = np.array([
    [[10,20,30,40],[1,2,3,4]],
    [[11,21,31,41],[14,24,34,44]],
    [[110,210,310,410],[140,240,340,440]]
])

three_arr.ndim

🔹 Indexing in NumPy
1-D Indexing
arr = np.array([10, 20, 30, 40, 50])
print(arr[2])

2-D Indexing
arr = np.array([[1,2,3,4],
                [5,6,7,8]])

print(arr[0,3])
print(arr[1,2])

3-D Indexing
# Target: 310
print(three_arr[2,0,2])

# Target: 44
print(three_arr[1,1,3])

🔹 Slicing in NumPy
1-D Slicing
arr = np.array([10,20,30,40,50])
print(arr[2:5])

2-D Access Example
arr2 = np.array([[1, 2, 3],
                 [4, 5]])

print(arr2[0,0], arr2[0,1], arr2[1,0], arr2[1,1])

 **Key Takeaways**
NumPy arrays are faster and memory-efficient

Supports multi-dimensional data

Indexing works differently for 1D, 2D, and 3D arrays

NumPy is essential for data science and machine learning

Lists are flexible, NumPy arrays are powerful
