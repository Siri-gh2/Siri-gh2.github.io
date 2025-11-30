---
layout: post
title: "Python – Day 5: Problem-Solving Practice (Maximum Subarray & CodeChef Beginner Set)"
date: 2025-11-29
categories: python
description: "Day 5 focuses on structured problem-solving by completing CodeChef beginner problems to strengthen fundamentals."
---

## Introduction

Day 5 focused entirely on improving problem-solving through real coding exercises.  
The goal today was to build stronger fundamentals, avoid brute-force thinking, and write cleaner, more optimized solutions while practicing both LeetCode and CodeChef problems.

---

## Topics Covered Today

Today's session strengthened core programming foundations across multiple areas:

### Arrays
- Summing values and finding maximum/second largest  
- Understanding contiguous subarrays  
- Replacing brute force with efficient approaches  
- Recognizing traversal and update patterns  

### Strings
- Forward/backward slicing  
- Extracting characters and reversing strings  
- Palindrome checks  
- Safe type conversions  

### Math & Logical Reasoning
- Modulo operations  
- Digit manipulation  
- Comparison logic and edge-case handling  

### Efficiency & Optimization
- Identifying when brute-force is too slow  
- Using update-based thinking (Kadane’s Algorithm)  
- Practicing faster input handling  
- Choosing between logical tricks vs sorting  

### Competitive Programming Fundamentals
- Structuring solutions around test cases  
- Clean loop design  
- Avoiding common pitfalls  
- Writing intentional, readable code  

Overall, the session improved pattern recognition and reinforced writing solutions that focus on clarity and performance.

---

## Maximum Subarray (LeetCode)

**Problem Link:**  
https://leetcode.com/problems/maximum-subarray/

### What I Realized

My first attempt was brute force, checking every subarray — extremely slow.  
**Kadane’s Algorithm** solves it in **O(n)** using an update-based approach.

### Core Logic

For each value `x`, decide:

- Start a new subarray at `x`, or  
- Extend the current subarray  

```python
curr_sum = max(x, curr_sum + x)


 **Solution : CODE**

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        curr_sum = nums[0]
        max_sum = nums[0]

        for x in nums[1:]:
            curr_sum = max(x, curr_sum + x)
            max_sum = max(max_sum, curr_sum)

        return max_sum

**CodeChef Beginner Practice Set**

I completed several curated beginner-friendly CodeChef problems, including:

FLOW001 – Add Two Numbers

FLOW002 – Find Remainder

FLOW004 – First and Last Digit

FLOW006 – Sum of Digits

FLOW017 – Second Largest

START01 – Number Mirror

LUCKFOUR – Lucky Four

TWOVSTEN – Two vs Ten

PALL01 – The Block Game

INTEST – Enormous Input Test

Concepts Strengthened

Input/output handling

Modulo arithmetic

Efficient loops

Digit extraction and slicing

Palindrome logic

Logical vs sorting approaches

Fast input reading

**Reflection**

Key improvements today:

Switched from brute-force mindset to optimized patterns

Better understanding of dynamic thinking

Cleaner, more readable code

Stronger reasoning through practice

Consistency in solving problems category-wise

Kadane's Algorithm was the major breakthrough — updating results instead of recalculating everything.

**Notes for Future Me**

Always ask: Can this be optimized?

Don’t jump to slicing unless it’s necessary

Keep functions minimal and meaningful

Consistency turns average coders into strong ones
