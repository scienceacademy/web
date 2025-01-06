---
title: "Create Task Practice"
date: 2025-01-05T09:55:45-07:00
draft: false
---

Write a simple program to practice for the AP Create Task.

<!--more-->

This program will simulate a pizza ordering system. The user can select what size pizza and any number of toppings, and the output is the total price of the pizza.

The basic flow of the program is as follows:

1. Ask the user what size pizza they want.
2. Allow them to choose any number of toppings.
3. Calculate the total price of the pizza.

Don't forget to disallow invalid inputs.

Use the following values for pizza prices:

| Size | Price |
| ---------|----
| Small | `$10.99`
| Medium | `$12.99`
| Large |  `$14.99`

Each topping costs `$1.50`.

Here's an example of the program being run:

```text
$ python3 pizza.py
Welcome to the Pizza Ordering System!
Available sizes: small, medium, large
What size pizza would you like? small

Available toppings:
1. pepperoni
2. mushrooms
3. onions
4. sausage
5. bacon
6. extra cheese
7. green peppers
8. olives

Enter a topping number (or 'done' to finish): 1
Added pepperoni

Enter a topping number (or 'done' to finish): done

Order Summary:
Size: small
Toppings: pepperoni
Total Price: $12.49
```

Once you have completed the assignment, write brief answers to the following potential FRQ questions:

* Consider the procedure identified in part (i) of the Procedure section of your Personalized Project Reference. Identify the parameter(s) used in this procedure. Explain how your identified parameter(s) use abstraction to manage complexity in your program.

* Consider the list identified in the List section of your Personalized Project Reference. Describe how your program could be written without the use of a list. If it is not possible for your program to work without the use of a list, describe how your program's functionality would be limited.

* Consider the procedure identified in part (i) of the Procedure section of your Personalized Project Reference. Write two calls to your procedure that each cause a different code segment in the procedure to execute. Describe the expected behavior of each call. If it is not possible for two calls to your procedure to cause different code segments to execute, explain why this is the case for your procedure.

Submit your answers in a Google Doc to the Schoology assignment.