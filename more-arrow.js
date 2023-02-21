const add = (first,second) => first + second;
const getFullName = (first,last) => first + " " + last;
const multiply = (a,b) => a * b;

const resutl = multiply(5,7);
// console.log(resutl);

const addAll = (a,b,c,d,e,f) => a+b+c+d+e+f;

// no perameter arrow function 
const getPie = () => 3.1416;

// one perameter 
const doubleIt = (num) => num * 2;

// one perameter simple versoin 
const fiveTimes = num => num * 5;


// multi line arrow function 
// if you want to return something use return 
const doMath = (x,y,z) => {
    const first = x + y;
    const second = y + z;
    const multi = first * second;
    const resutl = multi / 2;
    return resutl;
}