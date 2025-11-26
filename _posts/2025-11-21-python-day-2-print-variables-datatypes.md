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

Case Sensitivity Example
print("hello")
Print("hello")    # Error: Python is case-sensitive


Error Output:

NameError: name 'Print' is not defined

Comments in Python

Comments help explain code and are ignored during execution.

Single-line comment
# This is a comment  
( we uae hastag for single line comment)

Multi-line comment
"""
This is a
multi-line comment
"""
(for multy line comment we use """[comment of multy lines] """)

**Variables in Python**

A variable is a name used to store a value in memory.

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

Must start with a letter or underscore (_)

Cannot start with a number

Case-sensitive (abc is different from ABC)

Cannot use Python keywords (if, for, while, etc.)

Cannot contain spaces

Cannot include special characters like @, #, %, $

Valid Examples
abc = 50
_name = "Siri"
a_1 = "value"
degmngjhabcnvjdsnvdjvvhv_jhnbsdjcnsdlkjncdlikcndslknc = 50

Invalid Examples
8ab = 200          # SyntaxError
ab@de = 59         # SyntaxError
my variable = 10   # SyntaxError due to space

**Data Types in Python**

Python automatically determines the type of the value stored.

Common Data Types

Integer

Float

String

Boolean

Complex

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

Invalid Complex Example
m = 10 + 2m        # SyntaxError


Only j is valid for imaginary numbers in Python.

**Summary**:

Day 2 covered essential Python fundamentals:

Using print() to display output

Understanding Python’s case sensitivity

Writing single-line and multi-line comments

Declaring and naming variables correctly

Identifying Python’s basic data types
