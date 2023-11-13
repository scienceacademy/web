---
title: "Lab: Songs"
date: 2023-11-11T13:55:45-07:00
draft: false
---
Write SQL queries to answer questions about a database of songs.
<!--more-->
## Getting Started

1. Open your CS50 Codespace.
2. In the terminal window, run
```
wget https://scienceacademy.github.io/web/songs.zip
```

 to download a zip file of the lab code.

3. In the terminal window, run `unzip songs.zip` to unzip (decompress) the file.
4. In the terminal window, run `cd songs` to change directories into your `songs` directory.


You've been provided with a file called `songs.db`, a SQLite database containing data from Spotify about songs and artists. It contains the top 100 streamed songs on Spotify in 2018.

Run `sqlite3 songs.db` to to open the database and run queries.

First, try typing the command `.schema`. This will output the `CREATE TABLE` statements that were used to create the tables in the database. By looking at them, you can see the columns available in each table.

Notice that every `artist` has an `id` and a `name`. Every song has a `name`, an `artist_id` (corresponding to the `id` of the artist), as well as other values such as `energy`, `key`, `tempo`, etc.

## Assignment

For each of the following problems, write a single SQL query that outputs the specified results. You **should not** assume anything about the `id`s of particular songs or artists (your queries should work even if the `id` of any song or artist were different). Finally, each query should only return the data necessary to answer the question, nothing more.

* In 1.sql, write a SQL query to list the names of all songs in the database.
  * Your query should output a table with a single column for the name of each song.
* In 2.sql, write a SQL query to list the names of all songs in increasing order of danceability.
  * Your query should output a table with a single column for the name of each song.
* In 3.sql, write a SQL query to list the names of the top 5 oldest songs, in ascending order of release year.
  * Your query should output a table with a single column for the name of each song.
* In 4.sql, write a SQL query that lists the names of any songs that have danceability, energy, and valence greater than 0.75.
  * Your query should output a table with a single column for the name of each song.
* In 5.sql, write a SQL query that returns the average energy of all the songs.
  * Your query should output a table with a single column and a single row containing the average energy.
* In 6.sql, write a SQL query that lists the names of songs that are by Post Malone.
  * Your query should output a table with a single column for the name of each song.
  * You should not make any assumptions about what Post Malone’s artist_id is.
* In 7.sql, write a SQL query that returns the average energy of songs that are by The Weeknd.
  * Your query should output a table with a single column and a single row containing the average energy.
  * You should not make any assumptions about what The Weeknd’s artist_id is.
* In 8.sql, write a SQL query that lists the names of the songs that feature multiple artists.
  * Your query should output a table with a single column for the name of each song.

## Hints

See [this SQL keywords reference](https://www.w3schools.com/sql/sql_ref_keywords.asp) for some helpful hints.

## Testing

```md
check50 scienceacademy/problems/2023ap/songs
```

## How to Submit

```md
submit50 scienceacademy/problems/2023ap/songs
```
