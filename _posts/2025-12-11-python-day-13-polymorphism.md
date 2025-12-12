---
layout: post
title: "Python – Day 13: Polymorphism, Method Overloading & Method Overriding"
date: 2025-12-11
categories: python
description: "Understanding Polymorphism, Method Overloading, and Method Overriding with examples and practical demonstrations."
---

# OOPs Day-4 
## Polymorphism: Many Forms, One Interface

Today’s session focused on **Polymorphism**, an important pillar of OOP.  
Polymorphism simply means:

> **Same function name → different behaviours based on context**

Python supports two types of polymorphism:

1. **Method Overloading** (same method, different parameters)  
2. **Method Overriding** (child class modifies parent class method)

---

## 🔵 1. Method Overloading (Python Version)

Python does **not** support traditional method overloading like Java or C++.  
If we declare the same function name multiple times, **the last definition overrides the previous ones**.

Example:

```python
def sum(a, b):
    return a + b

def sum(a, b, c):
    return a + b + c

print(sum(2, 3))    # ❌ Error: missing argument
print(sum(2, 3, 4)) # ✔ Works

The output:
TypeError: sum() missing 1 required positional argument

Python handles overloading using:

default arguments

variable-length arguments (*args)

Example fix:
def sum(*args):
    return sum(args)


🔵 2. Method Overriding (Supported)

Child class overrides a method from parent.

Example:

class Animal:
    def sound(self):
        print("Animal makes a sound")

class Dog(Animal):
    def sound(self):
        print("Dog barks")

class Cat(Animal):
    def sound(self):
        print("Cat meows")

d = Dog()
c = Cat()

d.sound()   # Dog barks
c.sound()   # Cat meows


Output:
Bark
Meow
Roar   (from examples with Tiger)

Python decides at runtime, so this is runtime polymorphism.

🔵 More Examples from Practice
Example: Inheritance + Overriding
class Vehicle:
    def show(self):
        print("This is my vehicle")

class Car(Vehicle):
    def show(self):
        print("This is my Car")

class EV(Car):
    def show(self):
        print("This is EV")


Output:
This is EV
This is my Car
This is my vehicle

🔵 Error Examples that Helped Clarify Concepts
Wrong function call (missing arguments)
TypeError: mul() missing required positional arguments
Reason → Function signature did not match.

Case-sensitivity in Python
Print("hello")
NameError: name 'Print' is not defined

🔵 Real-world Polymorphism Example: Different Animals, Same Action
class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def speak(self):
        print("Dog says Woof")

class Cat(Animal):
    def speak(self):
        print("Cat meows")

class Lion(Animal):
    def speak(self):
        print("Lion roars")

Calling:
for a in [Dog(), Cat(), Lion()]:
    a.speak()

Output:
Woof
Meow
Roar

Each object behaves differently using the same method name.

🔵 Additional Practice Snippets Observed

These came from the notebook output:

Reversing numbers

Basic arithmetic

Input handling

Dictionary and set manipulation

Class inheritance tests

Multiple error-handling demonstrations

🔵 Summary of Day 13

✔ Understood the concept of Polymorphism
✔ Learned Method Overloading (Python-style using default args / *args)
✔ Implemented Method Overriding in inheritance
✔ Observed real error outputs and corrected them
✔ Practiced runtime behaviour with multiple inheritance examples

