---
layout: post
title: "Python – Day 8: Sets, Dictionaries, and Functions"
date: 2025-03-12
categories: python
description: "Day 8 covers Sets, Set operations, Dictionaries, key–value access, mutability, and function creation with return values."
---

## Introduction

Day 8 focused on understanding three core Python concepts:

- **Sets** → storing unique elements and performing mathematical set operations  
- **Dictionaries** → key–value data structures  
- **Functions** → reusable code blocks for modular programming  

These topics are essential for writing clean, optimized, and structured Python code.

---

# 1. Sets in Python

### Key Properties

- Stores **unique** values  
- **Unordered** (no indexing)  
- **Mutable** (can add or remove items)  
- Defined using **{ }**

### Example

```python

a = {10, 20, 20, "abc", "cde", 10, 5, 9, 9.5, 10.8}
a
Output contains unique items only.

Adding Elements:
a.add(1000)
a

a.add(1.5)
a


Removing elements:

a.remove(5)
a
remove() throws an error if the element does not exist.

pop() – Removes a random element
a.pop()
a

Since sets are unordered, pop() removes any element.

Set Operations


Union – combines elements from both sets
a = {1, 2, 3, 4, 5}
b = {10, 20, 30, 40, 50}
print(a.union(b))

Intersection – common elements

a = {1,4,7,9}
b = {2,4,9,10}
print(a.intersection(b))

2. Dictionaries in Python
Key Concepts

Stores data as key: value

Keys must be unique

Values can repeat

Ordered (Python 3.7+)

Example
players = {
    "Sehwag": 78,
    "Dhoni": 88,
    "Yuvraj": 93,
    "Virat": 105,
    "Rituraj": 100,
    "Messi": 98,
    "Ronaldo": 99,
    "Rohit": 264,
}
players


If duplicate keys exist, the latest one replaces previous values:

players = {
    "Virat": 105,
    "Virat": 300
}
players   # Output → {"Virat": 300}

Accessing Values with Keys
players["Yuvraj"]
players["Virat"]

Dictionary Methods
players.keys()
players.values()
players.items()

3. Functions in Python

A function is a reusable block of code that performs a specific task.

Defined using:

def function_name(parameters):
    # body

Example 1: Without return
def add(num1, num2, num3, num4):
    print(num1 + num2 + num3 + num4)

add(10, 29, 30, 25)

Example 2: With return value
def add(num1, num2, num3, num4):
    return num1 + num2 + num3 + num4

add(10, 29, 30, 25)


Using return makes the result reusable and more flexible.

Summary

Day 8 covered three essential core areas:

✔ Sets

Store unique values

Support union, intersection, add/remove

✔ Dictionaries

Key–value structure

Fast lookup using keys

Useful dictionary methods

✔ Functions

Help write clean, modular, reusable code

return vs print clarified

These concepts form the building blocks for upcoming lessons on loops, problem-solving, and algorithmic thinking.

