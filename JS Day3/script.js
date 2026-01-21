// let fruits = ["apple","banana","mango"];
// let newlength = fruits.push("cherry"); //3
// console.log(newlength);
// console.log(fruits);

// let arr = [1,2,3,4,5]
// let res=[]
// while(arr.length>0){
//     res.push(arr.pop());
// }
// console.log(res)

// let arr = [1,-2,3,4,-6,6,-9];
// let result = [];

// while (arr.length>0) {
//     let element = arr.shift();
//     if (element>= 0) {
//         result.push(element)
//     }
// }
// console.log(result)

let arr = [1,2,3,4,3,2,1]

let temp = []
let original = []

for(let i=0;i<arr.length; i++){
    original.push(arr[i])
}

while (original.length>0){
    temp.push(original.pop());
}

for(let i = 0; i < original.length; i++){
    if (original[i] !== temp[i])
        return "not a palindrome"
}
console.log("not a palindrome")