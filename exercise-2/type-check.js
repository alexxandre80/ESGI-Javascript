function type_check_v1(vari,type) {
   switch(typeof vari){
       case 'object':
           if(Array.isArray(vari)) return type === "array";
           if(vari === null) return type === "null";
       default:
           return typeof vari === type;
   }
}

function type_check_v2() {

}

function type_check_v3() {

}