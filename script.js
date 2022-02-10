const express = require("express");
const bodyParser = require("body-parser")


const app = express();


app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(req, res){
    res.sendFile(__dirname + "bmi.html");
});

app.post("/", function(req, res){

    var weight= Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = (weight / (height*height));

    let result = bmi.toFixed(2);

    res.send("Result: " + result);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});