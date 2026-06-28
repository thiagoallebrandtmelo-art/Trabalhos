class PipePair {
    constructor() {
        this.gap = 140;

        this.topHeight = floor(random(50, height - 50 - this.gap));
        this.bottomHeight = height - this.topHeight - this.gap;

        this.topPipe = new Pipe(true, this.topHeight);
        this.bottomPipe = new Pipe(false, this.bottomHeight);
    }

    show() {
        this.topPipe.show();
        this.bottomPipe.show();
    }

    update() {
        this.topPipe.update();
        this.bottomPipe.update();
    }

    offscreen() {
        return this.topPipe.x + this.topPipe.width < 0;
    }

    collided(player) {
        return this.topPipe.collided(player) || this.bottomPipe.collided(player);
    }
}
