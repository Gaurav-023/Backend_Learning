/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    value = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    value1 = value.split("").reverse().join("");
    if(value == value1)
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(isPalindrome("naN naasn nan"))
module.exports = isPalindrome;