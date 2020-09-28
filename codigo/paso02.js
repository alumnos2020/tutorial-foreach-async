let arr = [1,2,3,4,5,6,7];
let idx = 0;

function recursiva() {
    if (idx == arr.length) {
        return;
    }
    console.log(arr[idx]);
    idx++;
    setTimeout(recursiva, 2000);
}

recursiva();