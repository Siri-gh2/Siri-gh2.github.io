---
layout: post
title: "Python – Day 24: Pandas DataFrame Methods Explained with Examples"
date: 2025-12-30
categories: python pandas data-analysis
description: "Understanding Pandas DataFrames and commonly used methods such as head, tail, info, describe, and data type–specific analysis with examples."
---

## Introduction

I focused on **Pandas DataFrames** and explored some of the most commonly used methods to **inspect, understand, and summarize data**.  
These methods are essential when working with real-world datasets before performing analysis or applying machine learning models.

---

## What is a DataFrame?

A **DataFrame** is a **2-dimensional labeled data structure** in Pandas, similar to a table or spreadsheet.

- Rows represent observations
- Columns represent features
- Each column can have a different data type

### Creating a Sample DataFrame

```python
import pandas as pd

data = {
    "Name": ["Amit", "Riya", "Karan", "Sneha"],
    "Age": [21, 22, 23, 21],
    "Marks": [85, 90, 88, 92],
    "City": ["Delhi", "Mumbai", "Pune", "Delhi"]
}

---


### df.head()
Purpose

Displays the first 5 rows of the DataFrame by default.

Why it is useful

Quickly understand the structure of the dataset

Check column names and sample values

Example:

df.head()

You can also specify the number of rows:


df.head(2)


---
**df.tail()**
Purpose
Displays the last 5 rows of the DataFrame by default.

Why it is useful
Helpful when checking appended or recent data

Useful in time-series or log datasets

Example:

df.tail()

#any 2 random from last
df.tail(2)


**df.info()**
Purpose
Provides a summary of the DataFrame, including:

Column names

Data types

Non-null counts

Memory usage

Why it is useful
Detect missing values

Understand data types before analysis

Identify columns needing cleaning

Example :

df.info()

**df.describe()**

Purpose
Generates statistical summary for numerical columns.

Includes:
count

mean

standard deviation

min

max

quartiles (25%, 50%, 75%)

Example:

df.describe()
This works only on numeric columns by default.

df.describe(include="O")
Purpose
Generates summary statistics only for object (string) columns.

Why it is useful
Analyze categorical data

Find most frequent values

Understand data distribution in text columns

Statistics included:
count

unique

top (most frequent value)

freq (frequency of top value)

Example

df.describe(include="O")
This is especially useful in data preprocessing for ML, where categorical features need encoding.



**Summary**
In this session, I learned:

What a Pandas DataFrame is

How to inspect data using:

head()

tail()

info()

describe()

How to analyze numerical and categorical data separately

Why these methods are essential before data cleaning and modeling
df = pd.DataFrame(data)
df
