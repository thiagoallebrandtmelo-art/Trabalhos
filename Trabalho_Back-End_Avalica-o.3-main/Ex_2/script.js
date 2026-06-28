function ex2() {
    let perm = Number(document.getElementById("V_Perm").value)
    let cond = Number(document.getElementById("V_Cond").value)

    if (cond <= perm) {
        document.getElementById("resultado").innerText = "Sem Multa!"
    } else if (cond <= perm * 1.2) { //1.2 significa o 100% mais os 20% em decimal
        document.getElementById("resultado").innerText = "Situação: Muito leve!"
    } else if (cond > perm * 1.2) {
        document.getElementById("resultado").innerText = "Situação: Grave!"
    }
}