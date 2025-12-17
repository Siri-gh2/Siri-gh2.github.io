---
layout: post
title: "Python – Day 16: Hands-On Practice & Abstraction (Real-World Modeling)"
date: 2025-12-16
categories: python
description: "Hands-on practice with loops, lists, functions, OOP modeling, and a practical introduction to abstraction using real-world examples."
---

## Hands-On Practice & Abstraction

Today’s session was **practice-heavy**, focusing on applying Python fundamentals and OOP concepts to real problems.  
The highlight of the day was **Abstraction**, implemented through real-world system design examples.

---

## 🔹 Part 1: Hands-On Practice (Logic Building)

### ✔ Counting Digits in a Number

```python
num = int(input("Enter a number: "))
count = 0
while num != 0:
    num //= 10
    count += 1
print(count)

✔ Counting Even & Odd Numbers in a List

lst = [1,2,3,4,5,6,7,8,9,10]

def even_odd_count(lst):
    even = odd = 0
    for num in lst:
        if num % 2 == 0:
            even += 1
        else:
            odd += 1
    return even, odd

even_odd_count(lst)


✔ Removing Duplicate Elements from a List

numbers = [1,2,3,2,4,5,1,6]
unique = []

for num in numbers:
    if num not in unique:
        unique.append(num)

print(unique)


  ✔ Printing Monthly Calendar

import calendar

year = int(input("Enter the year: "))
month = int(input("Enter the month: "))

print(calendar.month(year, month))

**OOP Hands-On – Student Class**

✔ Student Result System

class Student:
    def __init__(self, name, m1, m2, m3):
        self.name = name
        self.m1 = m1
        self.m2 = m2
        self.m3 = m3

    def total_marks(self):
        return self.m1 + self.m2 + self.m3

    def percentage(self):
        return self.total_marks() / 3

    def result(self):
        print("Name:", self.name)
        print("Total Marks:", self.total_marks())
        print("Percentage:", self.percentage(), "%")
        print("Result:", "PASS" if self.percentage() > 33 else "FAIL")


**Abstraction – Concept & Need**

✔ What is Abstraction?

Abstraction hides implementation details and shows only essential behavior to the user.

📌 Example:
You don’t know how an ATM works internally — you only use its interface.

Abstract Class vs Concrete Class

| Term               | Meaning                           |
| ------------------ | --------------------------------- |
| **Abstract Class** | Blueprint with incomplete methods |
| **Concrete Class** | Implements all abstract methods   |

**
Abstraction Using abc Module**

Ride Booking System (Real-World Example)
Abstract Class
from abc import ABC, abstractmethod

class RideBooking(ABC):
    @abstractmethod
    def calculate_fare(self, distance):
        pass

Concrete Classes
class BikeRide(RideBooking):
    def calculate_fare(self, distance):
        print("Calculated Fare:", distance * 10)

class CarRide(RideBooking):
    def calculate_fare(self, distance):
        print("Calculated Fare:", distance * 20)

Usage:

bike = BikeRide()
car = CarRide()

distance = int(input("Enter distance: "))
bike.calculate_fare(distance)
car.calculate_fare(distance)



🧠 **Key Learnings Today**

✔ Strengthened loop logic
✔ Practiced list manipulation
✔ Improved function-based problem solving
✔ Designed real-world OOP models
✔ Understood abstraction through interfaces
✔ Applied abstract & concrete classes properly

📝 **Reflection**

Today’s session shifted focus from syntax to thinking like a programmer:

Writing reusable logic

Separating what from how

Designing clean systems using abstraction

This prepares the ground for advanced system design and clean architecture in Python.
