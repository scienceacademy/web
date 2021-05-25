---
title: "Video poker ♥ ♣ ♠ ♦"
date: 2021-04-20T13:55:45-07:00
draft: false
---
Implement a program that runs a game of video poker.
<!--more-->

Poker is a popular card game that comes in many forms: draw, stud, Texas Hold'em, and many more. Typically, poker is played by multiple players, betting against each other.

Video poker is a popular casino game based on 5-card draw poker.

The game works like this:

1. The player places a bet.
1. The player receives a hand of 5 cards.
1. The player chooses any number of cards to hold.
1. Unheld cards are replaced by newly dealt cards.
1. The final hand is scored and the player wins or loses their bet, based on the game's pay table.

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

## Specification

* The player should start with $100 in funds.

* Before each hand, the player can choose any amount to bet, up to their current funds.

* Deal the player a hand of 5 cards and display them, along with an index of 0-5. You can then ask the player for a list of which cards they'd like to hold. Player's input will be a string, such as `"124"`, indicating that they wish to hold cards 1, 2, and 4.

* Replace each card that was not held with a new card. This is the player's final hand.

* Score the hand and, if it's a winning hand, add the winnings to the player's funds.

* If the player's funds are $0, end the game.

* Finally, ask the player if they'd like to play again. If they don't, display their final winnings. If they do, shuffle the deck and repeat.

* Don't forget to shuffle the deck before dealing each hand.

## Payout table

There are many possible payout tables for video poker. Typically, they change based on the size of the bet. For our purposes, we'll keep things simple and just have a single table. The player wins their bet amount multiplied by the following number:

| Hand | Payout |
| ---------|----
| Straight flush |  50
| Four of a kind |  25
| Full house |  9
| Flush |  6
| Straight |  4
| Three of a kind |  3
| Two Pair |  2
| One pair (Jacks or higher) |  1

Any other hands pay 0.

## Example

You can play a free example game here:

[https://www.freeslots.com/poker.htm](https://www.freeslots.com/poker.htm)

You can also download an example completed assignment here:

[vp.zip](/web/vp.zip)

## Implementation

You may write this program in Python or C. Name your program `vp.py` or `vp.c`.

### Random seed

In order to properly check for the correct output, your submission needs to use a known "random" sequence. Before submitting, make sure to seed your program's RNG with the following seed: `581321`.

## How to Test Your Code

Execute the below to check the correctness of your code using `check50`. But be sure to compile and test it yourself as well!

```
check50 scienceacademy/problems/2020ap/poker
```

Execute the below to evaluate the style of your code using `style50`.

```
style50 [poker.c | poker.py]
```

## How to Submit

Execute the below, logging in with your GitHub username and password when prompted.

```
submit50 scienceacademy/problems/2020ap/poker
```