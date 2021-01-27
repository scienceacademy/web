---
title: "Student Database"
date: 2021-01-18T03:55:45-07:00
draft: true
---

You've been hired to build an application to help manage the student database at a school.
<!--more-->

Create a new database called `school.db`. This will contain all of the data about the students and classes at the school.

Here is the database schema:

```
CREATE TABLE auth (
    username PRIMARY KEY,
    password TEXT NOT NULL
);

CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL
);

CREATE TABLE enrollment (
    course_id INTEGER NOT NULL,
    person_id INTEGER NOT NULL
);

CREATE TABLE people (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);
```

> **NOTE:** These tables are slightly different from the example we did together in class. If you create a new blank database, you can paste the above to create all the required tables.


## Step 1: Logging in

Create a program called `students.py`.

Your program needs some security - only authorized users should be able to run it. Therefore, when your program is first run, it will require the user to authenticate. Ask the user for a username and password. If they both do not match an entry in the `auth` table, print an error message and require them to login again.

> For testing purposes, you can make as many users/passwords as you like. However, for submitting, make sure you have the username "admin" with the password "1234". (We all know this is a terrible password, right?)

## Step 2: Main Menu

Once the user has successfully authenticated, present them with a menu of options like so:

```
----------
Menu
----------
1) Add new student
2) Show list of student's courses
3) Add/remove student from a course
4) Quit

Your choice:
```

Make sure to validate the choice. If the user types anything other than 1, 2, 3, or 4, reject the input and repeat the question.

### Option 1: Add a student

Selecting this option will ask the user for the new student's name, insert it into the database, and return the user to the main menu.

> For the purposes of this assignment, assume ther are no students with the same name.

```
Name of new student: John
Student added!
```

### Option 2: Show student's courses

After selecting this option, ask the user to type a name. If there are multiple matches to the name (for example, if the user typed "Sam" and there is a "Samuel" and a "Samantha" in the database), show a list of names and ids, and ask which one to use.

> **HINT:** You should use a `LIKE` query here. If the query returns only one record, then you can use that student.

Once a student has been chosen, display a list of the courses the student is enrolled in.

```
Menu
----
1) Add new student
2) Show list of student's courses
3) Add/remove student from course
4) Quit

Your choice: 2
Student name: sam
Found these names:
2 : Samuel
3 : Samantha
Choose a student ID: 3
Course ID : Title
2 : Spanish II
3 : Quantum Physics
```

### Option 3: Add/Remove student from a course

Again, the first step will be to select a student, using the same criteria as above.


Example, enrolling a student:
```
----------
Menu
----------
1) Add new student
2) Show list of student's courses
3) Add/remove student from course
4) Quit

Your choice: 3
Student name: bob
(E)nroll or (U)nenroll? e
Course ID | Title
1 | Spanish I
2 | Spanish II
3 | Quantum Physics
4 | English Literature
5 | Ancient History
Course ID: 4
Student is already enrolled in that course.
```

Example, unenrolling a student:
```
----------
Menu
----------
1) Add new student
2) Show list of student's courses
3) Add/remove student from course
4) Quit

Your choice: 3
Student name: bob
(E)nroll or (U)nenroll? u
Course ID | Title
1 | Spanish I
4 | English Literature
----------
Course ID: 4
Student unenrolled.
```

Execute the below to evaluate the correctness of your code using check50. But be sure to test it yourself as well!

```
check50 scienceacademy/problems/2020ap/student_db
```

Execute the below to evaluate the style of your code using style50.

```
style50 students.py
```

## Submitting

Execute the below to submit your code:

```
submit50 scienceacademy/problems/2020ap/student_db
```