/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    value = str.split("").join().toLowerCase();
    vowels = ['a','e','i','o','u'];
    count = 0;
    for(i=0; i < value.length; i++)
    {
        if(vowels.includes(value[i]))
        {
            count = count + 1;
        }
    }
    return count;
}

console.log(countVowels("Hello"))
module.exports = countVowels;