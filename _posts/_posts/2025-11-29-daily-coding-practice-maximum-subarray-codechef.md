---
layout: post
title: "Daily Coding Practice – Maximum Subarray & CodeChef Beginner Set"
date: 2025-11-29
categories: coding
description: "Solved problems to strengthen fundamentals."
---



**Topics I Practiced Today:
**
Today’s practice session focused on building strong fundamentals across multiple core areas:

✔** Arrays**

Summing values

Extracting specific digits

Finding maximum/second-largest

Understanding contiguous subarrays (Maximum Subarray problem)

Learning the difference between brute force and optimized approaches

✔ **Strings**

Slicing (forward and backward)

Extracting first/last characters

Checking palindromes

Reversing strings using slicing

String-to-int conversions

✔ **Math & Basic Logic**

Modulo operations

Digit sums

Simple comparisons

Edge-case handling

✔ **Efficiency & Performance**

Identifying when brute-force is too slow

Using Kadane’s Algorithm for O(n) optimization

Practicing faster I/O for large input sizes

Learning when to use sorting vs logical tricks

✔ **Competitive Programming Basics**

Clean input parsing

Writing concise loops

Avoiding common errors like index-out-of-range

Understanding test case–based problem solving

Strengthening logical reasoning





**Kadanen's Algorithm**
python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        curr_sum = nums[0]
        max_sum = nums[0]

        for x in nums[1:]:
            curr_sum = max(x, curr_sum + x)
            max_sum = max(max_sum, curr_sum)

        return max_sum
 CodeChef Beginner Practice Set Completed** I solved the problems from the curated beginner-friendly PDF:
* **FLOW001** – Add Two Numbers * **FLOW002** – Find Remainder * **FLOW004** – First and Last Digit * **FLOW006** – Sum of Digits * **FLOW017** – Second Largest * **START01** – Number Mirror * **LUCKFOUR** – Lucky Four * **TWOVSTEN** – Two vs Ten * **PALL01** – The Block Game * **INTEST** – Enormous Input Test **Skills practiced:** * Basic I/O handling * String slicing and digit extraction * Modulo arithmetic * Palindrome checking * Sorting vs logic-based second largest * Faster I/O (for INTEST) ---
* ## 🚀 Reflection
* Today was about building strong fundamentals.
* I improved in: * logical thinking * cleaner code * avoiding brute-force * using slicing and loops efficiently * recognizing when dynamic programming is needed Kadane’s Algorithm was the main breakthrough — I shifted from brute-force mindset to **update-based thinking**.



*    --- ## 📌 Notes to Future Me * Always check if the problem can be optimized using previous results. 
* Patterns > Random practice.
*  * Use slicing smartly, not forcefully.
   * * Write clean, small, readable code.
