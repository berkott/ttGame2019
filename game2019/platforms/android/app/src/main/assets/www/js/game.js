let game;

let gameOptions = {
    asteroidSpeedRange: [200, 200],
    spaceSpeed: 80,
    rocketStartPosition: 320,
    cargoPercent: 1,
    alienPercent: 5,
    hatchPanelsPercent: 1,
    asteroidPercent: 1
};

function scaler() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setMinMax(400, 300, 800, 600);
    scaleRatio = window.devicePixelRatio / 3;
}
function preload() {
    this.load.image('space', './imgs/spacegif.jpg');
    this.load.image('rocket', './imgs/rocket.png');
    this.load.image('alien', './imgs/alien.gif');
    this.load.image('asteroid', './imgs/asteroid.png');
    this.load.image('cargo', './imgs/cargo.png');
    this.load.image('hatchPanels', './imgs/hatchPanel.png');
    this.load.image('bullets', './imgs/laserBlasts.jpg');
    this.load.image('primus', './imgs/primus.png');
    this.load.image('hatchIcon', './imgs/hatchIcon.png');
}

let space;
let primus;
let rocket;
let controls;
let collectAsset;
let scoreText;

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
    console.log(navigator.accelerometer);
}

function create() {

    space = this.add.tileSprite((window.innerWidth/2), (window.innerHeight/2), window.innerWidth, window.innerHeight, 'space');
    primus = this.add.tileSprite((window.innerWidth/2), window.innerHeight, window.innerWidth, window.innerHeight, 'primus');
    rocket = new Rocket(this);
    controls = new Controls(this);
    window.addEventListener('resize', resize);
    resize();

    this.anims.create({
        key: "rotate",
        frames: this.anims.generateFrameNumbers("hatchPanels", {
            start: 0,
            end: 5
        }),
        frameRate: 10,
        yoyo: true,
        repeat: -1
    });

    collectAsset = new collectAssets(this);
    //boost
    // if spacebar = full 

    // top header tracker
    pause = new Pause(this);
    hatchIcon = this.physics.add.staticGroup();
    hatchIcon.create((535/640)*window.innerWidth, (29/960)*window.innerHeight, 'hatchIcon');
    let hatchPanelsCollected = 0;
        fill: '#ffffff'
    // });
    // text.setScrollFactor(0);

    scoreText = this.add.text(25, 20, 'Score: 0', {
        fontSize: '20px',
        fill: '#ffffff'
    });



}


let score = 0;
let updateRate = 10;
let currentUpdate = 0;

// // alien
//     alien = this.physics.add.gif({
//         key: 'alien',
//         repeat: Phaser.Math.Between(1,10),
//         setXY: { x: Phaser.Math.Between(1,10), y: 0, stepY:10000}
//     });
// black hole portal (maybe not)

function update() {
    currentUpdate += 1;
    // console.log(controls.getMotio n())
    rocket.move(controls.getMotion());
    // rocket.fire(controls.getShooting());

    collectAsset.assetCreate();

    space.tilePositionY -= 5;
    primus.tilePositionY -= 2;

//     text.setScrollFactor(0);
    if(currentUpdate === updateRate) {
        scoreText.destroy();
        scoreText = this.add.text(25/window.innerWidth
            , 20/window.innerHeight, 'Score: ' + score, {
            fontSize: '20px',
            fill: '#ffffff'
        });
        // scoreText.setText('Score: ' + score);


        score++;
        currentUpdate = 0;
    }
    // if (rocket == blackhole && boost = True) {
    //     this.load.image('space', "")
    // }
    if (primus.tilePositionY <= -370) {
        primus.destroy();
    }
}


function resize() {
    var canvas = game.canvas, width = window.innerWidth, height = window.innerHeight;
    var wratio = width / height, ratio = canvas.width / canvas.height;

    if (wratio < ratio) {
        canvas.style.width = width + "px";
        canvas.style.height = (width / ratio) + "px";
    } else {
        canvas.style.width = (height * ratio) + "px";
        canvas.style.height = height + "px";
    }
}

