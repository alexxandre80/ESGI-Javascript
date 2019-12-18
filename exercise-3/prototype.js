String.prototype.ucfirst = function ucfirst() {
    if(this.length === 0) return "";
    return this[0].toUpperCase() + this.substring(1);
}

var alex = "alex";
console.log(alex.ucfirst());

Object.prototype.prop_access = function (str) {
    if (str === "" || str === null ) {
        return this;
    }
    let access = str.trim().split('.');
    let temp = this;
    for (let i = 0; access.length; i++) {
        if (i == access.length) {
            return temp;
        }
        if (!Object.prototype.hasOwnProperty.call(temp, access[i])) {
            console.log(str + " not exist");
            return false;
        }
        temp = temp[access[i]];
    }
    return temp;
}
//console.log({animal:{type:{name:"chien"}}}.prop_access("animal.type.name"));