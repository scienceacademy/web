---
title: "Array Practice: Hours"
date: 2025-09-02T16:55:45-07:00
draft: false
---
Practicing with arrays...

<!--more-->

## Learning Goals

* Practice using arrays
* Using an array as a parameter to a function
* Adding values in a loop
* Integer division and type casting

## Background

Suppose you're taking APCSP (and you are!) and spending time every week practicing writing code. You may be wondering how many hours you've spent learning computer science. In this program, you'll complete a function that calculates, based on the user's input, a total number of hours *or* an average number of hours spent.

## Getting Started

1. To download the starting code for this exercise, paste the following command into your codespace's terminal:
```bash
wget https://raw.githubusercontent.com/scienceacademy/apcsp2025/refs/heads/main/practice/hours.c
```
2. Open the code by typing
```bash
code hours.c
```

## Details

The `main` function prompts the user for the number of weeks the user has been taking APCSP, then creates an array with that many elements. After the data has been entered, the program then prompts the user to enter a "T" or an "A" - to either print the total or average hours spent, respectively. However, that last part doesn't work yet!

Your task is to complete the `calc_hours` function. You should first total up the hours into a new variable. Then, depending on the value of `choice`, return either that sum or the average.

## Testing Your Code

Your code should behave like the examples below:

```md
$ ./hours
Number of weeks taking APCSP: 3
Week 0 hours coding: 3
Week 1 hours coding: 7
Week 2 hours coding: 10
Enter T for total hours, A for average hours per week: A
6.7 hours
```

```md
$ ./hours
Number of weeks taking APCSP: 2
Week 0 hours coding: 2
Week 1 hours coding: 8
Enter T for total hours, A for average hours per week: T
10.0 hours
```

You can check the code with `check50` using the following:

```bash
check50 scienceacademy/problems/2025ap/hours
```
