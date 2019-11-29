function type_check_v1(arg1,arg2) {
    if (typeof arg1.length === 0) return "";
    if (typeof arg2.length === 0) return "";
    if (arg1 === arg2){
        return true;
    }else{
        return false;
    }
}
console.log(type_check_v1(arg1=42,arg2='hello'));
//function type_check_v2() {

//}

//function type_check_v3() {

//}