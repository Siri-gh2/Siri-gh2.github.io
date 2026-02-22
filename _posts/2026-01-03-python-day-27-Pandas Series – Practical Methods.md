---
layout: post
title: "Python – Day 27: Pandas Series – Practical Methods (unique, value_counts, sorting, masking)"
date: 2026-01-03
categories: python pandas data-analysis
description: "Exploring practical Pandas Series methods like unique(), value_counts(), sort_values(), boolean masking, and missing value handling."
---

# Pandas Series – Practical Methods

Today I moved from structure understanding to **real-world operations** on Series.

These are the methods actually used in:
- Data cleaning
- Feature engineering
- EDA (Exploratory Data Analysis)
- ML preprocessing
---

## 🔹 1. unique()

Returns unique values from a Series.

```python

import pandas as pd

s = pd.Series([1,2,2,3,3,3])
print(s.unique())
```
Output:
```
[1 2 3]
```
Useful for:

Understanding categorical variables

Detecting duplicates

## 🔹 2. nunique()

Returns count of unique values.
```
s.nunique()
```
Output:
```
3
```
## 🔹 3. value_counts()

Counts frequency of each value.
```
s.value_counts()
```
Output:
```
3    3
2    2
1    1
dtype: int64
```
Extremely important for:

Categorical analysis

Class imbalance detection in ML

## 🔹 4. sort_values()

Sorts by values.
```
s.sort_values()
```
Descending:
```
s.sort_values(ascending=False)
```
## 🔹 5. sort_index()

Sorts by index labels.
```
s.sort_index()
```
Important difference:

sort_values() → sorts data

sort_index() → sorts labels

## 🔹 6. Boolean Masking (Very Important)

Filtering using conditions.
```
s = pd.Series([10,20,30,40])
s[s > 20]
```

Output:
```
2    30
3    40
dtype: int64
```
This is heavily used in:

- Data filtering

- Removing outliers

- Creating features

## 🔹 7. isnull() and notnull()

Detect missing values.
```
s = pd.Series([1, None, 3])

s.isnull()
```
Output:
```
0    False
1     True
2    False
dtype: bool
```
Count missing values:
```
s.isnull().sum()
```
## 🔹 8. fillna()

Replace missing values.
```
s.fillna(0)
```
## 🔹 9. dropna()

Remove missing values.
```
s.dropna()
```
## 🔹 10. apply()

Applies function to each element.
```
s = pd.Series([1,2,3])
s.apply(lambda x: x * 2)
```
Output:
```
0    2
1    4
2    6
dtype: int64
```
Useful In:
- Feature transformation

- Custom logic

**What I Understood Today**

- unique() → values insight

- value_counts() → frequency analysis

- Boolean masking → filtering power

- Missing value handling → real-world necessity

- Sorting methods difference

- apply() for transformation

**Reflection**

- Now Series is not just a container.

  - It becomes:

      - A filtering tool

      - A transformation engine

      - A preprocessing step for ML

- Understanding these methods deeply is mandatory before moving to:

- DataFrame groupby

- Merging

- Aggregations

- Real datasets

**Now the foundation is getting strong.**
