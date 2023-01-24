calcular2 = function () {
    var num1 = Number(document.getElementById('n1').value)
    var num2 = Number(document.getElementById('n2').value)
    var tipoOperacao = document.getElementById('tipoOperacao').value
    var resultado = {
        soma: num1 + num2,
        subtracao: num1 - num2,
        multiplicacao: num1 * num2,
        divisao: num1 / num2
    }

    document.getElementById('resultado').innerHTML = resultado[tipoOperacao]
}