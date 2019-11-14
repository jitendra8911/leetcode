var minRemoveToMakeValid = function(s) {
    let arr = [];
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            arr.push(i);
            stack.push('(');
        } else if (s[i] == ')') {
            if (stack.includes('(')) {
                stack.pop();
                arr.pop();
            } else {
                arr.push(i);
            }
        } 
    }
    let newStr = "";
    for (let i = 0; i < s.length; i++) {
        if (arr.includes(i)) continue;
        newStr += s[i];
    }
    
    return newStr;
    
};

var minRemoveToMakeValid1 = (s, t=[], del=new Set(), stack=[]) => {
    for (let i=0; i < s.length; ++i) {
        if (s[i] == '(')
            stack.push(i);
        if (s[i] == ')') {
            if (stack.length == 0)
                del.add(i);
            else
                stack.pop();
        }
    }
    stack.forEach(i => del.add(i));
    for (let i=0; i < s.length; ++i)
        if (!del.has(i))
            t.push(s[i]);
    return t.join('');
};

console.log(minRemoveToMakeValid1("("));


