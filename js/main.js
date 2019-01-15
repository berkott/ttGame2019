var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 900,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y:  100}
        }
    },
    scene: {
        preload: preload,
        create: create,
        handleOrientation: handleOrientation,
        scores: scores,
        collectCargo: collectCargo,
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
    game.load.image('background', 'spacegif.jpg');
    game.load.image('ship', 'rocket.png');
    game.load.image('alien', 'alien.jpg');
    game.load.image('bombs', 'asteroid.jpg');
    game.load.image('cargo', 'cargo.jpg')
    //     { frameWidth: 92, frameHeight: 48 }
    // );
}

function create () {
// space background
    var background = game.physics.add.staticGroup();
    game.add.image(600, 900, 'background');

// rocket
    var ship = game.physics.add.staticGroup();
    game.add.image(300, 775, 'ship');
    ship.setCollideWorldBounds(true);
    // add rocket sprite sheet

// asteroid
    var bombs = game.physics.add.staticGroup({
        key: 'bombs',
        repeat: 14,
        setXY: { x: 12, y: 100, stepX: 70 }
    });
    game.physics.add.collider(ship, bombs, asteroidCrash, null, this);

// cargo and boost
    cargo = game.physics.add.group({
        key: 'cargo',
        repeat: 14,
        setXY: { x: 12, y: 100, stepX: 70 }
    });

// hatchPanels for upgrades * set repeats continuously for cargo, this, and asteroid
    hatchPanels = game.physics.add.group({
        key: 'hatchPanels',
        repeat: 2,
        setXY: { x: 12, y:100, stepX: 70, stepY: 10000 }
    });

// alien
    alien = game.physics.add.staticGroup();

// black hole portal

// primus

    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
}

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation (e) {
    var alpha = event.alpha;
    var z = event.alpha;
    

}

function scores() {
    
}

function collectCargo(ship, cargo) {
    this.physics.add.overlap(cargo, ship, collectCargo, null, this);
    // coin.children.iterate(function (child) 
    //set gravity on coins
}

function firing(laserBlasts, bombs) {
//     if (game.time.now > nextFire && laserBlasts.countDead() > 0) {
//         nextFire = game.time.now + fireRate;
//        var laserBlasts = laserBlasts.getFirstDead();
   
//            laserBlasts.reset(rocket.x - 8, rocket.y - 8);
//    // change rocket or sprite. x and .y dimensions
//            game.physics.arcade.moveToPointer(laserBlasts, 300);
//        }
//     laserBlasts = this.physics.add.group();
//     this.physics.add.collider(laserBlasts,asteroid, firing, null, this);
//     // set explosion on asteroid
}

function asteroidCrash(ship, bombs) {
    this.physics.pause();
// set an explosion after asteroid crashes
    gameOver = true;
}