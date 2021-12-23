const express =require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){

    const url = "http://api.openweathermap.org/data/2.5/weather?q=bandung&appid=2365189b3f75762ee973ac62dd28b36f&units=metric";
    https.get(url, function(response){
        console.log(response);
    })

    res.send("Server is up and running.");
})


app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});