---
title: "Lab: Volume"
date: 2024-09-25T13:55:45-07:00
draft: true
---
Write a program to modify the volume of an audio file.
<!--more-->
```md
$ ./volume input.wav output.wav 2.0
```

## WAV Files

[WAV files](https://docs.fileformat.com/audio/wav/) are a common file format for representing audio. WAV files store audio as a sequence of "samples": numbers that represent the value of some audio signal at a particular point in time. WAV files begin with a 44-byte "header" that contains information about the file itself, including the size of the file, the number of samples per second, and the size of each sample. After the header, the WAV file contains a sequence of samples, each a single numerical value representing the audio signal at a particular point in time.

Scaling each sample value by a given factor has the effect of changing the volume of the audio. Multiplying each sample value by 2.0, for example, will have the effect of doubling the volume of the origin audio. Multiplying each sample by 0.5, meanwhile, will have the effect of cutting the volume in half.

## Types

So far, we’ve seen a number of different types in C, including `int`, `bool`, `char`, `double`, `float`, and `long`. Inside a header file called `stdint.h` are the declarations of a number of other types that allow us to very precisely define the size (in bits) and sign (signed or unsigned) of an integer. Two types in particular will be useful to us in this lab.

* `uint8_t` is a type that stores an 8-bit unsigned (i.e., not negative) integer. We can treat each byte of a WAV file’s header as a `uint8_t` value.
* `int16_t` is a type that stores a 16-bit signed (i.e., positive or negative) integer. We can treat each sample of audio in a WAV file as an `int16_t` value.

## Getting Started

1. In the terminal window, run
```md
wget https://scienceacademy.github.io/web/lab4.zip
```

 to download a zip file of the lab code.

3. In the terminal window, run `unzip lab4.zip` to unzip (decompress) the file.
4. In the terminal window, run `cd lab4` to change directories into your `lab4` directory.

## Implementation Details

Complete the implementation of `volume.c`, so that it changes the volume of the sound by a given factor.

* The program accepts three command-line arguments: `input` is the name of an audio file, `output` is the name of the new audio file to be created, and `factor` is the amount by which the volume of the original audio file should be scaled.
    * For example, if `factor` is `2.0`, then your program should double the volume of the audio file in `input` and save the newly generated audio file in `output`.
* Your program should first read the header from the input file and write the header to the output file. Recall that this header is always exactly 44 bytes long.
    * Note that `volume.c` already defines a variable for you called `HEADER_SIZE`, equal to the number of bytes in the header.
* Your program should then read the rest of the data from the WAV file, one 16-bit (2-byte) sample at a time. Your program should multiply each sample by the `factor` and write the new sample to the output file.
    * You may assume that the WAV file will use 16-bit signed values as samples. In practice, WAV files can have varying numbers of bits per sample, but we'll assume 16-bit samples for simplicity here.
* Your program, if it uses `malloc`, must not leak any memory.

### Hints

* You'll likely want to create an array of bytes to store the data from the WAV file header that you’ll read from the input file. Using the `uint8_t` type to represent a byte, you can create an array of `n` bytes for your header with syntax like

```c
uint8_t header[n];
```

replacing `n` with the number of bytes. You can then use header as an argument to `fread()` or `fwrite()` to read into or write from the header.

* You’ll likely want to create a “buffer” in which to store audio samples that you read from the WAV file. Using the `int16_t` type to store an audio sample, you can create a buffer variable with syntax like

```c
int16_t buffer;
```

You can then use `&buffer` as an argument to `fread()` or `fwrite()` to read into or write from the buffer.

* You may find the documentation for `fread()` and `fwrite()` helpful.
    * In particular, note that both functions accept the following arguments:
        * `ptr`: a pointer to the location in memory to store data (when reading from a file) or from which to write data (when writing data to a file)
        * `size`: the number of bytes in a piece of data
        * `nmemb`: the number of items of data (each of `size` bytes) to read or write
        * `stream`: the file pointer to read from or write to
    * `fread()` will return the number of items of data successfully read. You may find this useful to check for when you've reached the end of the file.

## How to Test Your Code

Your program should behave per the examples below.

```md
$ ./volume input.wav output.wav 2.0
```

When you listen to `output.wav`, it should be twice as loud as `input.wav`!


```md
$ ./volume input.wav output.wav 0.5
```

When you listen to `output.wav`, it should be half as loud as `input.wav`!

Execute the below to evaluate the correctness of your code using `check50`. But be sure to compile and test it yourself as well!

```md
check50 scienceacademy/problems/2024ap/volume
```

## How to Submit

```md
submit50 scienceacademy/problems/2024ap/volume
```