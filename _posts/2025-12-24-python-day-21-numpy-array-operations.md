---
layout: post
title: "Python – Day 21: NumPy Array Operations and Utilities"
date: 2025-12-24
categories: python numpy
description: " NumPy arrays covering dimensions, shape, reshape, random values, slicing, arithmetic operations, and sorting."
---

## NumPy array operations

Day 18 focused on practical usage of **NumPy**, a core Python library for numerical computation.  
The session explored how NumPy arrays work internally, how they differ from Python lists, and how to efficiently perform operations like reshaping, random generation, arithmetic, and sorting.

---

## Creating NumPy Arrays

```python
import numpy as np

arr = np.array([[1,2,3,4],[5,6,7,8]])
NumPy arrays store data in contiguous memory blocks, making them faster and more memory-efficient than Python lists.

Dimensions and Shape
arr.ndim
arr.shape


ndim → number of dimensions

shape → rows × columns

Example:

(2, 4)

Reshaping Arrays

Reshape allows changing array dimensions without changing data.

arr.reshape(1,8)
arr.reshape(4,2)
arr.reshape(2,2,2)


⚠️ Total elements must remain the same.

Working with Multi-Dimensional Arrays
arr1 = np.array([[[3,4,8],[5,6,7]],[[30,40,10],[50,60,20]]])
arr1.shape


This represents:

2 big blocks

Each with 2 sub-blocks

Each sub-block with 3 elements

Random Number Generation
x = np.random.randint(1,101)
x = np.random.randint(1,101, size=20)


Fixing randomness:

np.random.seed(0)
x = np.random.randint(1,101, size=20)


Random floats:

a = np.random.random((2,3))

Range-Based Array Creation
arange
np.arange(0,21)
np.arange(0,21,2)
np.arange(10,51,5)

linspace
np.linspace(0,9, num=3)
np.linspace(0,100, num=5)


Generates evenly spaced values.

Arithmetic Operations on Arrays
a = np.array([1,2])
b = np.array([4,6])

print(a+b)
print(a-b)
print(a*b)
print(a/b)
print(a//b)
print(a**b)


NumPy supports vectorized operations, meaning no loops are required.

Aggregation Functions
a = np.array([1,2,3,4,5])

np.sum(a)
np.mean(a)
np.max(a)


These operations are optimized and fast.

Sorting Arrays
arr = np.array([1,200,100,54,67,49,69,46,32])
a = np.sort(arr)


Descending order:

arr_new = np.sort(a)[::-1]
arr_new

Key Takeaways

NumPy arrays are faster and memory-efficient

Shape and dimension control how data is interpreted

Reshaping enables flexible data transformations

Built-in vectorized operations eliminate loops

Sorting and aggregation are simple and powerful

This session strengthened understanding of numerical data handling, a critical skill for data science, machine learning, and scientific computing.
