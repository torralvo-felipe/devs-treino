var gerar = function () {
    document.getElementById('fibonati').innerHTML = ''
    var num = Number(document.getElementById('numFibo').value)
    if (num <= 1) {
        document.getElementById('numFibo').innerHTML = '0'
    } else if (num >= 2) {
        var i = 0
        var arrFibo = []
        var first = 0
        var second = 1
    
        for (i = 0; i <= num; i++) {
            if (i === 0) arrFibo.push(first)
            if (i === 1) arrFibo.push(second)
            if (i > 1) arrFibo.push(arrFibo[i-2] + arrFibo[i-1])
        }
        
        for (i = 0; i <= arrFibo.length-1; i++) {
            if(i < arrFibo.length-1) document.getElementById('fibonati').innerHTML += arrFibo[i]+' - '
            else document.getElementById('fibonati').innerHTML += arrFibo[i]
        }
    }
}