class Weather {
  constructor(city){
    this.apiKey = '7ab15292d5811e29476a73bd80197786';
    this.city = city;
  }

  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

    const responseDate = await response.json();

    return responseDate;
  }

  changeLocation(city){
    this.city = city;
  }
}