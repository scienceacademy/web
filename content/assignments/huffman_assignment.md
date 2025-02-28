---
title: "Huffman Encoding: Assignment"
date: 2025-02-27T15:55:45-07:00
draft: false
---

In this assignment, you will implement Huffman coding, a lossless data compression algorithm that assigns variable-length codes to input characters based on their frequencies.
<!--more-->

## Learning Objectives

In this assignment you will:
- Understand the principles of lossless compression
- Implement a Huffman tree data structure
- Apply frequency analysis to text
- Generate optimal prefix codes
- Encode and decode text using Huffman coding

## Huffman Algorithm: Step-by-Step Description

See the detailed explanation here:

[Huffman Coding: Algorithm Guide](/web/assignments/huffman_guide/)


## Assignment Requirements

### Part 1: Huffman Tree Construction

1. Use the provided `HuffmanNode` class
2. Complete the `build_huffman_tree` function that:
   - Creates a leaf node for each character
   - Uses a priority queue to build the tree
   - Returns the root of the Huffman tree

### Part 2: Code Generation

1. Complete the `generate_codes` function to traverse the Huffman tree and create codes
2. Store the codes in a dictionary mapping characters to their binary codes

### Part 4: Encoding and Decoding

1. Implement the `encode` function to convert text to Huffman codes
2. Implement the `decode` function to convert encoded bits back to text

## Testing

The provided code will display the following to help you troubleshoot:

* Character frequency count
* Assigned Huffman codes
* Encoded text
* Decoded text (and whether they match)
* A visualization of your Huffman tree
* Some statistics about the efficiency of the compression

## Sample Texts for Testing

Test your code with the following:

### Simple test:

```
hello world
```

### English text:

```
The quick brown fox jumps over the lazy dog. The five boxing wizards jump quickly. How vexingly quick daft zebras jump!
```

### Repeated patterns:

```
aaaaaabbbbbccccddeeeeeeeeeeeee
```

### Code snippet:

```
def hello_world():
    print("Hello, World!")
    return True
```

## Hints and Tips

### Using the `heapq` Module

The Python `heapq` module provides an efficient implementation of the min-heap data structure, perfect for building Huffman trees:

1. **Importing the module**:

   ```python
   import heapq
   ```

2. **Creating and using a heap**:

   ```python
   # Create nodes
   nodes = [HuffmanNode('a', 10), HuffmanNode('b', 5), HuffmanNode('c', 15)]

   # Convert list to a heap
   heapq.heapify(nodes)  # Optional step when starting with a list

   # Add an element to the heap
   heapq.heappush(nodes, HuffmanNode('d', 7))

   # Get and remove the smallest element
   smallest_node = heapq.heappop(nodes)
   ```

3. **Important note**: The `heapq` module requires that elements can be compared. For your `HuffmanNode` class, you need a `__lt__` method (less than) to define how nodes should be compared:

   ```python
   def __lt__(self, other):
       # Compare nodes based on frequency
       return self.freq < other.freq
   ```

### Other Helpful Tips

- Think recursively when generating codes and traversing the tree
- Test with simple examples first before moving to more complex texts
- Remember to handle edge cases (empty strings, single character texts)
- For debugging, print the tree structure at each step

## Bonus Challenges (Optional)

- Add support for compressing/decompressing actual text files
- Compare your implementation with Python's built-in compression libraries (like `zlib`)
