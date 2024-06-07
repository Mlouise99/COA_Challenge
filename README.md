# COA_Challenge

This is the  photo Gallery and I built it using HTML and Css, so when you click or hover on an image it will displayed additional details of that image and also this photo gallery can be viewed or displayed in  different screen size like desktop ,laptop and mobile phone devices

Here is the link of photo Gallery
https://mlouise99.github.io/COA_Challenge/

# Coding Challenge Solutions

## Challenge 1: Array Manipulation
## explanation
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

This is the function checks if there is a contiguous subarray within the given array `arr` that has a sum equal to the `target`.

function SubarrayWithTargetSum(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

// this is the sample test to test if it give me the expected output
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(SubarrayWithTargetSum(arr, target));
## Here below are outpout of challenge1
 true

## Challenge 2: explanation of String Transformation
The transformString function takes a string as input and performs different transformations based on the length of the string.
Parameters
str: A string to be transformed.
Behavior
If the length of the string is divisible by 15:

The function reverses the string.
Each character in the reversed string is converted to its ASCII code.
The ASCII codes are returned as a string, with each code separated by spaces.
If the length of the string is divisible by 5:

Each character in the string is converted to its ASCII code.
The ASCII codes are returned as a string, with each code separated by spaces.
If the length of the string is divisible by 3:

The function reverses the string and returns the reversed string.
If none of the above conditions are met:

The original string is returned.

function transformString(str) {
    const len = str.length;
    
    if (len % 15 === 0) {
        console.log("The length is divisible by 15.");
        
        const reversedStr = str.split('').reverse().join('');
        console.log("Reversed string:", reversedStr);
        
        const asciiCodes = reversedStr.split('').map(char => char.charCodeAt(0)).join(' ');
        console.log("ASCII codes:", asciiCodes);
        
        return asciiCodes;
    } 
    
    if (len % 5 === 0) {
        console.log("The length is divisible by 5.");
        
        const asciiCodes = str.split('').map(char => char.charCodeAt(0)).join(' ');
        console.log("ASCII codes:", asciiCodes);
        
        return asciiCodes;
    } 
    
    if (len % 3 === 0) {
        console.log("The length is divisible by 3.");
        
        const reversedStr = str.split('').reverse().join('');
        console.log("Reversed string:", reversedStr);
        
        return reversedStr;
    }
    
    console.log("The length is not divisible by 3, 5, or 15.");
    return str;
}
// this is the sample Test used to test if the result are successfull
console.log("Result for 'Hamburger':", transformString("Hamburger"));        
console.log("Result for 'Pizza':", transformString("Pizza"));                
console.log("Result for 'Chocolate Chip Cookie':", transformString("Chocolate Chip Cookie")); 
# Here below are outpout of challenge2
The length is divisible by 3.
Reversed string: regrubmaH
Result for 'Hamburger': regrubmaH
The length is divisible by 5.
ASCII codes: 80 105 122 122 97
Result for 'Pizza': 80 105 122 122 97
The length is divisible by 3.
Reversed string: eikooC pihC etalocohC
Result for 'Chocolate Chip Cookie': eikooC pihC etalocohC
