---
layout: post
title: "Python – Day 6: Loops, Break & Continue, and Data Containers"
date: 2025-12-01
categories: python
description: "Day 6 covers for and while loops, jump statements, and Python’s primary data containers with indexing examples."
---

# Python – Day 6: Loops, Break/Continue, and Data Containers

Today’s session focused on **iteration**, **jump statements**, and the **core container data types** in Python. These concepts are essential for controlling program flow and organizing data efficiently.  
Content taken from my notebook. :contentReference[oaicite:1]{index=1}

---

## 1. Loops in Python

Loops allow repeating a block of code multiple times.

Python supports:

- **for loop** → used when the number of iterations is known  
- **while loop** → runs until a condition becomes False  

---

## 1.1 For Loop

### Example: Print numbers from 1 to 10

```python
for i in range(1, 11):
    print(i)
```

### Example: Understanding `range()`

```python
for i in range(0, 12):  # Ends at 11
    print(i)
```

### Example: Decrease by steps

```python
for i in range(10, 1, -2):
    print(i)
```

---

## 1.2 While Loop

Used when the number of iterations is not fixed.

### Example: Sum of numbers 2–11

```python
sum = 0
i = 2
while i <= 11:
    sum += i
    i += 1
print("Sum:", sum)
```

### Example: Product of numbers 5–15

```python
p = 1
i = 5
while i <= 15:
    p *= i
    i += 1
print(p)
```

---

## 2. Break & Continue (Jump Statements)

Jump statements interrupt or skip loop executions.

### **Break** – exits the loop entirely  
### **Continue** – skips the current iteration

### Example (skip 4):

```python
for i in range(1, 11):
    if i == 4:
        continue
    print(i)
```

### Example (skip 6):

```python
for i in range(1, 11):
    if i == 6:
        continue
    print(i)
```

---

# 3. Data Containers (Sequential Data Types)

Python provides several container-like data types:

- **List**
- **Tuple**
- **Set**
- **Dictionary**

Today’s class covered **Lists**.

---

# 3.1 Lists

A Python list:

- Stores **heterogeneous** values  
- Is **ordered**  
- Is **mutable** (can be changed)  
- Allows **duplicates**  
- Uses square brackets `[ ]`

### Example:

```python
a = [1, 2, 3, 4.5, 5, 8.9, "an", "gh", True]
```

```python
print(type(a))
```

---

## Indexing in Lists

### Positive indexing (from front)

```
Index: 0   1   2   3   4   ...
Value: 1   2   3  4.5  5 
```

### Negative indexing (from back)

```
Index: -1   -2   -3   ...
Value: True  "gh"  "an"
```

### Examples:

```python
a[4]      # Access 5th element
a[-5]     # Access from back
```

### Length of list:

```python
len(a)
```

---

# Summary

Day 6 strengthened three core skills:

### ✔ Looping  
Understanding `for`, `while`, ranges, counters, summation, and products.

### ✔ Jump Logic  
Using `break` and `continue` effectively to control flow.

### ✔ Containers (Lists)  
Creating lists, indexing, negative indexing, and understanding mutability.

These fundamentals prepare the ground for upcoming topics like **tuples, sets, dictionaries**, and **loop-based problem solving**.

---

