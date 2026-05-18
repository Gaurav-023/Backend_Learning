const fs = require("fs");
const output = fs.readFile("./abc.txt" , "utf-8", function(err, data){
    console.log(data);
});

let sum = 0;
for(let i = 0; i < 1000000000; i++){
    sum = sum + i;
}
console.log("expensive done", sum);

console.log(output);
