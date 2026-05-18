//file-cleaner
const fs = require("fs");

const output = fs.readFile("./abc.txt", "utf-8", function (err, data) {
    console.log(data);



const newString = data.replace(/\s+/," ").trim();

fs.writeFile("./abc.txt", newString , function(err) {
    console.log("Added")
});

});