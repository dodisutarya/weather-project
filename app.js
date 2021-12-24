const express =require("express");
const axios = require("axios");
const { response } = require("express");

const app = express();

app.get("/", function(req, res){    

    const url = "http://api.openweathermap.org/data/2.5/weather?q=bandung&appid=2365189b3f75762ee973ac62dd28b36f&units=metric";
    
    axios.post(url)
    .then(function(response){
        console.log(response.data.weather[0].description);
    })

    


    

    res.send("Server is up and running.");
})


app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});