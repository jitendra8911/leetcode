var toHexspeak = function(num) {
    let hexSpeakArr = [];
    let hexSpeakStr = '';
    while (num > 0) {
        const rem = num % 16;
        if (rem >= 2 && rem <= 9) return "ERROR";
        if (rem === 0) hexSpeakArr.push('O');
        if (rem === 1) hexSpeakArr.push('I');
        if (rem === 10) hexSpeakArr.push('A');
        if (rem === 11) hexSpeakArr.push('B');
        if (rem === 12) hexSpeakArr.push('C');
        if (rem === 13) hexSpeakArr.push('D');
        if (rem === 14) hexSpeakArr.push('E');
        if (rem === 15) hexSpeakArr.push('F');
        num = parseInt(num/16);
    }
    
    while (hexSpeakArr.length) {
        const str = hexSpeakArr.pop();
        hexSpeakStr = hexSpeakStr.concat(str);
    }
    return hexSpeakStr;
};

console.log(toHexspeak(257))