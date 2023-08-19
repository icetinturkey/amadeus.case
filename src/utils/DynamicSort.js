export const dynamicSort = (property) => {
    let sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }


    return function (a,b) {
        if(sortOrder === -1){
            return normalize(b[property]).localeCompare(normalize(a[property]));
        }else{
            return normalize(a[property]).localeCompare(normalize(b[property]));
        }
    }
    function normalize(data){
        if(data.length<8){
            const _count = 8-data.length;
            for(let i=0;i<_count;i++){
                data = '0'+data;
            }
            return data;
        }else{
            return data;
        }
    }
}