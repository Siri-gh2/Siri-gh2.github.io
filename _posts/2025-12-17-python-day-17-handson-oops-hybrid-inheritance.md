---
layout: post
title: "Python – Day 17: Hands-on OOP Practice (Hybrid Inheritance)"
date: 2025-12-13
categories: python
description: "Hands-on practice with Object-Oriented Programming in Python, focusing on Hybrid Inheritance using real-world class relationships."
---

## Hands-On

Day 17 focused on **hands-on Object-Oriented Programming (OOP)** practice.  
The goal was not theory, but **implementing complex inheritance structures** to clearly understand how Python handles multiple parent classes and shared attributes.

This session specifically covered **Hybrid Inheritance**, which is a combination of:
- Single inheritance
- Multiple inheritance
- Hierarchical inheritance

---

## 🔹 What is Hybrid Inheritance?

Hybrid inheritance is a mix of **two or more types of inheritance**.

In real-world systems, entities often inherit features from multiple sources.  
Python supports this using **multiple inheritance**, handled carefully with constructors.

---

## 🔹 Problem Statement

Design a system with the following relationships:

- `Person` → base class  
- `Student` and `Teacher` → inherit from `Person`  
- `Clerk` → inherits from **both Student and Teacher**

This structure demonstrates **Hybrid Inheritance**.

---

## 🔹 Class Design

### Base Class: Person

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

Child Class: Student

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

Child Class: Teacher

class Teacher(Person):
    def __init__(self, name, age, teacher_name):
        super().__init__(name, age)
        self.teacher_name = teacher_name

Hybrid Child Class: Clerk

(Inherits from both Student and Teacher)

class Clerk(Student, Teacher):
    def __init__(self, name, age, student_id, teacher_name, salary):
        Student.__init__(self, name, age, student_id)
        Teacher.__init__(self, name, age, teacher_name)
        self.salary = salary

🔹 Object Creation & Output

obj = Clerk("Raju", 21, 31248, "Naveen", 70000)

print("Name:", obj.name)
print("Age:", obj.age)
print("Student ID:", obj.student_id)
print("Teacher Name:", obj.teacher_name)
print("Salary:", obj.salary)

Output:

Name: Raju
Age: 21
Student ID: 31248
Teacher Name: Naveen
Salary: 70000

🔹 **Key Concepts Reinforced**

Hybrid inheritance structure

Constructor chaining across multiple parent classes

Proper use of super() vs direct parent calls

Attribute resolution in multiple inheritance

Real-world modeling using OOP

🧠 What I Learned

Hybrid inheritance requires explicit constructor calls

Order of inheritance matters

Python allows flexibility but expects clarity

Complex class systems are manageable with clean design

**Summary**

This session strengthened practical OOP understanding by building a realistic inheritance hierarchy.
Hybrid inheritance is powerful but should be used thoughtfully to avoid confusion.
