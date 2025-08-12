---
title: "Lab: Password"
date: 2024-09-01T10:55:45-07:00
draft: true
---

Validating passwords.

<!--more-->

## Goals

* Practice iterating through a string
* Practice using the `ctype` library
* Practice using Boolean variables

##

It's important to use passwords that are not easy to guess. Many websites require passwords that meet particular criteria for alphabetic and non-alphabetic characters.

In this lab, you'll prompt the user for a password, which will then be checked using a function called `check()` that you'll complete. If the password contains at least one uppercase letter, one lowercase letter, one number, and one symbol, the function should return `true`. Otherwise, it returns `false`.

You may recognize this exercise from the *Pseudocode* assignment we completed earlier this year.

Here's your starting code:

```c
// Check that a password has at least one lowercase letter, uppercase letter, number and symbol

#include <cs50.h>
#include <stdio.h>

bool valid(string password);

int main(void)
{
    string password = get_string("Enter your password: ");
    if (valid(password))
    {
        printf("Your password is valid!\n");
    }
    else
    {
        printf("Your password needs at least one uppercase letter, lowercase letter, number, and symbol\n");
    }
}

// TODO: Complete the Boolean function below
bool valid(string password)
{
    return false;
}
```

## Hints

* Since you need to find at least one of each type of character, you may want to create a boolean variable for each, setting it to `false`. Then, if you find a number, for example, you can set that boolean to `true`. If all booleans are `true` at the end of the function, you've met all the criteria.

### How to Test Your Code

You can also execute the below to evaluate the correctness of your code using `check50`. **But be sure to compile and test it yourself as well!**

```
check50 scienceacademy/problems/2024ap/password
```

## How to Submit

Execute the below:

```
submit50 scienceacademy/problems/2024ap/password
```