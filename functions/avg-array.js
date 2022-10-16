function make_avg(a, n) {
    var total = 0;
    for (var i = 0; i < n; i++) {
        total += a[i];
        avg = total / n;
    }
    return avg

}

var arr = [5, 3, 6, 7, 5, 3];
var n = arr.length;

console.log(make_avg(arr, n));