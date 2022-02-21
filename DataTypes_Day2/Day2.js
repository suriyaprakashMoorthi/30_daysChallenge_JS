//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'
//2. Print the string on the browser console using console.log()
console.log(challenge)
//3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);
//4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())
//5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLocaleLowerCase())
//6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0,2))
console.log(challenge.substr(0,2))
//7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.split("30")[1].trim())
console.log(challenge.substring(2,challenge.length).trim())

//8. Check if the string contains a word Script using includes() method
console.log("Includes : ",challenge.includes("word"))

//9. Split the string into an array using split() method
console.log("Split : ",challenge.split())

//10. Split the string 30 Days Of JavaScript at the space using split() method
console.log("Split with Space : ", challenge.split(" "));

//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(str.split(','))

//12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript","Python"));

//13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log("character at index 15: ",challenge.charAt(15));

//14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'));

//15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let index = challenge.indexOf("a")
if(index > -1)
{
    console.log("Index :",challenge[index])
}else{
console.log("Not present in given String")
}

//16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log("position of the last occurrence of a :",challenge.lastIndexOf("a"))

//17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let str1 = "You cannot end a sentence with because because because is a conjunction"
console.log(str1.indexOf("because"))

//18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(str1.lastIndexOf("because"))

//19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(str1.search("because"))
//20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
str1 = " 30 Days Of JavaScript "
console.log(str1.trim())
//21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("stratsWith : ",challenge.startsWith("30 Days Of JavaScript"))

//22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("EndsWith : ",challenge.endsWith("30 Days Of JavaScript"))

//23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log("Match : ",challenge.match(/a/gi));
//24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log('30 Days of'+'30 Days Of JavaScript')
//25. Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(challenge.repeat(2));