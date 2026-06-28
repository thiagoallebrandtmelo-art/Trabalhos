class Player { 
    // base para  criar o jogador
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velY = 0;
        this.velX = 0;
        this.size = 30;
    }

    show() {
        noStroke();
        fill(255, 255, 0);
        ellipse(this.x, this.y, this.size);
    }

    update() {
        this.velY += gravity;
        this.y += this.velY;
    }

    flap() {
        this.velY = -10;
    }
}
