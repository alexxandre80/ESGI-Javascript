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
    str = str.replace("_", " ");
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
        array[i] = array[i++];
    }
    return array.join("_");
}
console.log(snake_case('toggle case is the coolest'));
console.log(snake_case('toggleCase is the coolest'));
console.log(snake_case('ToggleCase is the 3oolest'));
console.log(snake_case('ToggleCaseIsTheCool3st'));
console.log(snake_case('ToggleCase is_the coolest'));
console.log(snake_case(' toggleCase'));
console.log(snake_case(''));
console.log(snake_case(null));
console.log(snake_case({}));