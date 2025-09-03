---
title: "String Practice"
date: 2025-09-02T17:55:45-07:00
draft: true
---
Practice with strings...

<!--more-->

Below are some short exercises designed to help you practice working with strings. As in the past, try the "less comfortable" ones if you're still feeling a little less comfortable with your understanding. Tackle the "more comfortable" problems if you want a little more of a challenge.

## Less Comfortable

Choose any two of the following:

{{< details Reverse >}}

* Write a program `reverse.c` that takes a string as input and reverses it.

### Example

```bash
$ ./reverse
Text: This is forward.
Reverse: .drawrof si sihT
```

### Checking

```bash
check50 scienceacademy/problems/2025ap/reverse
```

### Submitting

```bash
submit50 scienceacademy/problems/2025ap/reverse
```

{{< /details >}}

{{< details Alphabetical >}}

* Write a program `alphabetical.c` that prints "Yes" if a lowercase string's characters are in alphabetical order, and "No" if they are not.

### Example

```bash
$ ./alphabetical
Text: abcdefg
Yes
```

```bash
$ ./alphabetical
Text: gfedcba
No
```

### Checking

```bash
check50 scienceacademy/problems/2025ap/alphabetical
```

### Submitting

```bash
submit50 scienceacademy/problems/2025ap/alphabetical
```

{{< /details >}}

{{< details Palindrome >}}

* Write a program `palindrome.c` that takes a string as input and determines whether it's a palindrome (the same backwards and forwards).

### Example

```bash
$ ./palindrome
Text: racecar
PALINDROME
```

```bash
$ ./palindrome
Text: jellyfish
NOT PALINDROME
```

### Checking

```bash
check50 scienceacademy/problems/2025ap/palindrome
```

### Submitting

```bash
submit50 scienceacademy/problems/2025ap/palindrome
```

{{< /details >}}

## More Comfortable

{{< details Palindrome2 >}}

* Write a program `palindrome2.c` that works just like `palindrome.c` above but also ignores spaces, so that it will identify palindromes like `taco cat`.

### Checking

```bash
check50 scienceacademy/problems/2025ap/palindrome2
```

### Submitting

```bash
submit50 scienceacademy/problems/2025ap/palindrome2
```

{{< /details >}}

{{< details Anagram >}}

* Write a program `anagram.c` that takes two words as input and determines whether they are anagrams of one another.
  * If the two words are an exact match (ignoring case), output **"EXACT MATCH"**.
  * If either word contains non-alphabetic characters, output **"Alphabetic characters only"** and return `1`.
  * Otherwise, the program should check to see if the letters in the first word can be rearranged to form the second word (ignoring case). If so, the program should output **"ANAGRAM"**; if not, output **"NOT ANAGRAM"**.

### Examples

```bash
$ ./anagram
Word 1: listen
Word 2: silent
ANAGRAM
```

```bash
$ ./anagram
Word 1: program
Word 2: silent
NOT ANAGRAM
```

```bash
$ ./anagram
Word 1: program
Word 2: program
EXACT MATCH
```

```bash
$ ./anagram
Word 1: this
Word 2: cs50
Alphabetic characters only.
```

### Checking

```bash
check50 scienceacademy/problems/2025ap/anagram
```

### Submitting

```bash
submit50 scienceacademy/problems/2025ap/anagram
```

{{< /details >}}
