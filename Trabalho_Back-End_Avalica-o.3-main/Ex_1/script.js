function ex1 () {
    let n = Number(document.getElementById("valor_ex").value)

    if (n % 2) {
        document.getElementById("resultado_ex").innerText = "O número " + n + " é Ímpar."
    } else {
        document.getElementById("resultado_ex").innerText = "O número " + n + " é Par."
    }
}