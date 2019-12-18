String.prototype.ucfirst = function ucfirst() {
    if(this.length === 0) return "";
    return this[0].toUpperCase() + this.substring(1);
}

var alex = "alex";
console.log(alex.ucfirst());

String.prototype.camelCase = function camelCase() {
    if (this.length === 0) return "";
    for (let j = 0; j < this.length; j++) {
        var str = this.replace(/[^A-Za-z0-9]/gi, " ");
    }
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = ucfirst(array[i++]);
    }
    return array.join("");
}
var lol = "alex";
console.log(lol.camelCase());

function snake_case() {
    if (this.length === 0) return "";
    // const array = this.toLowerCase().split(" ");
    //for (let i = 0; i < array.length;) {
    //    array[i] = array[i++];
    //}
    //return array.join("_");
    return this.toLowerCase().replace(/[^A-Za-z0-9]/gi,'_');
}

function leet() {
    if (this.length === 0) return "";
    return this.replace(/[aeiouy]/ig,function (car){
        switch (car) {
            case "A":
            case "a":
                return "4";
            case "E":
            case "e":
                return "3";
            case "I":
            case "i":
                return "1";
            case "O":
            case "o":
                return "0";
            case "U":
            case "u":
                return "(_)";
            case "Y":
            case "y":
                return "7";
        }
    })
}
console.log(leet('anaconda'));
console.log(leet('anacoNDa'));
console.log(leet('leet'));
console.log(leet('yodo'));
console.log(leet('evaluation'));
console.log(leet('mon travail'));
console.log(leet(''));
console.log(leet(null));
console.log(leet({}));

function verlan() {
    if (this.length === 0) return "";
    return this.split(" ").map(function (word) {
        return word.split("").reverse().join('');
    }).join(" ");
}
console.log(verlan("hello world"));

function yoda() {
    if (this.length === 0) return "";
    return this.split(" ").reverse().join(" ");
}
console.log(yoda("hello world"));

function vig(code) {
    if (this.length === 0) return "";
    while(code.length < this.length){
        code += code;
    }
    let codeIndex = 0;
    return this.split("").map(function (car) {
        car = car.toLowerCase();
        const carCode = car.charCodeAt(0) - "a".charCodeAt(0);

        if(carCode<0 || carCode > 25) return car;
        const codeCode = code[codeIndex++].charCodeAt(0) - "a".charCodeAt(0);

        const encodedCode = (carCode + codeCode)%26;

        return thising.fromCharCode(encodedCode + 'a'.charCodeAt(0));
    }).join('');
}