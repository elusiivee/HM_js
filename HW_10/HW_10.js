// 1
let upperCase = function(text,pattern){
    return text.match(pattern);
}

console.log(upperCase('abcABC123',/[A-Z]+/g))

// 2
let delString = function(text,pattern){
    return text.replace(text.match(pattern),'');
}

console.log(delString('abcABC123',/[a-zA-Z]+/g))

// 3
let userName = function (text, pattern) {
    return pattern.test(text);
}

console.log(userName('12ABab-_fdq', /^[0-9a-zA-Z_-]{4,11}$/));
console.log(userName('a', /^[0-9a-zA-Z_-]{4,11}$/));
console.log(userName('p1pp1', /^[0-9a-zA-Z_-]{4,11}$/));
console.log(userName('asd43_34', /^[0-9a-zA-Z_-]{4,11}$/));



