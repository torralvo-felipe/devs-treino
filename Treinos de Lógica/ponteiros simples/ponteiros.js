var arr = [1, 55, 2, 110, 3, 165, 4, 220, 5, 275]

var inverter = function () {
    document.getElementById('reverse').innerHTML = ''
    var mid = (arr.length/2)
    for (i = 0; i < mid; i++){
        numSave = arr[i]
        arr[i] = arr[(arr.length-1)-i]
        arr[(arr.length-1)-i] = numSave
    }
    
    arr.forEach((i, idx) => {
        if (idx < arr.length-1) document.getElementById('reverse').innerHTML += i+', '
        else document.getElementById('reverse').innerHTML += i
    })
}