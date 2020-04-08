// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var prograd1 = "Deepthi";
console.log("The driver's name is " + prograd1);
var prograd2 = "Shravya";
console.log("The navigator's name is " + prograd2);


// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.


var check1 = prograd1.length;
var check2 = prograd2.length;
if (check1 > check2) {
    console.log("The driver has the longest name, it has" + check1 + "characters");
} else if (check1 < check2) {
    console.log("The navigator has the longest name, it has" + check2 + "characters");
} else {
    console.log("Wow, you both have equally long names with " + check1 + " characters");
}


// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels

var count = 0;

for (var i = 1; i <= prograd1.length; i++) {
    v = prograd1[i];
    if (v == "A" || v == "E" || v == "I" || v == "O" || v == "U" ||
        v == "a" || v == "e" || v == "i" || v == "o" || v == "u") {
        count++;
        console.log(v);
    }
}
if (count == 0) {
    console.log("no vowels");
} else {
    console.log(count);
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

countu = 0;
countl = 0;
var car = "JaGUar";
for (var j = 0; j < car.length; j++) {

    if (car[j].toUpperCase() == car[j]) {
        countu++;
        console.log("The Upper case letter is " + car[j]);
    } else {
        countl++;
        console.log("The Lower case letter is " + car[j]);
    }

}
console.log(countu);
console.log(countl);



// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

var stru = prograd1.toUpperCase();
var res = stru.split("").join(" ");
console.log(res);


// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

function reverseString(str){
    return str.split("").reverse().join("");
}
var resr = reverseString(prograd2);
console.log(resr);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

var com = prograd1.localeCompare(prograd2);
if(com==1)
console.log(prograd2+"  "+prograd1);
else if(com==-1)
console.log(prograd1+" "+prograd2);
else
console.log("Both have the same name");


// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 





//What is the problem
// i just nw had my dnr nad satrtd my work Okay
//Open story time lab