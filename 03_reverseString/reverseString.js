const reverseString = function(string) {
    let arr = string.split('');
    let l = 0, r = arr.length-1;
    while(l < r){
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
