let name = "jahanvi";
let plan = "learn js";

console.log(name);
console.log(plan.length);  
// length of string
console.log(name[1]);
// accessing character at index 1
console.log(plan[6]);
// accessing character at index 6
console.log(name.charAt(2));
// accessing character at index 2
console.log(name.indexOf("j"));
// finding index of substring "j"
console.log(plan.includes("js"));
// checking if string includes "js"
console.log(plan.toUpperCase());
// converting string to uppercase in capital letters
console.log(name.toLowerCase());
// converting string to lowercase in small letters


// ARRAYA:
 let arr = ["jahanvi", "learn js", 10, 20, true];
//  printing the array and its length
 console.log(arr);
//  printing the length of the array
 console.log(arr.length);
// accessing the first element of the array
 arr[1] = "learn javascript";
 console.log(arr);
//  ending an element to the array
 arr.push("new item");
 console.log(arr);
//  removing the last element from the array
 arr.pop();
 console.log(arr);
//  removing the first element from the array
 arr.shift();
 console.log(arr);
//  adding an element to the beginning of the array
 arr.unshift("first item");
 console.log(arr);
//  index of an element in the array
 console.log(arr.indexOf("learn javascript"));
//  checking if an element is present in the array
 console.log(arr.includes("learn js"));

 const arr =["apple", "banana", "cherry", "date", "elderberry"];
// //  printing the array and its length
 console.log(arr);

 arr =[1,2,3,4,5];
//  array can store the memory address in arr but it cannot make a new array because it is a constant variable

 arr.push("fig");
 console.log(arr);
 
