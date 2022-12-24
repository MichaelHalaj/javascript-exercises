const fibonacci = function(num) {
    if(num < 0) return 'OOPS';
    let num1 = 1;
    let num2 = 1;
    for(let i =2; i < num; i++){
        let temp = num2;
        num2+=num1;
        num1 = temp;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
