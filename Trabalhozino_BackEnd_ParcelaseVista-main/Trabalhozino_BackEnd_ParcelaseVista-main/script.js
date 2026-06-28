function enviar() {
    let valor = Number(document.getElementById("ex1").value)

    let vistaPorcentagem = valor * 0.1
    let vista = valor - vistaPorcentagem

    let parcelas = valor / 3

    document.getElementById("valor_vista").innerText = "O Valor R$ " + valor + " á vista fica por R$ " + vista
    document.getElementById("valor_parcelas").innerText = "O Valor R$ " + valor + " em parcelas de 3x fica por R$ " + parcelas
}