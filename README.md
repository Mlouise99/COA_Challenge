# COA_Challenge

This is the  photo Gallery and I built it using HTML and Css, so when you click or hover on an image it will displayed additional details of that image and also this photo gallery can be viewed or displayed in  different screen size like desktop ,laptop and mobile phone

Here is the link of photo Gallery
https://mlouise99.github.io/COA_Challenge/

# Coding Challenge Solutions
#  explaination for challenge1
The SubarrayWithTargetSum function checks if there exists a contiguous subarray within the given array whose elements sum up to the specified target.

Parameters
arr: An array of integers.
target: The target sum that the subarray should achieve.
Behavior
The function initializes two pointers, start and end, both initially pointing to the beginning of the array (start = 0).
It also initializes a variable currentSum to keep track of the sum of elements in the current subarray.
The function iterates through the array using the end pointer.
At each iteration, it adds the value of the current element to currentSum.
If currentSum exceeds the target, the function enters a while loop to shrink the subarray from the beginning by incrementing the start pointer until currentSum becomes less than or equal to the target.
If currentSum becomes equal to the target at any point, the function returns true, indicating that a subarray with the target sum exists.
If the loop completes without finding a subarray with the target sum, the function returns false.
Usage
