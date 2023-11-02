---
title: "Video poker ♥ ♣ ♠ ♦"
date: 2023-11-01T13:55:45-07:00
draft: false
---

Implement a program that runs a game of video poker.
<!--more-->

Poker is a popular card game that comes in many forms: draw, stud, Texas Hold'em, and many more. Typically, poker is played by multiple players, betting against each other.

Video poker is a popular single player casino game based on 5-card draw poker.

The game works like this:

1. The player places a bet.
2. The player receives a hand of 5 cards.
3. The player chooses any number of cards to hold.
4. Unheld cards are replaced by newly dealt cards.
5. The final hand is scored and the player wins or loses their bet, based on the game's pay table.

## Poker hands

Poker hands are ranked by the relative rarity of the combinations. The order is as follows (best to worst):

* Straight flush  - Ex: 10♥ 9♥ 8♥ 7♥ 6♥
* Four of a kind  - Ex: 9♥ 9♣ 9♠ 9♦ J♦
* Full house  - Ex: 4♦ 4♣ J♦ J♣ J♠
* Flush  - Ex: 3♣ 10♣ 8♣ K♣ J♣
* Straight  - Ex: K♣ Q♦ J♥ 10♣ 9♥
* Three of a kind  - Ex: 7♥ 7♠ 7♣ J♠ 6♥
* Two pair  - Ex: K♣ K♥ 10♦ 10♠ 2♣
* One pair  - Ex: Q♠ Q♦ 8♥ 4♠ A♣
* High card - Ex: 7♠ 5♥ Q♦ 4♣ A♠

## Payout table

There are many possible payout tables for video poker. Typically, they change based on the size of the bet. For our purposes, we'll keep things simple and just have a single table. The player wins their bet amount multiplied by the following number:

| Hand | Payout |
| ---------|----
| Royal flush | 250
| Straight flush |  50
| Four of a kind |  25
| Full house |  9
| Flush |  6
| Straight |  4
| Three of a kind |  3
| Two Pair |  2
| One pair (Jacks or higher) |  1

Any other hands pay 0.

## Getting Started

1. In the terminal window, run

```md
wget https://scienceacademy.github.io/web/poker.zip
```

 to download a zip file of the code.

3. In the terminal window, run `unzip poker.zip` to unzip (decompress) the file.
4. In the terminal window, run `cd poker` to change directories into your `poker` directory.

## Specification

* Create a new file called `vp.py`.

* Your program should use the included `cards.py`, which contains the `Card` and `Deck` classes we discussed in class. **You may not make any changes to this file** (it won't be submitted).

* The player should start with $100 in funds.

* Before each hand, the player can choose any amount to bet, up to their current funds.

* Deal the player a hand of 5 cards and display them, along with an index of 0-5. You can then ask the player for a list of which cards they'd like to hold. Player's input will be a string, such as `"124"`, indicating that they wish to hold cards 1, 2, and 4.

* Replace each card that was not held with a new card. This is the player's final hand.

* Score the hand and, if it's a winning hand, add the winnings to the player's funds.

* If the player's funds are $0, end the game.

* Finally, ask the player if they'd like to play again. If they don't, display their final winnings. If they do, reset the deck and repeat.

* Don't forget to shuffle the deck before dealing each hand.

## Hints

* This program has several parts - it's easier if you break it down and complete one at a time:
  * Dealing cards to the player and letting them draw new cards
  * Repeating the game until the player runs out of money (or chooses to quit)
  * Scoring the poker hand (this is the trickiest part of the assignment)

* You may find it helpful to define a `Hand` class to handle all the functionality of the player's hand (holding cards, replacing cards, scoring).

* You may find the `collections` library helpful in your hand scoring algorithm: <https://docs.python.org/3/library/collections.html>

* To clear the screen as done in the example program, import `system` from the `os` library. You can then use `system("clear")` to clear the terminal screen during gameplay.

## Example

Included in the distribution file is a compiled version of the game coded in C. You can run it with:

```bash
./vp
```

### Random seed

In order to properly check for the correct output, your submission needs to use a known "random" sequence. Before submitting, make sure to seed your program's RNG with the following seed: `581321`.

You can set the seed with the `seed` function from random `random` library.

## How to Test Your Code

There's no `check50` for this assignment. Make sure to run and test your program yourself to make sure its output and behavior matches the example program.

## How to Submit

```
submit50 scienceacademy/problems/2023ap/poker
```