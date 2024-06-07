function transformString(str) {
    const len = str.length;
    if (len % 15 === 0) {
        const reversedStr = str.split('').reverse().join('');
        const asciiCodes = reversedStr.split('').map(char => char.charCodeAt(0)).join(' ');
        return asciiCodes;
    }

    if (len % 5 === 0) {
        const asciiCodes = str.split('').map(char => char.charCodeAt(0)).join(' ');
        return asciiCodes;
    }


    if (len % 3 === 0) {
        return str.split('').reverse().join('');
    }


    return str;
}
console.log(" the result of Hamburger is :", transformString("Hamburger"));
console.log(" the result of Pizza is :", transformString("Pizza"));
console.log(" the result of chocolate chip cookie is :", transformString("Chocolate Chip Cookie")); 
