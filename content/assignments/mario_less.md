---
title: "Mario: Less comfortable"
date: 2023-08-23T19:55:45-07:00
draft: true
---
<!--more-->

## World 1-1

Toward the end of World 1-1 in Nintendo's _Super Mario Brothers_, Mario must ascend a right-aligned pyramid of blocks, as shown below.

![screenshot of Mario jumping up a right-aligned pyramid](/web/pyramid.png)

Let's recreate that pyramid in C, albeit in text, using hashes (`#`) for bricks, a la the below. Each hash is a bit taller than it is wide (at least for the font we're using), so the pyramid itself will also appear taller than it is wide.

```md
       #
      ##
     ###
    ####
   #####
  ######
 #######
########
```

The program we'll write will be called `mario`. And let's allow the user to decide just how tall the pyramid should be by first prompting them for a positive integer between 1 and 8, inclusive.

Here's how the program might work if the user inputs `8` when prompted:

```md
$ ./mario
Height: 8
       #
      ##
     ###
    ####
   #####
  ######
 #######
########
```

Here's how the program might work if the user inputs `4` when prompted:

```md
$ ./mario
Height: 4
   #
  ##
 ###
####
```

Here's how the program might work if the user inputs `2` when prompted:

```md
$ ./mario
Height: 2
 #
##
```

And here's how the program might work if the user inputs `1` when prompted:

```md
$ ./mario
Height: 1
#
```

If the user doesn't, in fact, input a positive integer between 1 and 8, inclusive, when prompted, the program should re-prompt the user until they cooperate:

```md
$ ./mario
Height: -1
Height: 0
Height: 42
Height: 50
Height: 4
   #
  ##
 ###
####
```

How to begin? Let's approach this problem one step at a time.

## 1. Prompting for Input

Let's first write only the C code that prompts (and re-prompts, as needed) the user for input.

Specifically, add code in `mario.c` in such a way that it prompts the user for the pyramid's height, storing their input in a variable, re-prompting the user again and again as needed if their input is not a positive integer between 1 and 8, inclusive. Then, just print the value of that variable, confirming (for yourself) that you've indeed stored the user's input successfully, a la the below:

```md
$ ./mario
Height: -1
Height: 0
Height: 42
Height: 50
Height: 4
OK: 4
```

### Hints

* Recall that you can print an `int` with `printf` using `%i`.
* Recall that you can get an integer from the user with `get_int`.
* Recall that `get_int` is declared in the `cs50.h` library.
* Recall that we prompted the user for a positive integer in class via `positive.c` [(link)](https://github.com/scienceacademy/apcsp_2021).

## 2. Building the Opposite

Now that your program is (hopefully!) accepting input correctly, it's time for another step.

It turns out it's a bit easier to build a left-aligned pyramid than right-, like this:

```md
#
##
###
####
#####
######
#######
########
```

So let's build a left-aligned pyramid first and then, once that's working, right-align it instead!

Modify `mario.c` so that it no longer simply prints the user's input but instead prints a left-aligned pyramid of that height.

### Hints

* Keep in mind that a hash is just a character like any other, so you can print it with `printf`.
* In C we have a `for` loop, where you can iterate some number of times. Perhaps on each iteration, *i*, you could print that many hashes?
* You can actually "nest" loops, iterating with one variable (e.g., `i`) in the "outer" loop and another (e.g., `j`) in the "inner" loop. For instance, here's how you might print a square of height and width `n`, below. Of course, it's not a square that you want to print for this problem!

    ```c
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf("#");
        }
        printf("\n");
    }
    ```

## 3. Right-Aligning with Dots

Let's now right-align that pyramid by pushing its hashes to the right by prefixing them with dots (i.e., periods), a la the below.

```md
.......#
......##
.....###
....####
...#####
..######
.#######
########
```

Modify `mario.c` in such a way that it does exactly that!

### Hint

Notice how the number of dots needed on each line is the "opposite" of the number of that line's hashes. For a pyramid of height 8, like the above, the first line has just 1 hash and thus 7 dots. The bottom line, meanwhile, has 8 hashes and thus 0 dots. Via what formula (or arithmetic, really) could you print the right number of dots and hashes on each line?

### Test Your Code

Does your code work as prescribed when you input:

* `-1` (or other negative numbers)?
* `0`?
* `1` through `8`?
* `9` or other positive numbers?
* letters or words?
* no input at all, when you just hit Enter?

## 4. Removing the Dots

All that remains now is a finishing flourish! Modify your program so that it prints spaces instead of those dots!

## How to Test Your Code

Execute the below to evaluate the correctness of your code using `check50`. But be sure to compile and test it yourself as well!

```md
check50 scienceacademy/problems/2023ap/mario/less
```

Execute the below to evaluate the style of your code using `style50`.

```md
style50 mario.c
```

## How to Submit

Execute the below:

```md
submit50 scienceacademy/problems/2023ap/mario/less
```
