const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");

});

app.post("/", function (req, res) {

    console.log(req.body.cityName);

    const query = req.body.cityName;
    const appkey = "2365189b3f75762ee973ac62dd28b36f";
    const units = "metric"

    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + appkey + "&units=" + units + "";

    axios.post(url)
        .then(function (response) {

            const weatherDesc = response.data.weather[0].description;
            const temp = response.data.main.temp;
            const location = response.data.name;
            const icon = response.data.weather[0].icon;
            const urlicon = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write("<p>The weather in " + location + " curently is " + weatherDesc + "</p>");
            res.write("<h1>The temperature in " + location + " is " + temp + "</h1>");
            res.write("<img src='" + urlicon + "'>");
            // console.log(temp);
            res.send();
        })
})



app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});