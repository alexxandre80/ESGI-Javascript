function type_check_v1(vari,type) {
   switch(typeof vari){
       case 'object':
           if(Array.isArray(vari)) return type === "array";
           if(vari === null) return type === "null";
       default:
           return typeof vari === type;
   }
}

function type_check_v2(vari,type) {
	for (key in type) {
		switch (key) {
			case "type":
				if (!type_check_v1(vari, type.type)) return false;
				break;
			case "value":
				if(JSON.stringify(vari) !== JSON.stringify(type.value)) {
                    return false;
                };
                break;
			case "enum":
				type.enum.forEach(val => {
					if (!type_check_v2(vari, { value: val })) {
						return false;
					}
					return true;
				});
        }
    }
    return true;
}

function type_check_v3() {

}



