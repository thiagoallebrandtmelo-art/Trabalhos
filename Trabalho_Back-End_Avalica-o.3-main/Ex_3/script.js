function ex3() {
    //Declaração das varaveis para cada lado do triangulo
    let ladoA = Number(document.getElementById("ladoA").value)
    let ladoB = Number(document.getElementById("ladoB").value)
    let ladoC = Number(document.getElementById("ladoC").value)
    
    //Verificar se é um triangulo
    //o && serve para verificar se todas as condições são verdadeiras, se pelo menos uma não for, ele pula lá pro else do fim e diz que não é um triangulo
    //os dois lados menores do triangulo precisam ser maiores que o terceiro para um triangulo ser formado
    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        document.getElementById("resultado").innerText = "É um triângulo!"

        //Verificar o tipo do triangulo
        // === serve para dizer se as variaveis tem valores identicos
        if (ladoA === ladoB && ladoB === ladoC) {
            document.getElementById("tipo").innerText = "É um triângulo equilátero"
        // || Serve para verificar  se pelo menos uma das condições é verdadeira, diferente do && que só passa se todas forem verdadeiras
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            document.getElementById("tipo").innerText = "É um triângulo Isósceles"
        } else {
            document.getElementById("tipo").innerText = "É um triângulo Escaleno"
        }
    } else {
        document.getElementById("resultado").innerText = "Não é um triângulo!"
        document.getElementById("tipo").innerText = ""
    }
}