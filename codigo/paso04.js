function foreachAsync(arr, callBack, onFinish) {
    let idx = 0;
    (function foreachAsyncInterna() {
        if (idx == arr.length) {
            onFinish();
            return;
        }
        callBack(arr[idx], ()=>{
            setTimeout(foreachAsyncInterna, 1);
        }, ()=>{
            onFinish('el proceso aborto');
        });
        idx++;
    }());
}

let arraisito = [1,2,3,4,5,6,7];
foreachAsync(arraisito, function(item, next, abort) {
    console.log('..................');
    console.log(item);
    if (item==4) {
        abort();
        return;
    }
    setTimeout(()=>{
        console.log('termino la llamada a MySQL');
        next();
    },2000);
}, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Encadenar con otra accion');    
});
