var game = new Phaser.game(640,360, Phaser .AUTO);

var GameState = {
    preload: function(){

    },
    create: function(){

    },
    update: function(){

    }
}
game.state.add('GameState', GameState);
game.state.start('GameState');

var config = {
    type: TTGame2019.AUTO,
    width: 600,
    height: 900,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        handleOrientation: handleOrientation,
        scores: scores,
        collectCoin: collectCoin,
        firing: firing,
        asteroidCrash: asteroidCrash,
    }
};
var leftPressed = false;
var rightPressed = false;
var spacebar = false;
var score = 0;
var fireRate = 100;
var nextFire = 0;

function preload () {
    game.load.image('space', '../imgs/space.png' );
    game.load.image('rocket', '../imgs/rocket.png');
    game.load.image('asteroid', '../imgs/asteroid.jpg');
    game.load.image('laserBlasts', '../imgs/laserBlasts.jpg');
}

function create () {
    game.add.image(600, 900, 'space');

    var rocket = game.add.image(300, 775, 'rocket');
    rocket.setCollideWorldBounds(true);
    // add rocket sprite sheet

    cargo = this.physics.add.group({
        key: 'cargo',
        repeat: 14,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    hatchPanels = this.physics.add.group({
        key: 'hatchPanels'
        
    });

    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
}

window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation (e) {
    var alpha = event.alpha;
    var z = event.alpha;
    

}

function scores() {
    
}

function collectCoin(rocket, coin) {
    this.physics.add.overlap(coin, rocket, collectCoin, null, this);
    // coin.children.iterate(function (child) 
    //set gravity on coins
}

function firing(laserBlasts, asteroid) {
    if (game.time.now > nextFire && laserBlasts.countDead() > 0) {
        nextFire = game.time.now + fireRate;
       var laserBlasts = laserBlasts.getFirstDead();
   
           laserBlasts.reset(rocket.x - 8, rocket.y - 8);
   // change rocket or sprite. x and .y dimensions
           game.physics.arcade.moveToPointer(laserBlasts, 300);
       }
    laserBlasts = this.physics.add.group();
    this.physics.add.collider(laserBlasts,asteroid, firing, null, this);
    // set explosion on asteroid
}

function asteroidCrash(rocket, asteroid) {
    asteroid = this.physics.add.group();
    this.physics.add.collider(rocket, asteroid, asteroidCrash, null, this);

    this.physics.pause();
// set an explosion after asteroid crashes
    gameOver = true;
}