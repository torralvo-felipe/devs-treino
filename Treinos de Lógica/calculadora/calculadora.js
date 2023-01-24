var calcular = function () {
    var num1 = Number(document.getElementById('n1').value)
    var num2 = Number(document.getElementById('n2').value)
    var tipoOperacao = document.getElementById('tipoOperacao').value
    var resultado = 0

    if (tipoOperacao === 'soma') {
        resultado = num1 + num2
        document.getElementById('resultado').innerHTML = '<p>'+resultado+'</p>'
    } else if (tipoOperacao === 'subtracao') {
        resultado = num1 - num2
        document.getElementById('resultado').innerHTML = '<p>'+resultado+'</p>'
    } else if (tipoOperacao === 'multiplicacao') {
        resultado = num1 * num2
        document.getElementById('resultado').innerHTML = '<p>'+resultado+'</p>'
    } else {
        resultado = num1 / num2
        document.getElementById('resultado').innerHTML = '<p>'+resultado+'</p>'
    }
}