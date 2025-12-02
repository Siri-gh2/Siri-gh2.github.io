---
layout: post
title: "Python – Day 7: List Indexing, Slicing, Methods & Tuples"
date: 2025-12-02
categories: python
description: "Day 7 goes deeper into list indexing and slicing (including step sizes and negative indices), common list methods (append, insert, pop, remove, count), and an introduction to tuples."
---

## Introduction

Day 7 focused on working with **sequences** in Python — mostly lists — and learning how to extract parts of them using *indexing* and *slicing*. We also covered important list methods and introduced tuples (immutable sequences).

Notes and examples are taken from my Colab notebook. :contentReference[oaicite:0]{index=0}

---

## 1 — Example sequence

We start with a mixed list used throughout the examples:

```python
a = [1,2,3,4,5,6,7,"abc","def",True,700,890.5,6,2,3,4.6,2,2,2]

This list contains integers, floats, strings and booleans — a good demo of how lists hold heterogeneous data.


2 — Indexing

Positive index: starts at 0.
a[0] → 1, a[1] → 2, etc.

Negative index: -1 is the last element, -2 the second last, and so on.
a[-1] → 2 (the last element in the example list)
a[-6:] → returns the last 6 elements.

3 — Slicing (start:stop)

Slicing takes a continuous range of elements. The slice a[start:stop] returns elements from index start up to but not including stop (stop - 1).

Examples:

a[2:9]    # elements at indexes 2..8
a[:5]     # first 5 elements (index 0..4)
a[5:]     # from index 5 to end
a[:]      # whole copy of the list


If start >= stop the result is an empty list:

a[10:4]   # empty, because start > stop

4 — Slicing with step (start:stop:step)

You can add a third parameter to control the step size.

a[0:10:3]   # every 3rd element from index 0 to 9
a[2:12:5]   # every 5th element from index 2 to 11
a[2::3]     # from index 2 to end, step 3


Reverse list using slicing:
a[::-1]     # returns a new list that is the reverse of a

Examples :

a[::-2]     # reverse but take every 2nd element
a[2:5]      # normal slice of a small window

5 — More slice behaviour with negatives

Negative indices also work inside slices:

a[-1:]      # last element as a list
a[-6:]      # last 6 elements
a[-7:-2]    # from -7 up to -3 index (stop is -2, exclusive)
a[-10:-5]   # another negative range

Remember: slice end is exclusive, whether you use positive or negative indices.

6— List methods (common and useful)

Python lists have many built-in methods. Here are the ones we practiced, with short examples.

append(value)

Add an element at the end of the list.

b = [1,2,3,4,"abc"]
b.append("Siri")
# b -> [1,2,3,4,"abc","Siri"]


insert(index, value)

Insert value at a specific index (shifts subsequent elements to the right).

b.insert(2, "rest")
# insert "rest" at index 2

pop([index])

Remove and return the element at index. If no index given, removes the last item.

b.pop()     # removes last element
b.pop(2)    # removes element at index 2


remove(value)

Remove the first occurrence of value from the list.

b.remove("abc")

count(value)

Count how many times value appears.

b.count(2)   # returns the number of times 2 appears

Other commonly used methods (mentioned in the notes): extend, copy, sort, reverse, max, min, sum (where applicable to numeric lists).


7 — Tuples (immutable sequences)

A tuple is like a list but immutable — once created, its items cannot be changed.
a = (1,2,3,4,5,6,6,"abc",True)
print(type(a))   # <class 'tuple'>

Trying to assign to an index raises an error:a[2] = 100   # TypeError: 'tuple' object does not support item assignment
a[2] = 100   # TypeError: 'tuple' object does not support item assignment

Use tuples when you need an ordered sequence that should not be modified.


Quick tips & gotchas

Slicing returns a new list — it does not modify the original list.

Indexing out of range raises IndexError. Use slicing or check len() to avoid this.

a[::-1] is an idiomatic, fast way to reverse a list for iteration or to obtain a reversed copy.

Many list methods (append, insert, remove, pop) modify the list in-place and return None.

Summary

Day 7 covered:

Indexing and advanced slicing (including step size and negative indices)

Reversing sequences with slicing

Core list methods: append, insert, pop, remove, count, and more

Tuples as immutable ordered containers

These operations are fundamental for manipulating sequence data and solving typical programming problems efficiently. The examples above were taken directly from the session notebook.



