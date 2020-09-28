function foreachAsync(arr, callBack) {
    let idx = 0;
    (function foreachAsyncInterna() {
        if (idx == arr.length) {
            return;
        }
        callBack(arr[idx], ()=>{
            setTimeout(foreachAsyncInterna, 1);
        }, ()=>{});
        idx++;
    }());
}

let arraisito = [1,2,3,4,5,6,7];
foreachAsync(arraisito, function(item, next, abort) {
    console.log('..................');
    console.log(item);
    setTimeout(()=>{
        console.log('termino la llamada a MySQL');
        next();
    },2000);
});
