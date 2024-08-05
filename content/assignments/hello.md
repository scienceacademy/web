---
title: "Hello"
date: 2024-08-15T19:55:45-07:00
draft: true
---

A simple assignment to practice testing and submitting your code.

<!--more-->

Hello, world! Below is the very first program we wrote in C. Save this in your IDE in a file called `hello.c`.

```c
#include <stdio.h>

int main(void)
{
    printf("hello, world\n");
}
```

Next, in the *terminal window*, immediately to the right of the dollar sign (`$`), otherwise known as a *prompt*, type precisely the below (in lowercase), then hit Enter:

```md
ls
```

Do you see `hello.c`? That's because you've just listed the files in that same folder, this time using a command-line interface (CLI), using your keyboard, rather than the graphical user interface (GUI) represented by that folder icon. In particular, you *executed* (i.e., ran) a command called `ls`, which is shorthand for "list." (It's such a frequently used command that its authors called it just `ls` to save keystrokes.) Make sense?

From here on out, to "execute" (i.e., run) a command means to type it into a terminal window and then hit Enter. Commands are *case-sensitive*, so be sure not to type in uppercase when you mean lowercase or vice versa.

## Compiling Programs

Now, before we can execute the program at right, recall that we must *compile* it with a *compiler* (e.g., `clang`), translating it from *source code* into *machine code* (i.e., zeroes and ones). Execute the command below to do just that:

```md
make hello
```

And then execute this one again:

```md
ls
```

This time, you should see not only `hello.c` but `hello*` listed as well? (You can see the same graphically if you click that folder icon again.) That's because `make` has translated the source code in `hello.c` into machine code in `hello`.

Also note that the `*` next to the filename indicates this file is an *executable*, or a file that contains machine code that can be run.

Now run the program by executing the below.

```md
./hello
```

Hello, world!

## Getting User Input

Suffice it to say, no matter how you compile or execute this program, it only ever prints `hello, world`. Let's personalize it a bit, just as we did in class.

Modify this program in such a way that it first prompts the user for their name and then prints `hello, so-and-so`, where `so-and-so` is their actual name.

As before, be sure to compile your program with:

```md
make hello
```

And be sure to execute your program, testing it a few times with different inputs, with:

```md
./hello
```

### Walkthrough

#### Don't recall how to prompt the user for their name?

Recall that you can use `get_string` as follows, storing its *return value* in a variable called `name` of type `string`.

```c
string name = get_string("What is your name?\n");
```

#### Don't recall how to format a string?

Don't recall how to join (i.e., concatenate) the user's name with a greeting? Recall that you can use `printf` not only to print but to format a string (hence, the `f` in `printf`), a la the below, wherein `name` is a `string`.

```c
printf("hello, %s\n", name);
```

#### Use of undeclared identifier?

Seeing the below, perhaps atop other errors?

```md
error: use of undeclared identifier 'string'; did you mean 'stdin'?
```

Remember, to use `get_string`, you need to include `cs50.h` (in which `get_string` is *declared*) atop a file, as with:

```c
#include <cs50.h>
```

### How to Test Your Code

Once you've tested the program yourself, execute the below to evaluate the correctness of your code using `check50`. But be sure to compile and test it yourself as well!

```md
check50 scienceacademy/problems/2023ap/hello
```

Execute the below to evaluate the style of your code using `style50`.

```md
style50 hello.c
```

## How to Submit

Execute the below, logging in with your GitHub username and password when prompted. For security, you'll see asterisks (`*`) instead of the actual characters in your password.

```md
submit50 scienceacademy/problems/2023ap/hello
```