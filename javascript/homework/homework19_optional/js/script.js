function cloneObject(object){

    const clone = new Object();

    for(let key in object){
        if(user[key] instanceof Array || user[key] instanceof Object){
            cloneObject(key);
        }
        clone[key] = object[key];
    }
    return clone;
}
const user = new Object();
user.name = 'Roma';
user.surname = 'Korniienko';
user.tabel = [72, 60, 95]

const cloneUser = cloneObject(user);