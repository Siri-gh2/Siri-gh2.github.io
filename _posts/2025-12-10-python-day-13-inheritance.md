---
layout: post
title: "Python – Day 13: Inheritance (OOP Pillar 2)"
date: 2025-12-10
categories: python
description: "Understanding Inheritance, types of inheritance, method overriding, and code reusability in OOP."
---

# OOPs Day-3

Today’s session covered one of the most powerful concepts in Object-Oriented Programming — **Inheritance**.  
Inheritance allows a class to acquire the properties and behaviors of another class, promoting **clean, reusable, and extensible** code.

---

## 🔹 What is Inheritance?

Inheritance enables us to:

- Reuse existing class code  
- Extend functionality  
- Organize related classes  
- Avoid rewriting common logic  

A class that **inherits** is called the **child (derived)** class.  
The class that is **inherited from** is called the **parent (base)** class.

### Basic Syntax

```python
class Parent:
    # parent properties & methods

class Child(Parent):
    # child extends Parent

🔹 Example: Simple Inheritance
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display(self):
        print("Name:", self.name)
        print("Age:", self.age)

class Student(Person):
    def __init__(self, name, age, marks):
        super().__init__(name, age)
        self.marks = marks

    def show(self):
        print("Marks:", self.marks)

s = Student("Siri", 19, 95)
s.display()
s.show()

🔹 Method Overriding

Child classes can redefine methods from the parent class.

class A:
    def show(self):
        print("Inside class A")

class B(A):
    def show(self):
        print("Inside class B (Overridden)")

b = B()
b.show()  

Output:
Inside class B (Overridden)

🔹 Types of Inheritance
1️⃣ Single Inheritance

One parent → one child.
class A:
    pass

class B(A):
    pass


2️⃣ Multilevel Inheritance

A → B → C

class A:
    pass

class B(A):
    pass

class C(B):
    pass


3️⃣ Multiple Inheritance

One child class inherits from multiple parents.

class A:
    pass

class B:
    pass

class C(A, B):
    pass



4️⃣ Hierarchical Inheritance

One parent → multiple children.

class A:
    pass

class B(A):
    pass

class C(A):
    pass

5️⃣ Hybrid Inheritance (Combination)

A mix of inheritance types.

🔹 Example: Multilevel Inheritance
class A:
    def a(self):
        print("A class")

class B(A):
    def b(self):
        print("B class")

class C(B):
    def c(self):
        print("C class")

obj = C()
obj.a()
obj.b()
obj.c()

🔹 Example: Multiple Inheritance
class X:
    def fx(self):
        print("Class X")

class Y:
    def fy(self):
        print("Class Y")

class Z(X, Y):
    pass

z = Z()
z.fx()
z.fy()

🔹 Example: Hierarchical Inheritance
class Parent:
    def show(self):
        print("Parent class")

class Child1(Parent):
    pass

class Child2(Parent):
    pass

c1 = Child1()
c2 = Child2()
c1.show()
c2.show()


🔚 End of Today’s Topics

✔ Inheritance fundamentals
✔ Constructor chaining via super()
✔ Method overriding
✔ Types of inheritance (single, multilevel, multiple, hierarchical, hybrid)
✔ Example implementations for all inheritance forms

Next class will continue with Polymorphism & Abstraction.
