---
title: "World Cup"
date: 2022-11-06T13:55:45-07:00
draft: true
---
Write a program to run simulations of the FIFA World Cup.
<!--more-->

In the soccer World Cup, the knockout round consists of 16 teams. In each round, each team plays another team and the losing teams are eliminated. When only two teams remain, the winner of the final match is the champion.

Soccer teams are assigned [FIFA Ratings](https://en.wikipedia.org/wiki/FIFA_World_Rankings#Current_calculation_method), which are numerical values representing each team’s relative skill level. A higher FIFA rating indicates better previous game results, and given two teams’ FIFA ratings, it’s possible to estimate the probability that either team wins a game based on their current ratings. The FIFA Ratings from just before two previous World Cups are available:

* [May 2018 Men’s FIFA Ratings](https://www.fifa.com/fifa-world-ranking/ranking-table/men/rank/id12189/)
* [March 2019 Women’s FIFA Ratings](https://www.fifa.com/fifa-world-ranking/ranking-table/women/rank/ranking_20190329/)

Using this information, we can simulate the entire tournament by repeatedly simulating rounds until we’re left with just one team. And if we want to estimate how likely it is that any given team wins the tournament, we might simulate the tournament many times (>1000 simulations) and count how many times each team wins a simulated tournament.

## Getting Started

1. Log into your CS50 Codespace.
2. In the terminal window, run

```md
wget https://scienceacademy.github.io/web/worldcup.zip
```

 to download a zip file of the starter code.

3. In the terminal window, run `unzip worldcup.zip` to unzip the file.
4. In the terminal window, run `cd worldcup` to change directories into your `worldcup` directory.

## What's provided

Start by looking at the `2018m.csv` file. This file contains the 16 teams in the knockout round of the 2018 Men’s World Cup and the ratings for each team. Notice that the CSV file has two columns, one called `team` (representing the team’s country name) and one called `rating` (representing the team’s rating).

The order in which the teams are listed determines which teams will play each other in each round (in the first round, for example, Uruguay will play Portugal and France will play Argentina; in the next round, the winner of the Uruguay-Portugal match will play the winner of the France-Argentina match). Do not edit the order in which teams appear in this file!

In Python, we can represent each team as a dictionary that contains two values: the team name and the rating. Uruguay, for example, would appear as `{"team": "Uruguay", "rating": 976}`.

Next, see `2019w.csv`, which contains data formatted the same way for the 2019 Women’s World Cup.

Now, open `tournament.py`, where some code has already been written for you. The variable `N` at the top represents how many World Cup simulations to run: in this case, `1000`.

The `simulate_tournament()` function accepts a list of teams (in a variable called `teams`) as input, and repeatedly calls `simulate_round()` to simulate a round of play until only one team remains.

In the main function, we first ensure that `len(sys.argv)` (the number of command-line arguments) is `2`. The command line argument will determine which CSV file to use to run the tournament simulation. Next is a list called `teams` (which will eventually be a list of teams) and a dictionary called `counts` (which will associate team names with the number of times that team won a simulated tournament). Right now they’re both empty, so populating them is left up to you.

Finally, at the end of `main()`, we sort the teams in descending order of how many times they won simulations (according to `counts`) and print the estimated probability that each team wins the World Cup.

Populating `teams` and `counts` and writing the `simulate_round()` and `simulate_game()` functions are left up to you.

## Implementation Details

Complete `tournament.py`.

First, in `main()`, read the team data from the CSV file and add each team to the list `teams`.

* The file to use will be provided as a command-line argument. You can access the name of the file, then, with `sys.argv[1]`.
* You can open a file with `open(filename)`, where `filename` is a variable storing the name of the file.
* Once you have a file `f`, you can use `csv.DictReader(f)` to give you a “reader”: an object in Python that you can loop over to read the file one row at a time, treating each row as a dictionary.
* By default, all values read from the file will be strings. So be sure to first convert the team’s `rating` to an `int`.
* Append each team’s dictionary to `teams`.
* Remember that each team should be a dictionary with a `team` name and a `rating`.

Next, implement the `simulate_game()` function. This function should accept as input two teams and return `True` if team 1 wins, and `False` otherwise.

* `team1` and `team2` are dictionaries from the `teams` list.
* The probability of `team1` beating `team2` based on each team's `rating` can be found with this formula:

```python
probability = 1 / (1 + 10 ** ((rating2 - rating1) / 600))
```

* You can get a random number between `0` and `1` with `random.random()`.

Next, implement the `simulate_round()` function. This function simulates one round of play. It takes as input a list of teams that are playing in the round, and returns a list of the winners.

* Remember that the returned list of `winners` will always be half the size of the list of `teams` that are playing in the round!

Finally, back in the `main()` function, run `N` tournament simulations, and keep track of how many times each team wins in the `counts` dictionary.

* For example, if Uruguay won 2 tournaments and Portugal won 3, then your `counts` dictionary should be `{"Uruguay": 2, "Portugal": 3}`.
* You should call `simulate_tournament()` to simulate each tournament and determine the winner.
* You can use the `in` keyword in Python to check if a dictionary has a particular key already. For example, `if "Portugal" in counts:` would check to see if `"Portugal"` already has a value in the `counts` dictionary.

## Testing

Your program should behave as below. Since simulations involve randomness, your output may not match these examples exactly.

```md
$ python tournament.py 2018m.csv
Belgium: 20.9% chance of winning
Brazil: 20.3% chance of winning
Portugal: 14.5% chance of winning
Spain: 13.6% chance of winning
Switzerland: 10.5% chance of winning
Argentina: 6.5% chance of winning
England: 3.7% chance of winning
France: 3.3% chance of winning
Denmark: 2.2% chance of winning
Croatia: 2.0% chance of winning
Colombia: 1.8% chance of winning
Sweden: 0.5% chance of winning
Uruguay: 0.1% chance of winning
Mexico: 0.1% chance of winning

$ python tournament.py 2019w.csv
Germany: 17.1% chance of winning
United States: 14.8% chance of winning
England: 14.0% chance of winning
France: 9.2% chance of winning
Canada: 8.5% chance of winning
Japan: 7.1% chance of winning
Australia: 6.8% chance of winning
Netherlands: 5.4% chance of winning
Sweden: 3.9% chance of winning
Italy: 3.0% chance of winning
Norway: 2.9% chance of winning
Brazil: 2.9% chance of winning
Spain: 2.2% chance of winning
China PR: 2.1% chance of winning
Nigeria: 0.1% chance of winning
```

In case you're wondering, here's what actually happened at the actual tournaments:

* In the 2018 Men's World Cup, France won, defeating Croatia in the final. Belgium defeated England for third place.
* In the 2019 Women's World Cup, the United States beat the Netherlands in the final. England defeated Sweden to finish third.

Execute the below to evaluate the correctness of your code using `check50`.

```md
check50 scienceacademy/problems/2023ap/worldcup
```

# **IMPORTANT**
In order to successfully run `check50`, you'll need to make sure the last 2 lines of your program are as follows:

```python
if __name__ == "__main__":
    main()
```

## How to Submit

```md
submit50 scienceacademy/problems/2023ap/worldcup
```
