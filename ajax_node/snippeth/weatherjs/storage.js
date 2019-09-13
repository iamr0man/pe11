class Storage {
  constructor() {
    this.city;
    this.defaultCity = 'Kiev';
  }

  getLocationDate(){
    if(localStorage.getItem('city' === null)){
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city')
    }

    return {
      city: this.city
    }

  }

  setLocationDate(city){
    localStorage.setItem('city', city);
  }

}