---
title: "Calc"
date: 2024-09-09T01:55:45-07:00
draft: false
---
Create a simple command line calculator.

```
$ ./calc 50 x 28
1400.000000
```
<!--more-->
Create a new file called `calc.c`.

Input to the program will use the command line. The user should provide three items on the command line for basic calculations - addition, subtraction, multiplication, and division - on floating point numbers:

```
$ ./calc 8.38 - 5.12
3.2600000
```

You may assume the following:

* `argv[1]` (if present) will only contain digit characters, and possibly a negative sign or decimal point.
* `argv[2]` (if present) is **not** guaranteed to be `+`, `-`, `x`, or `/`. If an invalid operator is found, your program should print an error and `return 1;`.
* `argv[3]` (if present) will only contain digit characters, and possibly a negative sign or decimal point.
* If any of the above are not present, your program should print an error and `return 1;`.

## Optional (for more of a challenge)

You may modify your program to accept the `%` operator. Note that in C, `%` only works with integers - you'll have to find a way to calculate the remainder when using floats.

## Test your code

Test your code with:
```
check50 scienceacademy/problems/2024ap/calc
```

**Note**: The checker will test for the optional case. You can ignore those errors if you opted to skip that.