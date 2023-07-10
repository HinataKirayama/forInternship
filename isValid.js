const isValid = (s) => {
    let stack = [];
    let bracketMapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for(let i = 0; i < s.length; i++) {
        if(s[i] in bracketMapping) {
            if(stack.length === 0 || stack[stack.length - 1] !== bracketMapping[s[i]]) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length === 0;
}

let s = '()';
console.log(isValid(s)); // true

s = '({)}'
console.log(isValid(s)); // false