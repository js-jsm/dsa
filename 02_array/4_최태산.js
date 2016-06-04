const arr = [];

arr.push('hello world !!'.split(''));
arr.push('time is 01:49 !!'.split(''));
arr.push('give me the hot six !!'.split(''));

console.log(
    arr.map((arr) => arr.join('')).join('')
);