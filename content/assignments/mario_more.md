---
title: "Mario: More comfortable"
date: 2022-08-23T19:55:45-07:00
draft: false
---
<!--more-->

## World 1-1

Toward the beginning of World 1-1 in Nintendo's Super Mario Brothers, Mario must hop over adjacent pyramids of blocks, as shown below.

![screenshot of Mario jumping over adjacent pyramids](/web/pyramids.png)

Let's recreate those pyramids in C, albeit in text, using hashes (`#`) for bricks, a la the below. Each hash is a bit taller than it is wide (at least for the font we're using), so the pyramids themselves will also appear taller than they are wide.

```md
   #  #
  ##  ##
 ###  ###
####  ####
```

The program we'll write will be called `mario`. And let's allow the user to decide just how tall the pyramids should be by first prompting them for a positive integer between, say, 1 and 8, inclusive.

Here's how the program might work if the user inputs `8` when prompted:

```md
$ ./mario
Height: 8
       #  #
      ##  ##
     ###  ###
    ####  ####
   #####  #####
  ######  ######
 #######  #######
########  ########

```

Here's how the program might work if the user inputs `4` when prompted:

```md
$ ./mario
Height: 4
   #  #
  ##  ##
 ###  ###
####  ####
```

Here's how the program might work if the user inputs `2` when prompted:

```md
$ ./mario
Height: 2
 #  #
##  ##
```

And here's how the program might work if the user inputs `1` when prompted:

```md
$ ./mario
Height: 1
#  #
```

If the user doesn't, in fact, input a positive integer between 1 and 8, inclusive, when prompted, the program should re-prompt the user until they cooperate:

```md
$ ./mario
Height: -1
Height: 0
Height: 42
Height: 50
Height: 4
   #  #
  ##  ##
 ###  ###
####  ####
```

Notice that width of the "gap" between adjacent pyramids is equal to the width of two hashes, irrespective of the pyramids' heights.

Write `mario.c` in your IDE so that it implements this program as described!

### Test Your Code

Does your code work as prescribed when you input

* `-1` (or other negative numbers)?
* `0`?
* `1` through `8`?
* `9` or other positive numbers?
* letters or words?
* no input at all, when you only hit Enter?

You can also execute the below to evaluate the correctness of your code using `check50`. But be sure to compile and test it yourself as well!

```md
check50 scienceacademy/labs/2022ap/mario/more
```

Execute the below to evaluate the style of your code using `style50`.

```md
style50 mario.c
```

## How to Submit

Execute the below:

```md
submit50 scienceacademy/labs/2022ap/mario/more
```
