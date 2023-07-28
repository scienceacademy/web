---
title: "Map Coloring"
date: 2023-03-07T13:55:45-07:00
draft: true
---

Write a program to color a map using the least number of colors.
<!--more-->

## Background

In 1852, the four-color theorem was proposed. It wasn't proven until 1976. It was the first time an important mathematical proof was made via computer programming. For this reason, for many years, it was not accepted by some mathematicians.

Your task is to write a program that uses the *greedy coloring algorithm* to color a map of the United States, as in this image:

![us 4-color map](/web/us_map_4color.png)

The greedy coloring algorithm works like this:

1. Visit each node of the graph in a predetermined order - randomly, for example.
2. Color the node using the lowest color that isn't being used by any of its neighbors.

Note that the greedy coloring algorithm is *not* guaranteed to produce a map using only 4 colors. Depending on the order in which you color the states, you may wind up using 5 or even 6 colors!

## Getting Started

1. Log into your CS50 IDE.
2. In the terminal window, run

```md
wget https://scienceacademy.github.io/web/map_colors.zip
```

 to download a zip file of the starter code.

3. In the terminal window, run `unzip map_colors.zip` to unzip the file.
4. In the terminal window, run `cd map_colors` to change directories into your `map_colors` directory.
5. Next, you need to install the correct library for map creation:

```md
pip install basemap
```

## Understanding

In your unzipped folder, you'll find the following files:

* Three files named `st99_d00.*`. These contain the geographical mapping data for creating the map image.
* `us_map.py` - this program contains the functions to output a PNG map given a dictionary of states and colors.
* `greedy_color.py` - the program you'll write to implement greedy coloring.

If you open `greedy_color.py` you'll find it already contains the following:

* A list called `state_names` containing the state names in alphabetical order, so "Alabama" is index `0` and "Wyoming" is index `47`.
* A dictionary called `graph` that contains the graph data describing each state's neighbors.
* A list called `colors` that lists what colors to use when drawing the map. Feel free to change these to whatever colors you like, but the first color (index `0`) should be left as "white" (the blank color). Your result colors should use indices `1-6`.

You can find a list of the allowed colors here:
[Matplotlib color list](<https://matplotlib.org/stable/gallery/color/named_colors.html>)

Running your code should produce the following output:

```md
$ python greedy_color.py
{'Alabama': 1, 'Arizona': 3, 'Arkansas': 1, 'California': 4, 'Colorado': 2, 'Connecticut': 2, 'Delaware': 3, 'Florida': 2, 'Georgia': 3, 'Idaho': 3, 'Illinois': 3, 'Indiana': 2, 'Iowa': 1, 'Kansas': 1, 'Kentucky': 1, 'Louisiana': 3, 'Maine': 2, 'Maryland': 4, 'Massachusetts': 3, 'Michigan': 1, 'Minnesota': 3, 'Mississippi': 2, 'Missouri': 1, 'Montana': 1, 'Nebraska': 3, 'Nevada': 2, 'New Hampshire': 2, 'New Jersey': 2, 'New Mexico': 1, 'New York': 4, 'North Carolina': 2, 'North Dakota': 3, 'Ohio': 3, 'Oklahoma': 3, 'Oregon': 1, 'Pennsylvania': 1, 'Rhode Island': 1, 'South Carolina': 1, 'South Dakota': 2, 'Tennessee': 4, 'Texas': 2, 'Utah': 1, 'Vermont': 1, 'Virginia': 3, 'Washington': 2, 'West Virginia': 2, 'Wisconsin': 2, 'Wyoming': 4}
```

In addition, a file called `us_map.png` will be created in your project folder. This will show the map with your colors applied.

### Checking and submitting

Execute the below to evaluate the correctness of your code using `check50`.

```md
check50 scienceacademy/problems/2022ap/map_colors
```

Execute the below to evaluate the style of your code using `style50`.

```md
style50 greedy_color.py
```

## How to Submit

```md
submit50 scienceacademy/problems/2022ap/map_colors
```