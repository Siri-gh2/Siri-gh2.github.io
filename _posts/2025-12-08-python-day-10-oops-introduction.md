---
layout: post
title: "Python – Day 10: Introduction to OOPS (Object-Oriented Programming)"
date: 2025-12-08
categories: python
description: "Understanding the fundamentals of Object-Oriented Programming — classes, objects, attributes, methods, constructors, and hands-on examples."
---

## OOPS Day-1

Today’s session introduced the basics of **Object-Oriented Programming (OOPS)** in Python.  
OOPS helps organize complex programs into simple, reusable, logical components.

---

# 🔹 What is OOPS?

Object-Oriented Programming is a paradigm that focuses on:

- Organizing complex code into structured components  
- Increasing reusability  
- Making large programs easy to modify and maintain  

### OOPS revolves around two main concepts:

### **1. Class**  
A class is a *blueprint* or *template* for creating objects.  
It defines the structure and behavior (attributes + methods).

### **2. Object**  
An object is an *instance* of a class — a real-world entity created from the class.

---

# 🔹 Real-Life Examples of OOPS

### **Class: Animal**  
**Objects:** Lion, Dog, Tiger  
**Attributes:** color, size, food type  
**Methods:** eat(), sleep(), run()

### **Class: Car**  
**Objects:** BMW, Fortuner, Tata  
**Attributes:** color, model, price  
**Methods:** start(), stop(), accelerate()

---

# 🔹 Creating a Simple Class and Object

```python
class Car:
    def display(self):
        print("This is my Car")

a = Car()       # Object creation
a.display()     # Calling method using object


Understanding **self** and Constructors **__init__**

self refers to the object itself

__init__() is the constructor, called automatically when an object is created
**__init__ → Constructor**

Special method that automatically runs when an object is created.

Used to initialize the object’s attributes.

Runs only once per object.

Its job is setup.

**self → Reference to the current object**

self always refers to the object calling the method.

Used to access variables and methods belonging to the object.

Must be the first parameter in every instance method.

Its job is access.

Example:

class Car:
    def __init__(self, name, color, model, price):
        self.name = name
        self.color = color
        self.model = model
        self.price = price

    def dis(self):
        print("My car is", self.name, "of", self.color, "color")
        print("It is the", self.model, "model priced at", self.price)

a = Car("Thar", "Black", 2024, 140000000)
b = Car("Fortuner", "White", 2021, 500000000)

a.dis()
b.dis()

Example: Animal Class
class animal:
    def __init__(self, name, age, region, typ):
        self.name = name
        self.age = age
        self.region = region
        self.typ = typ

    def display(self):
        print("The", self.name, "is", self.typ, "& is found in", self.region)
        print("The", self.name, "age is", self.age)

a = animal("Lion", 20, "Africa", "Carnivore")
b = animal("Bengal Tiger", 30, "India", "Carnivore")

a.display()
b.display()

Example: Pet Class
class pet:
    def __init__(self, name, color, softness, skill):
        self.name = name
        self.color = color
        self.softness = softness
        self.skill = skill

    def dis(self):
        print("My pet is", self.name, "of", self.color, "color")
        print("Softness:", self.softness, "| Fighting Skill:", self.skill)

a = pet("Blacky", "Black", "soft", "lion-type")
b = pet("White Cat", "White", "smooth", "tiger-type")

a.dis()
b.dis()


Example: Another Animal Class Version
class animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def dis(self):
        print("This is", self.name, "aged", self.age)
        print("Color:", self.color)

a = animal("Alita", 5, "black")
b = animal("Dog", 2, "white")

a.dis()
b.dis()


Summary:

Today’s OOPS learning covered:

What OOPS is

Why OOPS is used

Class and Object basics

Using attributes and methods

Using constructors (__init__)

Creating multiple real-world examples

The next step will be learning the 4 Pillars of OOPS:

1.Encapsulation

2.Inheritance

3.Polymorphism

4.Abstraction


