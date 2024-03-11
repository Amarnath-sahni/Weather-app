// const apiKey="d53e52e756fec0a7f10f9796be2d2b0f";
//     const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
//     async function checkweather(city){
//         const responce = await fetch (apiUrl+ city + `&appid=${apiKey}`);
//         var data = await responce.json();
//         console.log(data,"here is data");
//     }

//https://api.openweathermap.org/data/2.5/weather?q=Germany,&appid=d53e52e756fec0a7f10f9796be2d2b0f&units=metric

const apikey='d53e52e756fec0a7f10f9796be2d2b0f';
const apiurl='//api.openweathermap.org/data/2.5/weather?units=metric&q=';

const search=document.querySelector('.search');
const searchBtn=document.querySelector('.search-btn');
const weatherIcon=document.querySelector('.weather-icon');

async function weatherApp(city){
    const response=await fetch(apiurl + city +`&appid=${apikey}`);
    const data=await response.json();
    console.log(data);


document.querySelector('.temp').innerText=Math.round(data.main.temp)+"°C";
document.querySelector('.city').innerText=data.name;
document.querySelector('.humidity-in-percentage').innerText=data.main.humidity+"%";
document.querySelector('.wind-name').innerText=data.wind.speed+"km/h";


if(data.weather[0].main=="Clouds"){
    weatherIcon.src='clouds.png';
}
else if(data.weather[0].main=="Clear"){
    weatherIcon.src='Clear.png';
}
else if(data.weather[0].main=="Mist"){
    weatherIcon.src='mist.png';
}
else if(data.weather[0].main=="Haze"){
    weatherIcon.src='rain.png';
}
else if(data.weather[0].main=="Snow"){
    weatherIcon.src='snow.png';
}else{
    weatherIcon.src='snow.png';
}
}

searchBtn.addEventListener("click",()=>{
    weatherApp(search.value);
});
