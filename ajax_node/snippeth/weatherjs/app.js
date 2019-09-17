const storage = new Storage();
//Get stored location date
const weatherLocation = storage.getLocationDate();
//Init weater obj
const weather = new Weather(weatherLocation.city);
//Init UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  
  // Change Location
  weather.changeLocation(city)
  
  //Record new city in LS
  storage.setLocationDate(city)

  getWeather();
  
  $('#locModal').modal('hide')
})

function getWeather(){
  weather.getWeather()
  .then(res => {
      ui.paint(res);
  })
}