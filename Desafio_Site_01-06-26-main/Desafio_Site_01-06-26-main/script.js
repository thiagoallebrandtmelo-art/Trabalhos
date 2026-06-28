let aberto = false;

function abrirMenu() {
    const menu = document.getElementById("menu");

    if(aberto) {
        menu.style.left = "-250px";
        aberto = false;
    } else {
        menu.style.left = "0";
        aberto = true;
    }
}