function ex5() {
    let nota = Number(document.getElementById("notta").value)

    if (nota >= 6) {
        document.getElementById("resultado").innerText = "Parabéns, você está aprovado!"
    } else if (nota < 4) {
        document.getElementById("resultado").innerText = "Infelizmente você está reprovado!"
    } else if (nota > 4 & nota <= 5.9) {
        document.getElementById("resultado").innerText = "Está de recuperação"
    }
}