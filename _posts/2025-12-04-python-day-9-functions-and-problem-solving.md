---
layout: post
title: "Python – Day 9: Functions, Loops, and Classic Problem Solving"
date: 2025-12-04
categories: python
description: "Day 9 covers functions, parameters, return values, loops, problem-solving patterns, recursion, and key algorithmic exercises like palindrome, Armstrong, factorial, Fibonacci, and more."
---

## Introduction

Day 9 focused on strengthening core Python problem-solving using **functions**, **loops**, **recursion**, and **conditional statements**.  
This session covered practical coding tasks that frequently appear in interviews and competitive programming.

---

## 1. Basic Functions and Return Values

### Example: Simple Addition Function

```python
def add(num1, num2, num3, num4):
    return num1 + num2 + num3 + num4

add(10, 29, 30, 25)

### Greeting Function (Parameter vs Argument)
def greet(name):
    print("Hello, This is", name, "!!")

greet("Siri")

#output: Hello this is, Siri !!

2. Even or odd checker:

   def evenodd(n):
    if n % 2 == 0:
        return "even"
    return "odd"

evenodd(38)

This reinforces conditional logic and modular arithmetic.

3. Average of Numbers
def average(nums):
    return sum(nums) / len(nums)

average([10, 20, 30, 40])

4.Multiplication Table Generator:

def table(n, i):
    for j in range(1, i + 1):
        print(n, "x", j, "=", n * j)

table(2, 10)

5. Finding the Greatest of Three Numbers
def highest(a, b, c):
    if a > b and a > c:
        return a
    elif b > a and b > c:
        return b
    return c

highest(2, 8, 4)

6. List Processing: Natural Numbers, Evens, Sum, Reverse
def process(n):
    lst = list(range(1, n + 1))
    evens = sum(x % 2 == 0 for x in lst)
    total = sum(lst)
    rev = lst[::-1]
    return lst, evens, total, rev

lst, evens, total, rev = process(10)


7. Factorial Using Loops
def factorial(n):
    a = 1
    for c in range(1, n + 1):
        a *= c
    return a

factorial(3)


8. Count Vowels in a String
def counts(a):
    vowels = "aeiouAEIOU"
    count = 0
    for i in a:
        if i in vowels:
            count += 1
    return count

counts("helloooo thereeeee")

9.Reverse a Number:

def reverse_number(n):
    rev = 0
    while n > 0:
        digit = n % 10
        rev = rev * 10 + digit
        n //= 10
    return rev

10.Factorial using recursion
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

factorial(5)

11.Fibonacci Using Recursion
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

fib(10)

12.Palindrome :
def palindrome(n):
    if n[::-1] == n:
        print("it is a palindrome")
    else:
        print("not a palindrome")

palindrome("0990")


13.Amstrong:
def is_armstrong(n):
    digits = str(n)
    p = len(digits)
    total = sum(int(d)**p for d in digits)
    return total == n

is_armstrong(153)
is_armstrong(9474)
is_armstrong(123)

14.Perfect Number :

def perfect(n):
    s = 0
    for i in range(1, n):
        if n % i == 0:
            s += i
    return s == n

perfect(6)




Summary

Day 9 strengthened key programming fundamentals:

Creating and using functions

Working with loops and ranges

Understanding return values vs print

Practicing recursion

Solving classic algorithmic exercises

Strengthening logic through conditions and arithmetic

Using lists effectively

Identifying patterns in number-based problems

These problems build a strong foundation for upcoming topics like data structures, loops + conditions combo problems, and algorithmic thinking.




