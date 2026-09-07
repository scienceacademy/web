---
title: "Practice: Fahrenheit"
date: 2026-09-07T09:55:45-07:00
draft: false
---

Converting temperature...

<!--more-->

## Converting Temperature

Write a C program that converts degrees Celsius to Fahrenheit, like so:

```md
$ ./fahrenheit
C: 0
F: 32.0
```

## Implementation Details

Create a file called `fahrenheit.c`. Your program must do the following:

* Accept as input a value in Celsius
* Output the equivalent temperature in Fahrenheit to *exactly* one decimal place.

### Hints

* Don't forget about _truncation_!
* If you don't remember the conversion formula:

```md
F = ((C * 9) / 5) + 32
```

* When using `printf()` to print a floating point number, you can specify how many decimal places to display. For example:

```c
#include <stdio.h>

int main(void)
{
   float pi = 3.1415926535;
   printf("%.2f\n", pi);
}
```

The above code would output `3.14` because the `%.2f` specifies 2 decimal places in the float placeholder.

### How to Test Your Code

Does your code work as prescribed when you input

* `-1.00` (or any other negative numbers)?
* `0.00`?
* `0.01` (or any other positive numbers)?

You can also execute the below to evaluate the correctness of your code using `check50`. **But be sure to compile and test it yourself as well!**

```md
check50 scienceacademy/problems/2026ap/fahrenheit
```

## How to Submit

Execute the below:

```md
submit50 scienceacademy/problems/2026ap/fahrenheit
```
