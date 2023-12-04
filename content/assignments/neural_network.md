---
title: "Experimenting with ML"
date: 2023-12-01T13:55:45-07:00
draft: false
---

Experiment with neural network performance.
<!--more-->

Your task is to explore how changing various parameters of a neural network affects its performance. You will use the [MNIST](https://en.wikipedia.org/wiki/MNIST_database) dataset for this purpose, focusing on the classification of handwritten digits.

![data image](/web/MnistExamplesModified.png)

## Instructions

1. **Set Up Your Environment**
    - Install the required libraries using pip:

     ```md
     pip install scikit-learn pandas
     ```

    - In the terminal window, run

    ```md
    wget https://scienceacademy.github.io/web/ml.zip
    ```

     to download a zip file of the code.

    - In the terminal window, run `unzip ml.zip` to unzip (decompress) the file.
    - In the terminal window, run `cd ml` to change directories into your `ml` directory.
    -
2. **Understand the Code**
   - Begin by examining the provided code, which is commented by section.
     - Data loading and preprocessing.
     - Neural network model creation (`MLPClassifier`).
     - Model training and evaluation.
   - Run the code to ensure it works and that you understand the output.
   - To see the graphical output, select "GUI" from the "CS50" menu on the left side of your IDE. Clicking the "X" on the window, or pressing <Ctrl-C> in the Terminal will end the program.

3. **Parameter Experimentation**
   - Your main task is to experiment with the neural network's parameters and observe the effects on model accuracy and training time.
   - Make changes to one parameter at a time and record your findings. Here are the parameters to experiment with:
     - **Number of Neurons in the Hidden Layer**: Try different sizes for `hidden_layer_sizes`, e.g., `(30,)`, `(100,)`, or `(50, 50)`.
     - **Number of Hidden Layers**: Modify the `hidden_layer_sizes` to add or remove layers, e.g., `(50, 30, 20)`.
     - **Maximum Number of Iterations (`max_iter`)**: Adjust this value to see how longer or shorter training periods affect performance. Try values like `10`, `50`, or `100`.
     - **Learning Rate (`learning_rate_init`)**: Experiment with different learning rates, e.g., `0.01`, `0.001`.
     - **Regularization Term (`alpha`)**: Adjust the regularization to see its impact. Test values like `1e-4`, `1e-3`.

4. **Record Your Observations**
   - Record your results in a copy of this spreadsheet: [ML Experiments Data Sheet](https://docs.google.com/spreadsheets/d/1rQLndy0Ll2HU7fTBvTjDWmND_3Lr2borqWWH3xIK7VE/edit?usp=sharing)
   - For each parameter adjustment, record:
     - The change you made.
     - The model's accuracy.
     - Any notable changes in training time.
     - Your observations and conclusions about each change.

5.  **Report Your Conclusions**
    - In the "Conclusions" tab of the data sheet, compile your observations into a brief report. Include your hypotheses on why certain parameters had the impacts they did.

## Guidelines

- **One Change at a Time**: To clearly understand the impact of each parameter, be sure to change only one parameter at a time.
- **Document Your Findings**: Keeping a detailed record of your experiments is crucial. It will help in understanding the outcomes and in discussions.
- **Explore and Think Critically**: Don't hesitate to try wide-ranging values for parameters. Use critical thinking to analyze why certain changes affect the model as they do.

## Conclusion

This exercise is a hands-on opportunity to understand the workings of neural networks. Your explorations and findings will contribute to a deeper understanding of how different parameters influence a neural network's learning process and performance. Happy experimenting!
