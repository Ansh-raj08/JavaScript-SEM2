// Synchronus and Asynchronus 

console.log("start...");

function myFunction(cb){
    setTimeout(()=>{
        cb("my function timeout");
    }, 2000);
}
myFunction((data)=>{
    console.log(data);
});

console.log("end...")