cityNameElmt = document.querySelector("#cityName")
resultElmt = document.querySelector("#result")

async function fetchweather(city){
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ca018df54353f065aaed7d802825b8be`)
    .then((response)=>response.json())
    .then((data)=>displayWeather(data))
    .catch((error)=>console.log(error))

}

function displayWeather(data){
    console.log(data)
    resultElmt.innerHTML = `
        <h1>${data.name}</h1>
         <img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt='${data.weather[0].description}'>
         <h2>${data.main.temp}<span>&deg;C</span></h2>
         <p>${data.weather[0].description}</p>
    `

}



function handleSubmit(){
    console.log("efesf")
    city = cityNameElmt.value
    fetchweather(city)
    
}
