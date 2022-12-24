const palindromes = function (string) {
    let l = 0, r = string.length-1;
    while(l < r){
        if(string.charAt(l).toUpperCase() == string.charAt(l).toLowerCase()){
            l++;
            continue;
        }
        if(string.charAt(r).toUpperCase() == string.charAt(r).toLowerCase()){
            r--;
            continue;
        }
        if(string.charAt(l).toLowerCase() !== string.charAt(r).toLowerCase()){
            return false;
        }
        l++;
        r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
