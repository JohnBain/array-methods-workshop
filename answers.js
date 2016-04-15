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

/* 

Exercise 6

Write a function called highLow that takes an array of numbers, and returns an object with a 
property highest containing the highest number, and a property lowest containing the lowest number, 
using Array.prototype.reduce.

For example, starting with [1, -10, 20, 40, 5], your function should return {highest: 40, 
lowest: -10}.

Hint: Javascript has a special value called Infinity, which is higher than any other number. 
See if you can initialize your reduce accumulator with Infinity and -Infinity :)

*/

function highLow(array) {
    
    return array.reduce(function(obj, currentNum) {
        if (currentNum > obj.highest) {
            obj.highest = currentNum;
        }
        if (currentNum < obj.lowest) {
            obj.lowest = currentNum;
        }
        return obj;
    }, {highest: [-Infinity], lowest: [Infinity]});
}

//console.log(highLow([-1,2,3,4,5]));

/* 
Exercise 7

Expanding on exercise 6, write a function called highLowTwo that takes an array of numbers, 
and returns the higest, second highest, lowest, and second lowest numbers.

For example, starting with [1, -10, 20, 40, 5], your function should return:

{
  "highest": 40,
  "secondHighest": 20,
  "lowest": -10,
  "secondLowest": 5
}

*/

function highLowTwo(array) {
    
    return array.reduce(function(obj, currentNum) {
        if (currentNum > obj.highest) {
            obj.secondHighest = obj.highest;
            obj.highest = currentNum;
        };
        
        if (currentNum > obj.secondHighest && currentNum < obj.highest) {
            obj.secondHighest = currentNum;
        };
        
        if (currentNum < obj.secondLowest && currentNum > obj.lowest) {
            obj.secondLowest = currentNum;
        };
        
        if (currentNum < obj.lowest) {
            obj.secondLowest = obj.lowest;
            obj.lowest = currentNum;
        };
        
        
        return obj;
    }, {highest: [-Infinity], secondHighest: [-Infinity], lowest: [Infinity], secondLowest: [Infinity]});
}

console.log(highLowTwo([-1,2,3,4,5]));
console.log(highLowTwo([-100,-50,300,10000,1000,5,213,912]));


/*
Exercise 8

Write a function called countChars that takes a string, and returns an object where the keys are 
letters, and the value is the number of times that letter appears.

For example, with input "hello world", the output should be:

{
  "h": 1,
  "e": 1,
  "l": 3,
  "o": 2,
  "w": 1,
  "r": 1,
  "d": 1
}
*/

function countChars (string) {
    var array = string.toLowerCase().split("");
    var abject = {"a":0,"b":0,"c":0,"d":0,"e":0,"f":0,"g":0,"h":0,"i":0,"j":0,"k":0,"l":0,"m":0,"n":0,"o":0,"p":0,"q":0,"r":0,"s":0,"t":0,"u":0,"v":0,"w":0,"x":0,"y":0,"z":0};
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    var counter = array.reduce(function(obj, char){
        obj[char] += 1;
        return obj;
    }, abject);
   
   alphabet.forEach(function(each){    
        if (counter[each] === 0){
            delete counter[each];
        }
   });
   return counter;
}

//console.log(countChars("hello"));

//This is a pretty terrible brute-force sort of solution but it got the job done.

