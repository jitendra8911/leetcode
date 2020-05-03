/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let stack = [];
    let output = '';
    let map = {
        '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f', '7': 'g', '8': 'h', '9': 'i',
        '10#': 'j', '11#': 'k', '12#': 'l', '13#': 'm', '14#': 'n', '15#': 'o',
        '16#': 'p', '17#': 'q', '18#': 'r', '19#': 's', '20#': 't', '21#': 'u', '22#': 'v', '23#': 'w', '24#': 'x',  '25#': 'y', '26#': 'z'
    };
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        if (s[i] === '#') {
            let j = 1;
            let temp = '';
            temp = s[i-2] + s[i-1] + s[i];
            stack.pop();
            stack.pop();
            stack.pop();
            stack.push(map[temp]);
        }
    }

    while (stack.length > 0) {
        let c = stack.shift();
        if (map[c]) {
            output = output.concat(map[c]);
        } else {
            output = output.concat(c);
        }
    }

    return output;

};

console.log(freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"));