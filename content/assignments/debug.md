---
title: "Debugging Practice"
date: 2024-12-04T19:55:45-07:00
draft: true
---
Practice your debugging skills.
<!--more-->

## Submission Instructions

1. Open a new blank document named `debug.txt`.
1. Copy the corrected code for each example into your solution document.
1. Provide a brief explanation for each fix.

**Good luck!**

---

## Part 1: Python Debugging

### 1. Complex Syntax Error

```python
class Counter:
    def __init__(self, start=0):
        self.value = start

    def increment(self):
        self.value += 1

my_counter = Counter(start: 10)
my_counter.increment()
print(f"Counter value is {my_counter.value}")
```

**Task:** Correct the errors in object initialization and fix any other issues.

---

### 2. Logic Error with Data Structures

```python
def find_most_common(nums):
    count_dict = {}
    for num in nums:
        count_dict[num] += 1  # Updates without initializing keys

    return max(count_dict, key=lambda x: count_dict[x])

numbers = [3, 5, 3, 2, 5, 5, 3]
print("Most common number:", find_most_common(numbers))
```

**Task:** Identify and resolve the logic issues related to dictionary initialization and key handling.

---

### 3. Error in Recursive Function

```python
def factorial(n):
    if n = 0:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))
```

**Task:** Fix both the syntax and logic errors in the recursive implementation.

---

### 4. Data Processing Logic

```python
def calculate_average(grades):
    total = sum(grades)
    return total / len(total)  # Incorrect parameter

student_grades = {"Alice": [85, 90, 92], "Bob": [70, 88, 81]}

for student, grades in student_grades.items():
    print(f"{student}'s average grade: {calculate_average(grades)}")
```

**Task:** Debug the code to correctly calculate averages for each student.

---

### 5. Algorithmic Bug

```python
def merge_sorted(arr1, arr2):
    merged = []
    i, j = 0, 0
    while i < len(arr1) or j < len(arr2):  # Incorrect condition
        if arr1[i] < arr2[j]:
            merged.append(arr1[i])
            i += 1
        else:
            merged.append(arr2[j])
            j += 1

    return merged

print(merge_sorted([1, 3, 5], [2, 4, 6]))
```

**Task:** Debug the merging logic and handle edge cases.

---

## Part 2: C Debugging

### 1. Pointer Arithmetic and Array Error

```c
#include <stdio.h>

void print_array(int *arr, int size) {
    for (int i = 0; i <= size; i++) {  // Off-by-one error
        printf("%d ", *(arr + i));
    }
    printf("\n");
}

int main() {
    int nums[] = {1, 2, 3, 4, 5};
    print_array(nums, 5);
    return 0;
}
```

**Task:** Correct pointer and array boundary issues.

---

### 2. Complex Logic Error

```c
#include <stdio.h>

int fibonacci(int n) {
    if (n == 1 || n == 2)
        return 1;
    else
        return fibonacci(n - 1) + fibonacci(n - 3);  // Incorrect base case logic
}

int main() {
    printf("Fibonacci(5) = %d\n", fibonacci(5));
    return 0;
}
```

**Task:** Correct the logic of the recursive Fibonacci function to handle standard cases properly.

---

### 3. Memory Management Error

```c
#include <stdio.h>
#include <stdlib.h>

void allocate_and_fill(int size) {
    int *array = malloc(size * sizeof(int));
    for (int i = 0; i < size; i++) {
        array[i] = i * i;  // Fill with squares
    }
    // No free() call to release memory
    printf("Array allocated and filled.\n");
}

int main() {
    allocate_and_fill(10);
    return 0;
}
```

**Task:** Debug the memory management issues and fix potential memory leaks.

---

### 4. String Manipulation Error

```c
#include <stdio.h>
#include <string.h>

void reverse_string(char *str) {
    int len = strlen(str);
    for (int i = 0; i <= len / 2; i++) {  // Off-by-one error
        char temp = str[i];
        str[i] = str[len - i - 1];
        str[len - i - 1] = temp;
    }
}

int main() {
    char input[] = "hello";
    reverse_string(input);
    printf("Reversed string: %s\n", input);
    return 0;
}
```

**Task:** Fix the off-by-one error in string reversal logic.

---

### 5. Mixed Pointer and Logic Error

```c
#include <stdio.h>

void swap(int *a, int *b) {
    *a = *a + *b;
    *b = *a - *b;
    *a = *a - *b;  // Causes issues with overflow
}

int main() {
    int x = 2147483647, y = -2147483647;
    printf("Before swap: x = %d, y = %d\n", x, y);
    swap(&x, &y);
    printf("After swap: x = %d, y = %d\n", x, y);
    return 0;
}
```

**Task:** Redesign the swap function to avoid potential overflow issues.

---



