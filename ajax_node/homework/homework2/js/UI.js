class UI {
    constructor(){
        this.city = document.getElementById('g-city')
        this.country = document.getElementById('g-country')
        this.zone = document.getElementById('g-zone')
        this.region = document.getElementById('g-region')
    }
    
    showData(item){
        this.city.textContent = item.city;
        this.country.textContent = item.country;
        this.zone.textContent = `Timezone: ${item.timezone}`;
        this.region.textContent = `Region: ${item.region}`;
    }

    clearData(){
        const childs = document.getElementById('g-details').children

        for(let value of childs){
            value.textContent = '';
        }
    }
}