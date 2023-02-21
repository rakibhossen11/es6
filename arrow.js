function add(first=0,second=0){
    const result = first + second;
    return result;
}

const sum = add(10,20);
// console.log(sum);


// function expression
const add1 = function add1(num1,num2){
    const result = num1+num2;
    return result;
}
// function expression with anonemous function
const add2 = function (num1,num2){
    const result = num1+num2;
    return result;
}

function add4(first,second){
    return first + second;
}

const add5 = function (first,second){
    return first + second;
}

//  arrow function 
const add6 = (first,second) => first + second;

// interview question : differences between functin declaration,function expressoin and arrow function