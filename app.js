//    For each

// let arr = [1,2,3,4,5];

// arr.forEach((el) =>{
//     console.log(el)
// })

// let arr1 = [{
//     name: "Anas Jawaid",
//     marks: 94
// },{
//     name: "Suhaib Usman",
//     marks: 98
// },{
//     name: "Saad Ali",
//     marks: 87
// }];

// arr1.forEach((students) =>{
//     console.log(`the students got ${students.marks}`);
// })

//  Map


// let students = [{
//     name: "Anas Jawaid",
//     marks: 98
// },{
//     name: "Suhaib Usman",
//     marks: 97
// },{
//     name: "Saad Ali",
//     marks: 94
// }];

// let gpa = students.map((el) => {
//     return el.name;
// });

// console.log(gpa);

//   Filter

// let num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// let checkEven = num.filter((el) => {
//     return (el < 5);
// });

// console.log(checkEven);


//  Every

// let arr = [1,2,3,4,5];

// let result = arr.every((el) => {
//     return el % 2 == 0;
// } );

// console.log(result);


//  Some

// let arr = [1,3,];

// let result = arr.some((el) =>{
//    return (el%2 == 0);
// });

// console.log(result);


//  Reduce 
//  Reduce the array to a single value

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let finalValue = arr.reduce((res, el) => {
//     console.log(res);
//     return res + el;
// });

// console.log(finalValue);

// let arr = [1, 2, 3, 4, 5, 6, 7, 2, 9];

// let max = 0;

// for(let i =0; i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// };

// console.log(max)

// let max = arr.reduce((max, el) => {
//     if(max < el){
//         return el;
//     } else{
//         return max;
//     }
// });

// console.log(max);

//  Practsie QS

//  Check if all numbers in our array are multiple of 10 or not

// let num = [10, 20, 30, 40];

// let ans = num.every((el) => el % 10 == 0);

// console.log(ans);

//  Practise Qs

// create a function to finf the min number in an array


// let num = [10, 20, 30, 40, 5];

// let min = num.reduce((min, el) => {
//     if(min < el){
//               return min;
//     } else {
//         return el;
//     }
// });

// console.log(min);


// default parameters

// function sum(a , b= 2){
//     return a +b;
// };

// console.log(sum(1));


//   Spread Array literals

// let arr = [1,2,3,4,5];

// let newArr = [...arr];

// console.log(newArr);

// let chars = [..."hello"];

// console.log(chars);

// let even = [2,4,6,8,10];
// let odd = [1,3,5,7,9];
// let num = [...even, ...odd];
// console.log(num);

//   Spread Object literals

// const data = {
//     email: "anasjawaidkamboh@gmail.com",
//     password: "Abcd"
// };

// const bioDAta  = {...data, id: 1, country: "pakistan"};
// console.log(bioDAta);

// const arr = [1,2,3,4,5,6,6];

// let newArr = {...arr};
// console.log(newArr);

// const str = "Anas Jawaid";

// let newStr = {...str};
// console.log(newStr);

//  Rest
// Allows a function to take an indefinite number of arguments and bundle them in an array
   
// function sum(...args){
//     for(let i = 0; i< args.length; i++){
//         console.log("You gave us", args[i]);
//     }
// };

// sum(1,2,4);

// function min(a,b,c,d){
//     console.log(arguments.length);
// }

// function sum(...args){
//     return args.reduce((sum, el) => sum + el)
// }

// console.log(sum(1, 2));


// function min(msg, ...args){
//     return args.reduce((min, el) => {
//         if(min > el){
//             return el;
//         } else{
//             return  min;
//         }
//     });
// }

// console.log(min(1,2,3,4,5));

//  destructing
//  storing values of array into multiple variables

// let names = ["ANas","Suhaib","Saad","Ahmed","Qurban","Lakshman","ALi"];
// let [FirstPlace, SecondPlace, ...RunnerUPs] = names;

// console.log("FIrstplace", FirstPlace);
// console.log("SecondPlace", SecondPlace);
// console.log("RunnerUp", RunnerUPs);