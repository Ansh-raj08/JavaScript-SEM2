let user ={
    uname:"Ansh",
    Uni:"K.R. Mangalam",
    address:{
        city:"ggn",
        state:"HR",
    },
    phnno:9451909080,
    favteam:['rma','mci','mcu'],
    demo:function(){
        return "demo function"
    }
}
// console.log(user.unamename,user.Uni,user.favteam[0]);

// string literal 

// console.log(`My name is ${user.uname}. My fav team is ${user.favteam[0]}. My phn no is ${user.phnno}. I live in ${user.address.state} `);

// console.log(user.favteam.length, user.demo());

// object methods

// Object.keys(variable name)

// console.log(Object.keys(user));

// console.log(Object.values(user));

// console.log(Object.entries(user)); // converts the values and keys to arrays.

const car = {
    company:"Mahindra",
    Model:"BE6",
};
car.Model = "XUV700",

Object.seal(car); // can change the value, but cannot add something new.
Object.freeze(car); // can not add or change anything.

car.colour = "Black";
// console.log(car);

// arr = [12,45,74]
for(i=0; i<arr.length;i++) {
    console.log(arr[i]);
}

//  divisibility checker.

// arr = [2,6,4,1,44,66,87,90,54] //for even
for(i=0;i<arr.length; i++) {
    if (arr[i]%2===0)
    console.log(arr[i])
}

// arr = [1,4,5,6,7,3,4,87,6,44,22,98,99] // for odd
for(i=0;i<arr.length;i++){
    if (arr[i]%2 !== 0)
    console.log(arr[i])
}

// Sorting numbers in array. (ascending order)

// let arr = [4,9,5,3,99,7,66,55,44,11]
let c = 0;
for (i=0;i<arr.length;i++) {
    for (j=i+1;j<arr.length;j++) {
        if (arr[i]>arr[j]) {
            c = arr[i];
            arr[i]=arr[j];
            arr[j]=c;
        }
    }
    console.log(arr[i])
}

let a = 5;
for (i=0;i<15;i++){
    console.log(a);
}

// Reverse function in js 

// let arr = [1,2,3,4,5,6,7,8,9]
arr.reverse()
console.log(arr)

// matrix in js 

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][1])

// 