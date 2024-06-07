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

console.log("Result for 'Hamburger':", transformString("Hamburger"));        
console.log("Result for 'Pizza':", transformString("Pizza"));                
console.log("Result for 'Chocolate Chip Cookie':", transformString("Chocolate Chip Cookie")); 
