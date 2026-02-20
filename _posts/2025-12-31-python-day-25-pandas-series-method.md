---
layout: post
title: "Python – Day 25: Pandas Series Deep Dive (Indexing, dtype, loc & iloc)"
date: 2025-12-31
categories: python pandas data-analysis
description: "Understanding Pandas Series creation, dtype behavior, custom indexing, loc vs iloc, and internal structure."
---

# Pandas Series – Deep Understanding

After learning DataFrames and core methods, today I went deeper into **Pandas Series** — the foundation of Pandas.

A Series may look simple, but its behavior around **dtype, indexing, labels, and access methods** is extremely important.

---

## 🔹 What is a Series?

A **Series** is:

- One-dimensional labeled array
- Can store any data type
- Has an **index** and **values**
- Similar to a column in a DataFrame

```python
import pandas as pd

s = pd.Series([1, 2, 3])
print(s)

```
Output :
```
0    1
1    2
2    3
dtype: int64
```
Understanding dtype

dtype represents the type of data stored inside the Series (not the index).
```
s.dtype
```
Output:
```
dtype('int64')
```
### Important Concept: Type Precedence

When mixed types are present, Pandas follows type promotion:
```
object > float > int > bool
```
Example:
```
pd.Series([22, 98.2, "Siri"])
```
Output dtype:
```
object
```
Because string forces the entire Series to become object.

## Custom Index Values

By default, index starts from 0.

But we can customize it.
```
s = pd.Series(["Siri", "Jan", "Bhavs"], index=[1,2,3])
print(s)
```
Output:
```
1    Siri
2    Jan
3    Bhavs
dtype: object
```
### Key Rule:

- Index can be int, float, string

- Must be hashable

- Does NOT need to be unique (but recommended)

- Adding a Name to Series
```
s = pd.Series(["one", "two"], index=range(101,103), name="Numbers")
print(s)
```
Output:
```
101    one
102    two
Name: Numbers, dtype: object
```
The name attribute helps in:

- Identification

- Converting Series to DataFrame

- Structured outputs

 Converting Data Types

Sets don’t directly work in Series.
```
vars = {"Siri", "Bhavs"}
pd.Series(list(vars))
```
We convert set → list first (typecasting).

## Accessing Data from Series
1️⃣ Direct Indexing (Not Recommended)
```
s[0]
```
This can cause ambiguity if labels are numeric.

2️⃣ .loc – Label Based Indexing

Used when accessing using index labels.
```
s = pd.Series([10,20,30], index=['a','b','c'])
s.loc['a']
```
Output:
```
10
```
**Access multiple:**
```
s.loc[['a','b']]
```
3️⃣ .iloc – Position Based Indexing

Used for integer position access.
```
s.iloc[0]
```
Output:
```
10
```
**Slicing:**
```
s.iloc[0:2]
```
Output:
```
a    10
b    20
dtype: int64
```
 ### loc vs iloc – Clear Difference
- Method	Based On	Use Case
- loc	Labels	Custom index names
- iloc	Position	Integer index position

### Golden Rule:

- Use loc for label access

- Use iloc for positional access

- Avoid direct indexing if index is numeric

 - Internal Nature of Series

**A Series is essentially**:

- One-dimensional ndarray

- With axis labels

- Supports both label and integer indexing

- Base building block of DataFrame

🔥 **What I Understood Today**

- dtype belongs to values, not index

- Mixed data converts to object

- Index can be customized

- Name attribute improves structure

- loc vs iloc difference is critical

- Direct indexing can create confusion

- Sets must be typecast before using

**Reflection**

- Series looks simple — but incorrect indexing can break real-world ML pipelines.

- Understanding this deeply now avoids bigger confusion later in:

- Feature engineering

- Data cleaning

- Model training

**Small fundamentals → Large impact.**
