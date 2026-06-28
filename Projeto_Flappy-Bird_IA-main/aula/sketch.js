var panSpeed = 3;
var gravity = 0.5;
var player;
var pipes = [];
var spawnTimer = 0;
var spawnInterval = 120;


function setup() {
    createCanvas(800, 600);
    player = new Player(100, height / 2);


    pipes.push(new PipePair());
}


function draw() {
    background(135, 206, 250);


    spawnTimer++;


    if (spawnTimer > spawnInterval) {
        pipes.push(new PipePair());
        spawnTimer = 0;
    }


    for (let i = pipes.length - 1; i >= 0; i--) {


        pipes[i].update();
        pipes[i].show();


        if (pipes[i].collided(player)) {
            console.log("Game Over");
            noLoop();
        }


        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }


    player.update();
    player.show();
}


function keyPressed() {
    if(key === ' ') {
        player.flap();
    }
}
