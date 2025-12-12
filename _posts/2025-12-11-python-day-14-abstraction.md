---
layout: post
title: "Python – Day 14: OOP Concepts – Abstraction"
date: 2025-12-11
categories: python
description: "Understanding Abstraction in Python OOP using ABC module, abstract classes, abstract methods, and real-world examples."
---

# OOPs Day-4(Abstraction)

Today’s session covered the **fourth pillar of OOP — Abstraction**.  
Abstraction helps us hide internal implementation details and show only what is necessary to the user.  
Python supports abstraction using **abstract classes** and **abstract methods** from the **ABC module**.

---

## 🔹 What Is Abstraction?

Abstraction means:

- Hiding complex internal logic  
- Exposing only the essential parts  
- Keeping code clean, secure, and manageable  

Example:  
When you drive a car, you only use the **accelerator**, **brakes**, **steering** —  
you don't care how the engine works internally.

In Python, abstraction is implemented through **abstract classes**.

---

## 🔹 Abstract Classes in Python

Python provides abstraction using the **abc (Abstract Base Class)** module.

### Rules:
- An abstract class cannot be instantiated.
- It may contain **abstract methods** (methods with only declaration, no body).
- Any child class must implement all abstract methods.

---

## 🔹 Example: Abstract Class with Abstract Method

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    
    @abstractmethod
    def sound(self):
        pass

class Dog(Animal):
    def sound(self):
        print("Dog barks")

class Cat(Animal):
    def sound(self):
        print("Cat meows")

d = Dog()
c = Cat()

d.sound()
c.sound()

Output:
Dog barks
Cat meows

Animal cannot be instantiated because it contains an abstract method.

🔹 Why Do We Use Abstraction?

To enforce structure in child classes

To prevent direct object creation of incomplete classes

To ensure every subclass implements required behavior

To simplify the interface exposed to the user

🔹 Real-World Example: Bank System
from abc import ABC, abstractmethod

class Bank(ABC):

    @abstractmethod
    def showDetails(self):
        pass


class SBI(Bank):
    def showDetails(self):
        print("SBI Bank: Interest Rate = 6.5%, Min Balance = 3000")

class HDFC(Bank):
    def showDetails(self):
        print("HDFC Bank: Interest Rate = 7.2%, Min Balance = 5000")


s = SBI()
h = HDFC()

s.showDetails()
h.showDetails()


🔹 Abstract Class with Both Abstract & Concrete Methods
from abc import ABC, abstractmethod

class Vehicle(ABC):

    def start(self):  # concrete method
        print("Vehicle started")

    @abstractmethod
    def fuelType(self):
        pass


class Car(Vehicle):
    def fuelType(self):
        print("Petrol or Diesel")


c = Car()
c.start()
c.fuelType()


🔹 Key Points to Remember

Abstract classes cannot be instantiated.

Subclasses must override all abstract methods.

Use @abstractmethod decorator to declare an abstract method.

Abstraction increases security, clean code, and enforces structure.

📌** Summary** of Today’s Learning

Understood the concept of Abstraction

Explored abstract classes & abstract methods using ABC module

Practiced real-world examples to reinforce concepts

Prepared foundation for designing cleaner, modular applications







