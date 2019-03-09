let game;

let gameOptions = {
    asteroidSpeedRange: [200, 200],
    spaceSpeed: 80,
    rocketStartPosition: 320,
    cargoPercent: 1,
    alienPercent: 5,
    hatchPanelsPercent: 1,
    asteroidPercent: 2
};

let space;
let primus;
let rocket;
let controls;
let collectAsset;
let scoreText;
let pause;
let rightSide;
let leftSide;

let score = 0;
let updateRate = 10;
let currentUpdate= 0;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log(navigator.accelerometer);
}

class Game_ extends Phaser.Scene {
    constructor() {
        super({key: 'Game_', active: false});
    }

    scaler() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.setMinMax(400, 300, 800, 600);
        scaleRatio = window.devicePixelRatio / 3;
    }

    preload() {
        this.load.image('space', './imgs/spacegif.jpg');
        this.load.image('rocket', './imgs/rocket.png');
        this.load.image('alien', './imgs/alien.gif');
        this.load.image('asteroid', './imgs/asteroid.png');
        this.load.image('cargo', './imgs/cargo.png');
        this.load.image('hatchPanels', './imgs/hatchPanel.png');
        this.load.image('bullets', './imgs/laserBlasts.jpg');
        this.load.image('primus', './imgs/primus.png');
        this.load.image('hatchIcon', './imgs/hatchIcon.png');
        // this.load.image('Menu', 'TitanMenu.png');
        // this.load.audio('theme', ['./imgs/assets/audio/Deep_Space_Destructors_-_04_-_From_The_Ashes.mp3']);
    }

    create() {
        // var music= this.sound.add('theme');
        // music.play();

        space = this.add.tileSprite((window.innerWidth / 2), (window.innerHeight / 2), window.innerWidth, window.innerHeight, 'space');
        // primus = this.add.tileSprite((window.innerWidth/2), window.innerHeight, window.innerWidth, window.innerHeight, 'primus');
        primus = this.add.sprite((window.innerWidth / 2), (window.innerHeight * 0.7), 'primus');

        primus.displayWidth = window.innerWidth;
        primus.displayHeight = window.innerHeight * 0.6;

        rocket = new Rocket(this);
        controls = new Controls(this);
        // window.addEventListener('resize', resize);
        // resize();

        collectAsset = new collectAssets(this);
       
        scoreText = this.add.text(window.innerWidth*0.05, window.innerHeight*0.02, `Score:0`, {
            fontSize: window.innerWidth/18+'px',
        });

        scoreText = this.add.text(window.innerWidth * 0.01, window.innerHeight * 0.01, `Score:0`, {
            fontSize: '35px',

            fill: '#ffffff'
        });
        scoreText.setScrollFactor(0);

        this.pauseButton = this.add.rectangle(window.innerWidth * 0.93, window.innerHeight * 0.01, window.innerWidth * 0.1, window.innerHeight * 0.1);
        this.pauseButton.setInteractive();

        pause = this.add.text(window.innerWidth * 0.9, window.innerHeight * 0.01, `||`, {
            fontSize: '35px',
            fill: '#ffffff'
        });
        scoreText.setScrollFactor(0);

        this.pauseButton.on('pointerdown', function () {
            this.scene.launch('Pause');
            this.scene.pause();
        }, this);

        this.events.on('pause', function () {
            console.log('Scene A paused');
        });
        this.events.on('resume', function () {
            console.log('Scene A resumed');
        });
        score = 0;
    }
    update() {
        currentUpdate += 1;

        // if (currentUpdate === updateRate) {
            scoreText.destroy();
            scoreText = this.add.text(window.innerWidth*0.05, window.innerHeight*0.02, 'Score: ' + score, {
                fontSize: window.innerWidth/18+'px',
                fill: '#ffffff'
            });
            score++;
        //     currentUpdate = 0;
        // }

        // console.log(controls.getMotion())
        rocket.move(controls.getMotion());
        rocket.checkCollision(collectAsset.getAssetCoordinates());
        // rocket.fire(controls.getShooting());

        // if(rocket.getDeath() == true){
        //     console.log("yayyayay");
        //     this.scene.launch('gameOver');
        //     this.scene.remove();
        //     rocket.kill();
        // }

        collectAsset.assetCreate();

        space.tilePositionY -= 5;
        primus.y += 5;

        if (primus.y >= window.innerHeight * 2) {
            primus.destroy();
        }
        // if (this.leftArrow.isDown) {
        //     this.left = true;
        //     this.right = false;
        // } else if (this.rightArrow.isDown) {
        //     this.right = true;
        //     this.left = false;
        // } else{
        //     this.left = false;
        //     this.right = false;
        // }
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


// ==================== In Create ====================

// this.anims.create({
//     key: "rotate",
//     frames: this.anims.generateFrameNumbers("hatchPanels", {
//         start: 0,
//         end: 5
//     }),
//     frameRate: 10,
//     yoyo: true,
//     repeat: -1
// });

//boost
// if spacebar = full 

// top header tracker
// pause = new Pause(this);
// hatchIcon = this.physics.add.staticGroup();
// hatchIcon.create((535/640)*window.innerWidth, (29/960)*window.innerHeight, 'hatchIcon');
// let hatchPanelsCollected = 0;
// text = this.add.text(560, 20, hatchPanelsCollected, {
//     fontSize: '20px',
//     fill: '#ffffff'
// });
