/* Exercise 1

Write a function called printPositives that takes an array and uses its forEach method to print only the positive numbers.*/

function printPositives(ary) {
    ary.forEach(function(each){
        if (each > 0) {
            console.log(each)
        };
    })
}

//printPositives([1,2,3,-4])

/* Exercise 2

Similar to the previous exercise, write a function called getPositives that takes an array and uses its filter method to return a 
new array with only the positive numbers. */

function getPositives (array) {
    var newary = [];
    array.filter(function(each){
        if (each > 0) {
            newary.push(each);
        }
       
    })
    return newary
}

//console.log(getPositives([1,2,3,-4]))

/* Exercise 3

Write a function called filterArray that takes an array AND a function as arguments. Your filter function should return a new array 
that contains only the elements where the passed function returns a truthy value.

NOTE: You are allowed to use Array.prototype.filter to answer this question. */

function isitPositive (num) {
        if (num > 0) {
            return true;
        }
       else {
           return false;
       }
}

function filterArray (array, callback) {
    var result = [];
    for(var i = 0; i < array.length; i++) {
        if(callback(array[i])) {  
            result.push(array[i]);
        }
    }
    return result;
}

//console.log(filterArray([1,2,3,-4], isitPositive))

/* 
Exercise 4

Write a function called longestWord that takes a string as argument, and returns the longest word in the string. You should use Array.prototype.reduce to do your work.

Hint: You can use String.prototype.split to split the string into an array of words.
*/

function longestWord(string) {
    var array = string.split(" ");
    
    return array.reduce(function(acc, curr) {
        if (curr.length > acc.length){
            acc = curr;
        }
        return acc;
    }, " ")
}

//console.log(longestWord("The rain in Spain falls mainly on the plain"))

/*

Write a function called countVowels that takes a string and returns the number of vowels in 
the string. You should use Array.prototype.reduce to do your work.

Hint: You can use String.prototype.split again. There is a way to use it to split a string by 
character. Try to Google it :)

Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if the 
current letter is a vowel.Hint

*/

function countVowels(string){
var count = 0;
var array = string.split("");
var vowels = ["A","E", "I", "O", "U", "a", "e", "i", "o", "u"];

return array.reduce(function(count, curr) {
    if (vowels.indexOf(curr) === -1) {
        null;
    }
    else {
        count += 1;
    }
    return count;
    }, count);
}

//console.log(countVowels("dogs"));
//console.log(countVowels("orthodontist"));
//console.log(countVowels("alphabet"));


