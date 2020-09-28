const foreachAsync = require('./foreachasync');

let arraisito = [1,2,3,4,5,6,7];

foreachAsync(arraisito, function(item, next, abort) {
    console.log('..................');
    console.log(item);
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