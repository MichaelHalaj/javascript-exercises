const removeFromArray = function(array) {
    for(let i = 1; i < arguments.length; i++){
        const left = array.slice(0, arguments[i]-1);
        const right = array.slice(arguments[i]);
        array = left.concat(right);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
