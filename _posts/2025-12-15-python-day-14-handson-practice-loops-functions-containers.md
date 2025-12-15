---
layout: post
title: "Python – Day 14: Hands-on Practice (Loops, Functions, Containers & Calendar)"
date: 2025-12-15
categories: python
description: "Practical coding exercises covering loops, functions, lists, sets, duplicate handling, number logic, and calendar module."
---

# Python – Day 14: Hands-on Practice

This session focused entirely on **hands-on coding practice** to strengthen Python fundamentals through real problem-solving.  
The goal was to apply concepts learned earlier — not theory, but **logic, loops, functions, and containers**.

---

## 🔹 Counting Digits in a Number

**Problem:** Count how many digits are present in a number.

```python
num = int(input("Enter a number: "))
count = 0

while num != 0:
    num //= 10
    count += 1

🔹 Even and Odd Count in a List


print(count)
