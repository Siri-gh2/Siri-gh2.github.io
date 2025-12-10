---
layout: post
title: "Python – Day 11: OOP Concepts – The Four Pillars (Part 1: Encapsulation)"
date: 2025-12-09
categories: python
description: "Understanding Encapsulation, Access Modifiers, Getter & Setter methods, and real-world OOP modeling."
---

## OOPS Day-2

Today marks the beginning of exploring **Object-Oriented Programming (OOP)** in Python.  
OOP helps in writing structured, reusable, secure, and scalable code.  
We started with the **first pillar: Encapsulation**, along with key ideas like access modifiers and getter–setter methods.

---

## 🔹 What is Encapsulation?

Encapsulation means **binding data (variables) and methods (functions)** inside a single unit → the **class**.

It also protects data using **Access Modifiers**.

---

## 🔹 Access Modifiers in Python

| Modifier | Meaning | Syntax Example |
|---------|---------|----------------|
| **Public** | Accessible everywhere | `self.name` |
| **Protected** | Accessible within class + subclasses | `self._value` |
| **Private** | Accessible only inside class | `self.__score` |

Python doesn’t enforce strict access control like Java/C++ but follows naming conventions.

---

## 🔹 Example: Public vs Private Attributes

```python
class Student:
    def __init__(self):
        self.name = "Amit"      # Public attribute
        self.__score = 10       # Private attribute

st = Student()
print(st.name)      # Works
print(st.__score)   # ❌ Error: private attribute cannot be accessed

Getter & Setter Methods

Since private variables cannot be accessed or modified directly, Python uses getter and setter functions.

🔹 Getter Example (Accessing Private Data)
class Person:
    def __init__(self, name, job):
        self.name = name
        self.__job = job

    def getter(self):
        print("The job is:", self.__job)

p = Person("Yashwanth", "Data Analyst")
print(p.name)
p.getter()


🔹 Setter Example (Modifying Private Data)
class Person:
    def __init__(self, name, job):
        self.name = name
        self.__job = job

    def getter(self):
        print("The job is:", self.__job)

    def setter(self, new_job):
        self.__job = new_job

p = Person("Yashwanth", "Data Analyst")
p.getter()
p.setter("Data Scientist")
p.getter()

Private data becomes editable only through setter methods, ensuring controlled modification.

🔹 Small Utility Example – Reverse a Number
def reverse(num):
    result = 0
    while num > 0:
        digit = num % 10
        result = result * 10 + digit
        num //= 10
    return result

reverse(2345)   # Output: 5432

This was practiced to understand logic-building inside functions.

**Summary**:

Understood Encapsulation

Learned about public, protected, private attributes

Implemented getter & setter methods

Practiced writing reusable functions

Prepared the ground for Inheritance (next OOP pillar)
