---
layout: post
title: "Python – Day 2: Printing, Comments, Variables, and Data Types"
date: 2025-11-21
categories: python
description: "Day 2 covers print statements, case sensitivity, comments, variable rules, and core Python data types with examples and errors."
---

## Introduction

Day 2 focused on the fundamental building blocks of writing and understanding Python code. The session covered how to display output, how Python treats uppercase and lowercase differently, how comments work, how variables are created, and how basic data types behave. These basics form the foundation for writing any meaningful Python program.

---

## Printing Output in Python

Python uses the `print()` function to display output.

### Example:

```python
print("Hello! to everyone out there")
print("Google Colab")

Python is an interpreted language, which means it executes code line by line.

**Case Sensitivity Example**
print("hello")
Print("hello")    # This will cause an error because Python is case-sensitive


Error example:

NameError: name 'Print' is not defined

**Comments in Python**

Comments help describe code and are ignored during execution.

Single-line comment
# This is a comment

Multi-line comment
"""
This is a
multi-line comment
"""

**Variables in Python**

A variable is a name used to store a value.

Example:
x = 10
y = 20
print(x + y)        # 30


Another example:

x = 10
y = 20
sum = x + y

print(sum)                         # 30
print("Sum of both values is:", sum)

**Rules for Naming Variables**

1.Must start with a letter or underscore (_)

2.Cannot start with a number

3.Case-sensitive (abc is different from ABC)

4.Cannot use Python keywords (if, for, while, etc.)

5.Cannot contain spaces

6.Cannot contain special characters like @, #, %, $

Valid examples:
abc = 50
_name = "Siri"
a_1 = "value"
degmngjhabcnvjdsnvdjvvhv_jhnbsdjcnsdlkjncdlikcndslknc = 50

Invalid examples:
8ab = 200          # SyntaxError
ab@de = 59         # SyntaxError
my variable = 10   # SyntaxError due to space

**Data Types in Python**

Python automatically detects the type of value stored.

Common data types:
1.Integer
2.Float
3.String
4.Boolean
5.Complex

Examples
a = 100
type(a)        # int

b = 5.5
type(b)        # float

c = "Amit"
type(c)        # str

e = True
type(e)        # bool

h = 5 + 9j
type(h)        # complex

Invalid complex example
m = 10 + 2m        # SyntaxError

#Only j is allowed for imaginary numbers in complex numbers.


**Summary**:

Day 2 covered essential Python concepts:
Using print() to display output
Understanding Python’s case sensitivity
Writing single-line and multi-line comments
Declaring and naming variables correctly
Identifying basic data types
