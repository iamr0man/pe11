class Client {
    constructor({id, firstName, lastName}){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    render(){
        return `
            <div class="item col-12 client-element">
                <a href="#" data-id=${this.id}>${this.firstName} ${this.lastName}</a>
            </div>
            `
    }
}