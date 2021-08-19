---
title: "Syntax"
date: 2021-08-17T20:55:45-07:00
draft: true
---
<!--more-->

In this lab you will learn:

- What syntax is, and how it works in C
- When to use parentheses and double quotes
- What curly braces and semicolons are for

## What is Syntax?

In linguistics, syntax is the set of rules for using words, phrases, and punctuation to form sentences. As you can see above, if the word order of a sentence is incorrect, you might not understand what is being said to you.

## Syntax in C

In computer science, **syntax** is important for a computer to understand what you are telling it to do. Each programming language has its own syntactical rules, which include the combination of both words and punctuation.

For instance, to say "hello" in C, you would write:

```c
printf("hello,  world\n");
```

Note that the `printf` function takes an **argument**, or parameter, which is wrapped in symmetrical parentheses, `(` and `)`.

You may also notice the double quotes `"`, which are also symmetrical, and surround words, or sequences of characters. We call these sequences of characters `strings`.

And finally, the entire line ends with a semicolon, `;`. A semicolon is used at the end of every statement, like a period at the end of a sentence.

## Creating a program

A C program won’t work unless you write a few lines to set it up.

```c
#include <stdio.h>

int main(void)
{
    printf("hello, world\n");
}
```

Notice the `int main(void)` line, which is the standard name in C of a default function which is required for the program to run. When you execute a C program, the `main` function will automatically run.

Don't worry yet about the terms `int` and `void`! We'll be learning more about those later on.

The curly braces `{` and `}` are symbols you'll see frequently in C. They are used here to wrap the code that we want to execute in functions like `main`. The code inside the curly braces is called a **block** (put another way, curly braces *define* a block of code). You'll see curly braces used with loops to indicate which segments of code to repeat; with conditional statements to tell the computer which block to choose; and with other programing constructs as well.

The line `#include <stdio.h>` may look incomprehensible at first. `include` is a keyword that indicates you want to include some other file in your program, and it must be preceded by the symbol `#`. `stdio.h` is a **library**, containing functions for input and output, which means that it deals with input (like from the keyboard) and output (printing characters to the screen).

## Now it's your turn!

Now it's your turn to try out decoding some syntax in C!

Take a look at the program below. There are several syntactical errors in it. See if you can edit the code to correct the errors. Look carefully at all the details in the example above for reference.

```c
include stdio.h
{
    int main(void)
    printf("This is CSP!\n")
}
```

When you are done, **compile** your program by typing the following in the terminal window after the `$` prompt followed by pressing enter.

```
make syntax
```

If you see any errors, it's time to debug! You may have left out something small like a `;` or misspelled something. If you have a hard time finding your error, try prefixing `help50` to your command like this:

```
help50 make syntax
```

Once you feel you've corrected any errors, execute `make syntax` again, and repeat this process until no more errors appear.

Now execute your program by typing in the following, again followed by enter:

```
./syntax
```

### Code style

Though C doesn't care about how you style your code (in other words code with correct syntax but inconsistent spacing will compile and execute), your teacher does (and you should)! That's because formatting your code consistently makes it easier to read and as you'll soon find, easier to debug.

You can check that your style is correct by executing the following at the `$` prompt:

```
style50 syntax.c
```

If there’s room for improvement in your code’s style, any characters you should delete will be highlighted in red, and any characters you should add will be highlighted in green.

When style50 outputs:

<div id="green">
    <pre><code>Looks good!</code></pre>
</div>

you are stylish!

### How to Test Your Code

Once you've tested the program yourself, execute the below to evaluate the correctness of your code using `check50`. But be sure to compile and test it yourself as well!

```
check50 scienceacademy/labs/2021ap/syntax
```

## How to Submit

Execute the below, logging in with your GitHub username and password when prompted. For security, you'll see asterisks (`*`) instead of the actual characters in your password.

```
submit50 scienceacademy/labs/2021ap/syntax
```