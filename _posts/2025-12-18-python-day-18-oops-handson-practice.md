---
layout: post
title: "Python – Day 18: OOP Hands-On Practice (Login System & Class Design)"
date: 2025-12-18
categories: python oops
description: "Hands-on OOP practice using classes, encapsulation, and a login authentication system with attempt tracking."
---

## 📌 Overview

This session focused on **practical Object-Oriented Programming (OOP)** using Python.  
Instead of theory, the emphasis was on **writing working classes**, understanding **relationships between them**, and applying concepts to **real-world problems**.

Topics covered:
- Inheritance (Single & Multiple)
- Encapsulation
- `super()` usage
- Real-world modeling
- Login system with state control

---

## 🧍 Base Class: Person

We start with a simple base class that stores common attributes.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

This class acts as a parent for other roles.

🎓 Student Class (Inheritance)

The Student class inherits from Person and adds a new attribute.

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

✔ Demonstrates single inheritance
✔ Uses super() to reuse parent constructor

Teacher Class (Inheritance)

Another child class of Person.

class Teacher(Person):
    def __init__(self, name, age, teacher_name):
        super().__init__(name, age)
        self.teacher_name = teacher_name
Clerk Class (Multiple Inheritance)

The Clerk class inherits from both Student and Teacher, forming multiple inheritance.

class Clerk(Student, Teacher):
    def __init__(self, name, age, student_id, teacher_name, salary):
        Student.__init__(self, name, age, student_id)
        Teacher.__init__(self, name, age, teacher_name)
        self.salary = salary

Object Creation & Output:
obj = Clerk("Raju", 21, 31248, "Naveen", 70000)

print("Name:", obj.name)
print("Age:", obj.age)
print("Student ID:", obj.student_id)
print("Teacher Name:", obj.teacher_name)
print("Salary:", obj.salary)

✔ Shows hybrid inheritance behavior
✔ Attributes resolved correctly from multiple parents

Encapsulation Example: Login System

A realistic example that uses:

Private state

Conditional logic

Object state control

🔹 Login Class

class Login:
    def __init__(self):
        self.attempts = 0
        self.locked = False

🔹 Authentication Logic

    def authenticate(self, username, password):
        if self.locked:
            print("Account is locked")
            return

        if username == "admin" and password == "123456":
            print("Login success")
            self.attempts = 0
        else:
            self.attempts += 1
            print("Wrong credentials")

            if self.attempts >= 3:
                self.locked = True
                print("Account locked due to 3 wrong attempts")

🔹 Execution Flow

login = Login()

login.authenticate("admin", "111")
login.authenticate("admin", "222")
login.authenticate("admin", "333")
login.authenticate("admin", "123456")


✔ What This Demonstrates

State persistence inside objects

Security logic using counters

Encapsulation of authentication behavior


🧠 Key Takeaways

Inheritance helps reuse and extend behavior

super() prevents code duplication

Multiple inheritance must be handled carefully

Encapsulation keeps logic safe and controlled

OOP shines when modeling real-world systems



