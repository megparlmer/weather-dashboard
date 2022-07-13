let weather = {
    "apiKey": "29b502a762a0a9618e4542f0d80057b7",
    fetchWeather: function() {
        fetch(
            "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=af5c59ceb9b0b324285ae753cadc7674"
        ).then((response) => response.json())
        .then((data) => console.log(data));
    }
}