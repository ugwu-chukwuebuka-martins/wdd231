let weather = document.getElementById("current-weather");
let forecast = document.querySelector("#forecast");
getWeatherApi();

function createWeatherForecastCard(arr, arr1){
sR = new Date();
sT = new Date();
sR.setTime(arr.sys.sunrise);
sT.setTime(arr.sys.sunset);
weather.innerHTML = `<h3>Current Weather⛅️</h3>
                    <p><span>${arr.main.temp}&deg;C</span><br>
                    ${arr.weather[0].description}<br>
                    High: ${arr.main.temp_max}&deg;<br>
                    Low: ${arr.main.temp_min}&deg;<br>
                    Humidity: ${arr.main.humidity}%<br>
                    Sunrise: ${sR.getHours()}:${sR.getMinutes()}am<br>
                    Sunset: ${sT.getHours()}:${sT.getMinutes()}pm</p>`;
days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
day = new Date();
function daY(b){
if (b >= 7){
return days[b-7];
}
else{
return days[b];
}
}
forecast.innerHTML = `<h3>Weather Forecast⛅️</h3>
                     <p>Today: <span>${arr1.list[0].main.temp}&deg;C</span><br><br>
                    ${daY(day.getDay()+1)}: <span>${arr1.list[1].main.temp}&deg;C</span><br><br>
                    ${daY(day.getDay()+2)}: <span>${arr1.list[2].main.temp}&deg;C</span><br><br>
                    ${daY(day.getDay()+3)}: <span>${arr1.list[2].main.temp}&deg;C</span></p>`;
}
async function getWeatherApi(){
try{
const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=6.43999&lon=7.52578&appid=857a99103fc84bbb6daa80c8311c6d3d&units=metric");
const response1 = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=6.43999&lon=7.52578&appid=857a99103fc84bbb6daa80c8311c6d3d&units=metric");
if (response.ok && response1.ok) {
const data = await response.json();
const data1 = await response1.json();
console.log(data);
console.log(data1);
createWeatherForecastCard(data, data1);
}
else {
throw Error(await response.text() && await response1.text());
}
} catch (error) {
console.log(error);
}
}