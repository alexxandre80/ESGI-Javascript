function ucfirst(str) {
    if(typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.substring(1);
}

console.log(ucfirst('ucfirst'));
console.log(ucfirst('Ucfirst'));
console.log(ucfirst('5cfirst'));
console.log(ucfirst('ucfirst test'));
console.log(ucfirst(''));
console.log(ucfirst(null));
console.log(ucfirst({}));

function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = ucfirst(array[i++]);
    }
    return array.join(" ");
}

console.log(capitalize('capitalize'));
console.log(capitalize('Capitalize'));
console.log(capitalize('5apitalize'));
console.log(capitalize('capitalize test'));
console.log(capitalize(''));
console.log(capitalize(null));
console.log(capitalize({}));

function camelCase(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    const array = str.toLowerCase().split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = ucfirst(array[i++]);
    }
    return array.join("");
}
console.log(camelCase('ToggleCase is_the coolest'));
console.log(camelCase(''));
console.log(camelCase(null));
console.log(camelCase({}));

function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    const array = str.split(" ");
    for (let i = 0; i < array.length;) {
        array[i] = ucfirst(array[i++]);
    }
    return array.join("_");
}
console.log(snake_case('capitalize test'));
console.log(snake_case(''));
console.log(snake_case(null));
console.log(snake_case({}));