const removeFromArray = function(...args) {
    const array = args[0];
    const res = [];
    array.forEach(item => {
        if(!args.includes(item)){
            res.push(item);
        }
    });
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
