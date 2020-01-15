'use strict';

const x = 12;
console.log(x.toString(2));
console.log(parseInt('11111111', 7));

const parseBin = (code, base) => {
    let result = 0;
    let len = code.length;
    for (const bool of code) {
        result += bool * base ** (len - 1);
        len--;
    }
    return result;
};

console.log(parseBin('11111111', 7));
console.log(parseBin('10011011', 2));
