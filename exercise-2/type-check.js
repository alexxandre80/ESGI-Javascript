function type_check_v1(arg1,arg2) {
    if (typeof arg1.length === 0) return "";
    if (typeof arg2.length === 0) return "";
    const typeofarg1 = typeof arg1;
    const typeofarg2 = typeof arg2;
    return typeofarg1===typeofarg2;
}
console.log(type_check_v1(arg1=42,arg2='hello'));
//function type_check_v2() {

//}

//function type_check_v3() {

//}