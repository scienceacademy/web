---
title: "Todo app"
date: 2022-02-09T13:55:45-07:00
draft: false
---
Create a fully-functional web application for managing a todo list.
<!--more-->

For this assignment, you'll take the example todo list flask application and expand it to create a more fully-featured web application.

## Starting code

1. Log into your CS50 IDE.
2. In the terminal window, run

```md
wget https://scienceacademy.github.io/web/todos.zip
```

 to download a zip file of the lab code.

3. In the terminal window, run `unzip todos.zip` to unzip (decompress) the file.
4. In the terminal window, run `cd todos` to change directories into your `todos` directory.

## Your task

Starting with the provided code, your task is to add the following functionality to the application:

### 1. Remove tasks

The starting code handles displaying the list of tasks, and an `add.html` page for adding new tasks, but doesn't allow for deleting from the list. Add this functionality.

For example, you might add an "x" or "delete" button that's displayed next to each task that removes it when clicked.

### 2. Saving tasks

You may have noticed that if you stop the Flask application, all changes to the task list are lost. Add the code to save and load the task list to a file so that the data can be preserved.

### 3. Authentication

You don't want just anyone to have access to your task list. Add a simple authentication scheme that displays a login form when no user is authenticated. You can use a simple username + password for authentication.

You can save the user's authenticated state in a cookie. In Flask, cookies are set/accessed using the `session` dictionary (add this to the `import` list at the top). For example, to preserve a session variable called `test` with a value of `"saved"`, you would use the following line of code:

```python
session["test"] = "saved"
```

Checking if a session variable exists:

```python
if "test" in session:
```

And to remove the session variable, use `pop()`:

```python
session.pop("test")
```

### 4. Style

In `static/style.css`, add CSS styles to customize and beautify your application. Try to create a unified theme that is pleasing - don't forget to style the "new task" and login forms, the list style of the todo list, and other elements such as font and color.


## How to Submit

```md
submit50 scienceacademy/problems/2021ap/todos
```
