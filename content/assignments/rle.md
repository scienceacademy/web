---
title: "Run Length Encoding (RLE)"
date: 2025-11-16T12:55:45-07:00
draft: false
---
Implement RLE in Python.
<!--more-->

Run-length encoding (RLE) is a simple form of data compression that encodes consecutive repeated values as counts. For black and white images, we represent black pixels as 0 and white pixels as 1.

In this "white-first" RLE variant:

- We ALWAYS start counting with white pixels (1s)

- If the image starts with black pixels (0s), we add a count of 0 white pixels first

- The encoded data will be a list of counts that alternate between white and black runs

- The list will always have an even length (white count, black count, white count, etc.)

For example, the sequence:

    0 0 0 0 1 1 1 0 0 0
Would be encoded as:

    [0, 4, 3, 3]
Meaning: 0 whites, then 4 blacks, then 3 whites, then 3 blacks

The example code will print the original, compressed, and uncompressed image, and show you the compression ratio.

You can find the starter code here:

https://github.com/scienceacademy/apcsp2025/blob/main/rle.py

Task:

1. Complete the encode_rle() function to compress a 2D binary image

2. Complete the decode_rle() function to decompress RLE data back to a 2D image

You can uncomment the "run_test_cases()" line at the end to test if your code is working.

Try your code with the following test images. Can you see why the compression ratios are so different?

```md
test_image = [
[0, 0, 0, 0, 1, 1, 1, 1],
[0, 0, 0, 0, 1, 1, 1, 1],
[1, 1, 1, 1, 0, 0, 0, 0],
[1, 1, 1, 1, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 1, 1, 1],
[0, 0, 0, 0, 1, 1, 1, 1],
[1, 1, 1, 1, 0, 0, 0, 0],
[1, 1, 1, 1, 0, 0, 0, 0]

]
test_image = [
[1, 1, 0, 0, 0, 0, 1, 1],
[1, 0, 1, 1, 1, 1, 0, 1],
[0, 1, 0, 1, 1, 0, 1, 0],
[0, 1, 1, 1, 1, 1, 1, 0],
[0, 1, 0, 1, 1, 0, 1, 0],
[0, 1, 1, 0, 0, 1, 1, 0],
[1, 0, 1, 1, 1, 1, 0, 1],
[1, 1, 0, 0, 0, 0, 1, 1]
]

test_image = [
[1, 1, 1, 0, 0, 1, 1, 1],
[1, 1, 0, 0, 0, 0, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 1],
[0, 0, 1, 0, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 0, 1, 1, 0, 1, 1],
[1, 0, 1, 0, 0, 1, 0, 1],
[0, 1, 1, 1, 1, 1, 1, 0]
]
```