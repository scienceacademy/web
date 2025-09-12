---
title: "Columnar Transposition Cipher"
date: 2025-09-11T15:55:45-07:00
draft: false
---

Implement a program that encrypts messages using the columnar transposition cipher.
<!--more-->
```md
$ ./column test
plaintext:  now is the time to act.
ciphertext: otiowhmanstttieec
```

## Background

A transposition cipher is a method of encryption that rearranges the order of plaintext characters to create ciphertext without changing the actual letters themselves. This is achieved through a predetermined pattern or a "key," such as writing the message in a zigzag or a grid, and then reading it out in a different order. A *columnar transposition cipher* uses a keyword to determine the order of columns in a grid. Unlike substitution ciphers, transposition ciphers preserve the frequency of letters in the ciphertext, which can be a weakness for cryptanalysts.

Columnar transposition involves writing the plaintext out in rows, and then reading the ciphertext off in columns. The key determines the number of columns and the order in which they are read. The plaintext is written row by row into a grid, and then the columns are reordered alphabetically by the keyword letters before being read out.

For example, given a key of `hello` and a message of `This is a secret message.` you would construct a grid like this:


|  |  |  |  |
|-|-|-|-|-
|H|E|L|L|O
|T|h|i|s|i
|s|a|s|e|c
|r|e|t|m|e
|s|s|a|g|e

The columns will then be read out in order based on the letters of the key: `1, 0, 2, 3, 4` resulting in the ciphertext:

`haesTsrsistasemgicee`


## Your task

Write a program called `column` that enables you to encrypt messages using a columnar transposition cipher. At the time the user executes the program, they should decide, by providing a command-line argument, on what the key should be in the secret message they’ll provide at runtime.

Here is an example of how the program might work. For example, if the user inputs a key of `hello` and a plaintext of `This is a test.`:

```md
$ ./column hello
plaintext:  This is a test.
ciphertext: haesTsrsistasemgicee
```

Notice that punctuation and spaces were ignored by the cipher. Only consider alphabetical characters! Notice, too, that the case of the original message has been preserved. Lowercase letters remain lowercase, and uppercase letters remain uppercase.


Whether the characters in the key itself are uppercase or lowercase doesn’t matter. A key of `hello` is functionally identical to a key of `HELLO` (as is, for that matter, `HeLlO`).

And what if a user doesn’t provide a valid key?

```md
$ ./column h
Key must be at least 3 characters.
```

```md
$ ./column he3
Key must be only alphabetic characters.
```

Or really doesn’t cooperate?

```md
$ ./column
Usage: ./column key
```

## Specification

Implement a program, `column`, that encrypts messages using a columnar transposition cipher.

* Write your program in a file called `column.c`.
* Your program must accept a single command-line argument, the key to use for the encryption. The key itself should be case-insensitive, so whether any character in the key is uppercase or lowercase should not affect the behavior of your program.
* If your program is executed without any command-line arguments or with more than one command-line argument, your program should print an error message of your choice (with `printf()`) and return from `main()` a value of `1` immediately.
* If the key is invalid (as by not containing 3+ characters or containing any character that is not an alphabetic character), your program should print an error message of your choice (with `printf()`) and return from `main()` a value of `2` immediately.
* Your program must prompt the user with `plaintext:` (ie, using `get_string()`).
* Your program must output `ciphertext:` followed by the plaintext’s corresponding ciphertext, as calculated using the algorithm described above.
* Your program must preserve case: capitalized letters must remain capitalized letters; lowercase letters must remain lowercase letters.
* After outputting ciphertext, you should print a newline. Your program should then exit by returning `0` from `main()`.

## How to Test Your Code

Execute the below to check the correctness of your code using `check50`. But be sure to compile and test it yourself as well!

```md
check50 scienceacademy/problems/2025ap/column
```

## How to Submit

Execute the below, logging in with your GitHub username and password when prompted.

```md
submit50 scienceacademy/problems/2025ap/column