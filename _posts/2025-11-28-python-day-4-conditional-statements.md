---
layout: post
title: "Python – Day 4: Conditional Statements, Nested Conditions, and Practical Examples"
date: 2025-11-28
categories: python
description: "Day 4 covers if, elif, else, nested conditions, indentation errors, even/odd checks, grade systems, voting eligibility, and practice problems."
---

## Introduction

Day 4 focused on conditional statements in Python — the foundation of decision-making in programs.  
We covered:

- `if`, `elif`, `else`
- Indentation rules  
- Nested conditions  
- Practical logic examples  
- Mini-projects using conditions  

---

## Basics of Conditional Statements

Conditional statements allow Python to check conditions and execute code accordingly.

```python
# if, elif, else
# indentation (proper spacing) is mandatory

**Example**: Comparing Two Numbers


a = int(input("Enter the num1: "))
b = int(input("Enter the num2: "))

if a > b:
    print("a is the greater number")

elif a == b:
    print("Both the values are equal")

else:
    print("b is the greater number")

"""
output:
Enter the num1: 45
Enter the num2: 56
b is greater
"""

**Indentation in Python**

Python is extremely strict about indentation.

Example of correct indentation:

print("hello")
print("hello")
print("hello")

Example causing an indentation error:

print("hello")
print("hello")
print("hello")
  print("hello")   # Error: unexpected indent

Error:

IndentationError: unexpected indent

Even or Odd Number Check:

num = int(input("Enter the number: "))

if num % 2 == 0:
    print("It is even")
else:
    print("odd")
"""
output: 567
odd
"""


Nested if Statements

A nested if is an if-statement inside another if-statement.

Example: Adult + Gender Classification
age = 9
gender = "Male"

if age >= 18:
    print("the person is an adult")

    if gender == "Male":
        print("It is an adult male")
    else:
        print("It is an adult female")

else:
    print("You are not an adult/minor")

"""
output:
13
You are not an adult/minor
"""


#Nested vs Independent Conditions

#Nested if → dependency

#elif chain → independent checks

Example in natural language:
“You can get a grade only if your attendance is valid.”

Student Grade System (Nested Condition)

Rules:

Attendance must be above 75

Then grade depends on marks

attendance = int(input())
marks = int(input())

if attendance > 75:
    if marks > 90:
        print("O")
    elif marks > 80:
        print("A")
    elif marks > 70:
        print("B")
    elif marks > 60:
        print("C")
else:
    print("not allowded")

Voting Eligibility in India

Conditions:

Age must be > 18

Must be a citizen of India

age = int(input())
country = input()

if country == "India":
    if age > 18:
        print("you can vote")
else:
    print("not allowded")
"""
output:
45
India
You can vote
"""



**Summary**

Day 4 introduced important logic-building blocks:

Understanding if, elif, and else

Proper indentation and avoiding errors

Using nested conditions

Real-world examples (grades, voting, parity check)

Practice problems to strengthen logical thinking







