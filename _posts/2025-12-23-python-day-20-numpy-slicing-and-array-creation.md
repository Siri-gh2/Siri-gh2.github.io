---
layout: post
title: "Python – Day 20: NumPy Slicing and Array Creation Methods"
date: 2025-12-23
categories: python numpy
description: "Understanding NumPy slicing across dimensions and learning built-in methods to create structured arrays like zeros, ones, identity, and eye matrices."
---

## NumPy Slicing

Today’s session focused on **NumPy slicing techniques** and **special array creation methods**.  
These concepts are critical for efficient data manipulation, matrix operations, and scientific computing.

---

Slicing allows extracting **specific portions of arrays** without loops.  
The syntax follows:

array[start : stop : step]


---

** 1D Array Slicing**

```python
import numpy as np

arr = np.array([10, 20, 30, 40, 50])

arr[2:5]     # [30, 40, 50]
arr[1:7]     # Handles out-of-range safely


**2D Array Slicing**

arr = np.array([[1, 2, 3, 4],
                [5, 6, 7, 8]])

arr[0, 0:2]      # [1, 2]
arr[1, 0:3]      # [5, 6, 7]
arr[0:2, 1:3]    # [[2, 3], [6, 7]]
arr[1]           # Entire second row


**3D Array Slicing**
arr = np.array([
    [[3, 4, 8], [5, 6, 7]],
    [[30, 40, 10], [50, 60, 20]]
])

arr[0, 1, 0:2]       # [5, 6]
arr[0:2, 0, 0:2]    # [[3, 4], [30, 40]]
arr[0:2, 1]         # Sub-matrices

📌 Rule:
Always slice outer dimensions first, then inner ones.

Creating Special NumPy Arrays

NumPy provides efficient built-in functions to create structured arrays.

**Zeros Matrix**

np.zeros((3, 3), dtype="int")

Creates a matrix filled with 0.

**Ones Matrix**

np.ones((5, 2), dtype="int")

Creates a matrix filled with 1.

Full Matrix
np.full((2, 4), 550000)


Creates a matrix filled with a constant value.

 **Identity Matrix**

np.identity(6, dtype="int")


A square matrix with 1 on the main diagonal.

** Eye Matrix**

np.eye() allows non-square identity-like matrices.

np.eye(4)
np.eye(4, 7)
np.eye(2, 9)
np.eye(4, 7, dtype="int")

**Summary**

In this session, I learned:

NumPy slicing for 1D, 2D, and 3D arrays

Efficient data extraction without loops

Creating matrices using:

zeros

ones

full

identity

eye

How NumPy handles slicing safely and efficiently

These concepts are foundational for data science, machine learning, and numerical computing.

