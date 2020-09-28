foreachasync(arr, function(item, next, abort) {
    setTimeout(() => {
        console.log('lo que sea');
        next();
    }, 2000);
});

