---
title: "Inheritance"
date: 2024-10-10T13:55:45-07:00
draft: false
---
Simulate the inheritance of blood types for each member of a family.
<!--more-->

```
$ ./inheritance
Child (Generation 0): blood type OO
    Parent (Generation 1): blood type AO
        Grandparent (Generation 2): blood type OA
        Grandparent (Generation 2): blood type BO
    Parent (Generation 1): blood type OB
        Grandparent (Generation 2): blood type AO
        Grandparent (Generation 2): blood type BO
```

## Background

A person’s blood type is determined by two alleles (i.e., different forms of a gene). The three possible alleles are A, B, and O, of which each person has two (possibly the same, possibly different). Each of a child’s parents randomly passes one of their two blood type alleles to their child. The possible blood type combinations, then, are: OO, OA, OB, AO, AA, AB, BO, BA, and BB.

For example, if one parent has blood type AO and the other parent has blood type BB, then the child’s possible blood types would be AB and OB, depending on which allele is received from each parent. Similarly, if one parent has blood type AO and the other OB, then the child’s possible blood types would be AO, OB, AB, and OO.

## Getting Started

1. In the terminal window, run

```md
wget https://scienceacademy.github.io/web/inheritance.zip
```

 to download a zip file of the code.

3. In the terminal window, run `unzip inheritance.zip` to unzip (decompress) the file.
4. In the terminal window, run `cd inheritance` to change directories into your `inheritance` directory.

## Implementation Details

Complete the implementation of `inheritance.c`, such that it creates a family of a specified generation size and assigns blood type alleles to each family member. The oldest generation will have alleles assigned randomly to them.

* First, notice the `struct` named `person`. Each `person` has an array of two `parents`, each of which is a pointer to another `person`. Each `person` also has two alleles, one from each parent, stored in a `char` array named `alleles`.
* Notice that there are four helper functions.
  * `create_family()` takes an integer input, allocates memory for the family, and returns a person with a family of that specified number of generations.
    * For example, `create_family(3)` will return a person with parents and grandparents.
  * `print_family()` takes as input a person and a number signifying the generation that the person is in. This function prints the entire family, their generation numbers, and their blood types, as per the sample output.
  * `free_family()` takes as input a person and frees the memory associated with this person and the person's family. Remember that all the memory you allocate, you also have to free.
  * `random_allele()` returns a random allele of `A`, `B`, or `O`.
* `main()` is already implemented.
  * First, a random seed is set, using the system time.
  * Next, a new family with three generations is created using `create_family(3)`, and stored in a variable, `p` of type `person`.
  * The family of `p` is then printed with `print_family(p, 0)`.
  * Finally, the memory associated with this family is freed with `free_family(p)`.

### Your Task:

* In `create_family()`, your program should create a family with the specified number of generations.
  * When creating a family, first allocate memory for a new person.
  * Then, if the input to the function is not `1`, recursively create the person's parents and use the parents' alleles to assign the child's alleles. Note the rules for assigning alleles described above—the determination of which of the two alleles the child gets from a parent is random.
  * If the input to the function is `1`, set the person's parent pointers to `NULL` and randomly assign its alleles.
  * For example, your program should work as follows for a family of generation size three.
    * A person, the child, is created. Currently, the child has no parents and no alleles.
    * The person's parents are created. Neither parent has parents or alleles.
    * The grandparents are created, and alleles are randomly assigned to the grandparents.
    * Now that the grandparents have been created and have alleles, the parents' alleles can also be assigned.
    * Now that the parents' alleles are assigned, the child's alleles can be assigned.
* In `free_family()`, your program should free the memory associated with a particular person and their family. To do so, you should first handle the base case, then free the parents, and then free the child. Note that if `free_family()` is not written in this order and the child is freed first, you will not be able to access the parents anymore, losing that memory.

### Hints

* Remember, to allocate memory for a particular person, you can use `malloc(n)`, which takes a size as argument and will allocate `n` bytes of memory.
* Remember, to access a variable via a pointer, you can use arrow notation.
  * For example, if `p` is a person, then this person's first parent can be accessed by `p->parents[0]`.
* Recursion is particularly helpful in this problem, and looking at `print_family()` for an example may be helpful. In `print_family()`, you print the person and their blood type, and then call `print_family()` again on the person's parents to print the person's parents, which will call the person's parents' parents, and so on. Additionally note that when calling `print_family()` on the person's parents, the generation number is incremented.
* For `create_family()`, sometimes it is not necessary to create parents for a person and sometimes it is. Consider this: assume you have already created the child and a parent for a family of three generations. You're now creating a grandparent. Is it necessary for the grandparent to have parent pointers, and how might you keep track of that?
* For the base case in `free_family()`, consider the edge cases in this family tree. Specifically, for a family with three generations, how do you represent the parents of the grandparents?

## Testing

Upon running `./inheritance`, your program should adhere to the rules described in the background. The child should have two alleles, one from each parent. The parents should each have two alleles, one from each of their parents.

For example, in the example below, the child in Generation 0 received an O allele from both Generation 1 parents. The first parent received an A from the first grandparent and a O from the second grandparent. Similarly, the second parent recieved an O and a B from their grandparents.

```
$ ./inheritance
Generation 0, blood type OO
    Generation 1, blood type AO
        Generation 2, blood type OA
        Generation 2, blood type BO
    Generation 1, blood type OB
        Generation 2, blood type AO
        Generation 2, blood type BO

```

```md
check50 scienceacademy/problems/2024ap/inheritance
```

## How to Submit

```md
submit50 scienceacademy/problems/2024ap/inheritance
```


