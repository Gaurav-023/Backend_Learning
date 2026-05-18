/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


function wait(n) {


return new Promise(function(res,req){

    setTimeout( res , 1000 *n )
})
} 

wait(3).then(function() {
    console.log("done");
})
module.exports = wait;