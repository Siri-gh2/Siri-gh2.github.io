---
layout: post
title: "Python – Day 3: User Input, Type Casting, and Operators"
date: 2025-11-27
categories: python
description: "Day 3 covers user input, data type conversion, boolean casting, arithmetic operators, comparison operators, assignment operators, and logical operators with examples."
---

## Introduction

Day 3 focused on interactive Python programming using user input, type conversion, and understanding how Python evaluates operators. This included dynamic user inputs, type casting, boolean conversion rules, and all major operator categories such as arithmetic, comparison, assignment, and logical operators.

---

## User Input in Python

### Static (traditional) assignment

```python
name = "Sakshi"
name

'Sakhi'

Dynamic Input using input()
name = input("Enter the name: ")
name


All values from input() are strings by default.

age = input("Enter the age: ")   # default dtype = string
age

Checking Data Types
type(name)
type(age)


You can explicitly convert input into specific types:

name = str(input("Enter the name: "))
age = int(input("Enter the age: "))


Check the data types again:

type(name)
type(age)

**Type Casting**

Type casting converts one data type into another.

Example: string → integer
a = "1000"
b = int(a)

type(a)   # str
type(b)   # int

**Boolean Conversion Rules**

Empty values convert to False

Non-empty values convert to True

Examples:
a = bool(100)   # True
b = bool("")    # False
c = bool(0)     # False
d = bool(1)     # True
e = bool(" ")   # True

**Operators in Python**

Python supports multiple operator categories:
Arithmetic, Comparison, Assignment, Logical.

Arithmetic Operators
a = 10
b = 6

print("a+b:", a+b)
print("a-b:", a-b)
print("a*b:", a*b)
print("a/b:", a/b)
print("a//b:", a//b)   # Floor division (integer part only)
print("a%b:", a%b)     # Modulus (remainder)
print("a**b:", a**b)   # Exponential (power)


Another example:

x = 90
y = 5
print(x % y)

**Comparison Operators**

They return True or False.

num1 = 100
num2 = 50

print("num1>num2:", num1>num2)
print("num1<num2:", num1<num2)
print("num1==num2:", num1==num2)   # equal to
print("num1!=num2:", num1!=num2)   # not equal to
print("num1>=num2:", num1>=num2)
print("num1<=num2:", num1<=num2)


More examples:

a = 500
b = 500
print(a >= b)

a = 600
b = 500
print(a <= b)

Assignment Operators
a = 50
a


Updating the value using assignment shorthand:

a += 30     # a = a + 30
a += 100
a -= 60
a *= 5


Example:

n = 0
n += 60
n


Another example:

g = 16
g += 100

f = 50
print(f + g)


More shorthand examples:

a = 50
a += 100
a += 30
a

**Logical Operators**

AND → True only if both conditions are True

OR → True if any one condition is True

NOT → reverses the boolean value

Examples:
print(True and False)     # 0
print(True and True)      # 1

print(True or False)      # True
print(not True)           # False
print(not False)          # True


Boolean interpretation:

True → 1

False → 0

**Summary**

Day 3 covered essential interactive and logical programming concepts:

Static and dynamic user inputs

Default data type of input()

Type casting and conversions

Boolean evaluation rules

Arithmetic, comparison, assignment, and logical operators

Practical code examples for each operator category
