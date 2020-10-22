
    const input= document.getElementById("city");

    const search= document.getElementById("find");    

    const result= document.querySelector("h5");   

    search.addEventListener("click", getWeather);    

    function getWeather(e){
        e.preventDefault();
        let city = input.value;
        console.log(city);
        
        const apiKey="658e4184eb3a9495d13f81a617ca105c";

        let url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        fetch(url)
        .then(function (response) {        
        return response.json();
    })
        .then(function (data) {
            console.log(data);
            console.log(data.weather[0].id);
            let icon = data.weather[0].icon;
            
            let temp= Math.round(data.main.temp-273.15);
            console.log(temp);
            
            document.getElementById("image").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            
            
            result.textContent=`It is ${temp} Celcius Degree in ${city}:`;          
                                
             });           
   
};

    