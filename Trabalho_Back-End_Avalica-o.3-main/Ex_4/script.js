function ex4() {
    let A = Number(document.getElementById("nA").value)
    let B = Number(document.getElementById("nB").value)
    let C = Number(document.getElementById("nC").value)

    if (A > B & A > C) {
        document.getElementById("resultado").innerText = "O primeiro número é o maior entre os três."
    } else if (B > A & B > C) {
        document.getElementById("resultado").innerText = "O segundo número é o maior entre os três."
    } else if (C > A & C > B) {
        document.getElementById("resultado").innerText = "O terceiro número é o maior entre os três."
    } else {
        document.getElementById("resultado").innerText = "Os três números são iguais."
    }
}

