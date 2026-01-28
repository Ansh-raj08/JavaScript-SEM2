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

