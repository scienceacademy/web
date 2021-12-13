---
title: "Transposition Cipher"
date: 2021-05-22T19:55:45-07:00
draft: false
---

In a transposition cipher, one rearranges the order of the letters in the text *without making substitutions*.
<!--more-->

For example, let's say the following was the cleartext we want to encrypt:

```
The story so far:
In the beginning the Universe was created.
This has made a lot of people very angry and been widely regarded as a bad move.
```

First, we'll remove all the punctuation and spaces:

```
ThestorysofarInthebeginningtheUniversewascreatedThishasmadealotofpeopleveryangryandbeenwidelyregardedasabadmove
```

This is 111 characters long. For a reason you'll soon see, let's add an extra "x" at the end to get:

```
ThestorysofarInthebeginningtheUniversewascreatedThishasmadealotofpeopleveryangryandbeenwidelyregardedasabadmovex
```

We can now write the message in a "grid" with 8 rows of 14 letters:

```
ThestorysofarI
nthebeginningt
heUniversewasc
reatedThishasm
adealotofpeopl
everyangryandb
eenwidelyregar
dedasabadmovex
```

Reading down the columns, we wind up with:

```
TnhraeedhteedveeehUaeendsentarwatbielyisoevdoadargeTtnebyirhoglasnsifrydonespyrmfiwheaeoanaaongvrgsspdaeItcmlbrx
```

This is very hard to read if you don't know which size grid was used to encrypt it. To make things even tougher, in a variant of this cipher, you rearrange the columns!

## Decrypting

To decrypt this message, you need to know which factors of 112 were used to make the grid, or else try all of them:

```
1 x 112, 2 x 56, 4 x 28, 7 x 16, 8 x 14
14 x 8, 16 x 7, 28 x 4, 56 x 2, 112 x 1
```

It would be silly to use the factors of 1, but, for example 16x7 would be:

```
Tnhraeedhteedvee
ehUaeendsentarwa
tbielyisoevdoada
rgeTtnebyirhogla
snsifrydonespyrm
fiwheaeoanaaongv
rgsspdaeItcmlbrx
```

Still nonsense. But using a size of 14x8 (opposite of the 8x14 we used to encrypt) would read:

```
Tnhraeed
hteedvee
ehUaeend
sentarwa
tbielyis
oevdoada
rgeTtneb
yirhogla
snsifryd
onespyrm
fiwheaeo
anaaongv
rgsspdae
Itcmlbrx
```

And again, reading down the columns you'll find the original message.

Can you see why we "padded" the length of the original message with the extra character? The more factors your message length has, the more possible arrangements of the grid. (You can use anything for the extra padding at the end, not just "x".)

# Challenge #4

Here's a message that's been encrypted via transposition. Can you decode it?

```
IietesoaveeredsEdeloibatnamltmbhabyleRshattvrrefgylaesodieeoteetdefinhhaeiefhLkbwetosfluhedrrbrddeedaatrtuelsoefaolgSnIoieodpmgidlaeekrieniHdrihtdmovlmeuaaneSgerehsctcoatotaeppeftnrclgdtrdsSahrhetrhnhrsesnohbsratIaoolkseeewhkeAehtrhtreauoxhmrumeyedtroxtRlDariahcisesyepfpfdwsaberx
```

The keyword for this puzzle is the 8th word you found above.

To complete the final challenges and find the remaining clues, insert each of the keywords you've found in puzzles 1-4 at the end of this URL:

`https://scienceacademy.github.io/web/<keyword>`