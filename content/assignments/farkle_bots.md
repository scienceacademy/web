---
title: "Farkle Bots"
date: 2025-03-20T13:55:45-07:00
draft: true
---
Write a bot to play Farkle.
<!--more-->

In this assignment, you will create an AI bot that plays the dice game Farkle. Your bot will compete in a tournament against bots created by other students.

## The Game

Farkle is a dice game where players take turns rolling six dice and scoring points based on certain combinations. The goal is to be the first player to reach 10,000 points.

Basic Rules:

* Players take turns rolling six dice
* After each roll, the player must set aside at least one scoring die or combination
* The player can either roll the remaining dice to try to score more points or bank their current turn's points
* If a roll produces no scoring dice, the player "farkles" and loses all points accumulated in that turn
* A player must score at least 500 points in a turn before they can start banking points

## Task

1. Create a bot file - extend the `FarkleBot` base class to create your own bot. Name it with your real name (ex: `BradfieldBot`)
2. Develop a decision making strategy for your bot.
3. Test your bot by running it against an example bot.
4. Submit your bot and it will battle against the others.

## Getting started

Copy the `bot_template.py` file and rename it for your own bot. This is the only file you need to edit.

Your bot must implement the `make_decision` method:

```py
def make_decision(self, state: TurnState) -> BotDecision:
    """
    Make a decision based on the current game state

    Args:
        state: The current turn state

    Returns:
        A BotDecision object with which dice to keep and whether to roll again
    """
```

The `TurnState` object contains all the information your bot needs to make its decision:

* `current_dice` - a list of dice values [1-6]
* `remaining_dice` - the number of dice being rolled
* `turn_score` - accumulated score for this turn
* `banked_score` - your bot's current banked score
* `opponent_score` - the opponent's banked score

Return a BotDecision object with:

* `dice_to_keep` - a list of dice values to keep (must be scorable)
* `roll_again` - boolean value indicating whether to role again (`True`) or end turn (`False`)

### Helper functions

* `FarkleGame.find_scorable_combinations(dice)` - Returns all valid scoring combinations for a set of dice
* `FarkleGame.calculate_score(dice)` - Calculates the score for a set of dice

## Example Bots

The setup includes two example bots you can look at for reference:

* `SimpleBot` - makes basic decisions
* `ConservativeBot` - plays conservatively, banking after any score

## Testing your bot

You also have a program called `test.py` that will run your bot against `SimpleBot` and show what it's doing.

## Submitting your bot

*Instructions TBD*