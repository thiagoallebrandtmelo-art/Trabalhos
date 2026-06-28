class Pipe {
    constructor(isTop, pipeHeight) {
        this.width = 80;
        this.height = pipeHeight;
        this.x = width;
        this.isTop = isTop;

        if (this.isTop) {
            this.y = 0;
        } else {
            this.y = height - this.height;
        }
    }

    show() {
        fill(0, 204, 0);
        rect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.x -= panSpeed;
    }

    collided(p) {
        let playerLeft = p.x - p.size / 2;
        let playerRight = p.x + p.size / 2;
        let playerTop = p.y - p.size / 2;
        let playerBottom = p.y + p.size / 2;

        let pipeLeft = this.x;
        let pipeRight = this.x + this.width;
        let pipeTop = this.y;
        let pipeBottom = this.y + this.height;

        if (
            playerRight > pipeLeft &&
            playerLeft < pipeRight &&
            playerBottom > pipeTop &&
            playerTop < pipeBottom 
        ) {
            return true;
        }

        return false;
    }
}
