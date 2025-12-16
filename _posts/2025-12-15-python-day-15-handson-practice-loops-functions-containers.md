---
layout: post
title: "Python – Day 15: Hands-on Practice (Loops, Functions, Containers & Calendar)"
date: 2025-12-15
categories: python
description: "Practical coding exercises covering loops, functions, lists, sets, duplicate handling, number logic, and calendar module."
---

# Hands-on Practice

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
print(count)

🔹 Even and Odd Count in a List

lst = [1,2,3,4,5,6,7,8,9,10,11]

def even_odd_count(lst):
    even = 0
    odd = 0
    for num in lst:
        if num % 2 == 0:
            even += 1
        else:
            odd += 1
    return even, odd

even_count, odd_count = even_odd_count(lst)
print("Even:", even_count)
print("Odd:", odd_count)


🔹 Removing Duplicate Elements from a List

Method 1: Using set (unordered)

numbers = [2,5,4,2,3,4,5,6,7,8]
unique_numbers = set(numbers)
print(unique_numbers)

Method 2: Preserving Order (Recommended)

def remove_duplicates(lst):
    unique = []
    for i in lst:
        if i not in unique:
            unique.append(i)
    return unique

numbers = [1,2,3,4,1,4,1,6]
print(remove_duplicates(numbers))

🔹 Membership Operators (in, not in)

numbers = [10,20,30,3,5,1,7]
print(100 in numbers)
print(100 not in numbers)

🔹 Armstrong Number Check (Concept)

Example:
153 → 1³ + 5³ + 3³ = 153 ✅

(Practice recommended as an exercise)

🔹 Perfect Number Check (Concept)

Example:
6 → factors = 1 + 2 + 3 = 6 ✅

9 → factors = 1 + 3 = 4 ❌

(Practice recommended)

🔹 Using Python Calendar Module

Printing a calendar month using built-in Python modules.

import calendar

year = int(input("Enter the year: "))
month = int(input("Enter the month: "))

cal = calendar.month(year, month)
print(cal)

**Key Takeaways**

Strengthened loop control using while and for

Improved function-based problem solving

Learned duplicate removal logic

Practiced container operations

Understood real-world utility modules like calendar

Focus shifted from syntax → thinking in logic

**📌 Practice Suggestions**


Write Armstrong & Perfect number programs

Reverse numbers using loops

Try recursion for factorial

Create menu-driven programs using loops
