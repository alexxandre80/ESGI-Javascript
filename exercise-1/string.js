function ucfirst(str) {
    if(typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.substring(1);
}

function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = ucfirst(array[i++]);
    }
    return array.join(" ");
}

function camelCase(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    for (let j = 0; j < str.length; j++) {
        str = str.replace(/[^A-Za-z]/, "");
    }
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = ucfirst(array[i++]);
    }
    return array.join("");
}

function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = array[i++];
    }
    return array.join("_");
}
function leet(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    const voyelle = ["a","e","i","o","u"];
    const chiffre = ["4","3","1","0","(_)"];
    str = str.replace(voyelle, chiffre);
    const array = str.split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = array[i++];
    }
    return array.join(" ");
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