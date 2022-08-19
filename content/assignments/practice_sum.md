---
title: "Practice: sum.c"
date: 2022-08-18T11:55:45-07:00
draft: false
---

Write a program called `sum.c` that asks the user to provide ten integers as input and computes the sum.
<!--more-->

## Topics

* Getting user input
* Loops
* Variables

## Example:

```md
$ ./sum
Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
Number: 6
Number: 7
Number: 8
Number: 9
Number: 10
Sum: 55
```

### Tips

* While you could just have 10 separate `get_int()` lines, you should probably use a loop for this program. Remember the `for` loop:

```C
for (int i = 0; i < 10; i++)
{
    printf("Hello\n");
}
```

* Remember that to add to an existing variable, you can use `+=`:

```C
int total = 0;
total += get_int("Number: ");
```

### How to Test Your Code

Once you've tested the program yourself, execute the below to evaluate the correctness of your code using `check50`. But be sure to compile and test it yourself as well!

```md
check50 scienceacademy/problems/2022ap/sum
```

Execute the below to evaluate the style of your code using `style50`.

```md
style50 sum.c
```

## How to Submit

Execute the below, logging in with your GitHub username and password when prompted. For security, you'll see asterisks (`*`) instead of the actual characters in your password.

```md
submit50 scienceacademy/problems/2022ap/sum
```