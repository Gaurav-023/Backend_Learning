//use a counter without setinterval

    count = 0;

function interval(arr) {
    count = count +1;
    console.log(count);
    setTimeout(interval, 1000);
}

setTimeout(interval, 1000);