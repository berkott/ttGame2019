let gameOptions = {
    cargoPercent: 20,
    alienPercent: 5,
    hatchPanelsPercent: 20,
    asteroidPercent: 100 
}
function preload () {
    this.load.image('space', '../imgs/spacegif.jpg');
    this.load.image('spaceShip', '../imgs/rocket.png');
    this.load.image('alien', '../imgs/alien1.png');
    this.load.image('bombs', '../imgs/asteroid.jpg');
    this.load.image('cargo', '../imgs/cargo.jpg');
    this.load.image('hatchPanels', '../imgs/hatchPanels.jpg');
    this.load.image('bullets', '../imgs/laserBlasts.jpg');
    this.load.image('primus', '../imgs/primus.png');
    this.load.image('hatchIcon', '../imgs/hatchIcon.png');

    this.anims.create({
        key: "rotate",
        frames: this.anims.generateFrameNumbers("cargo", {
            start: 0,
            end: 5
        }),
        frameRate: 5,
        yoyo: true,
        repeat: -1
        });
    
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
}

function create () {
    // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;               //Shows the entire game while maintaining proportions
    // this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    // this.scale.pageAlignHorizontally = true;                           //Align the game
    // this.scale.pageAlignVertically = true;

    space = this.add.tileSprite(480, 320, 960, 640, 'space');
    
    primus = this.add.tileSprite(300, 600, 700, 250, 'primus');
    rocket = new Rocket(this);
    controls = new Controls(this);
    collectAssets = new collectAssets(this);
    // collectAssets = new collectAssets(this);
//boost
    // if spacebar = full 

// top header tracker
    let hatchPanelsCollected = 0; 
    text = this.add.text(610, 20, `${hatchPanelsCollected}`, {
        fontSize: '20px',
        fill: '#ffffff'
      });
    text.setScrollFactor(0); 
    hatchIcon = this.physics.add.staticGroup();
    hatchIcon.create(600, 24, 'hatchIcon');

    let score = space.tilePositionY;
    score = this.add.text(25, 20, `${score}`, {
        fontSize: '20px',
        fill: '#ffffff'
    });
      text.setScrollFactor(0); 
    
// alien
    alien = this.physics.add.sprite({
        key: 'alien',
        repeat: Phaser.Math.Between(1,10),
        setXY: { x: Phaser.Math.Between(1,10), y: 0, stepY:10000}
    });
// black hole portal (maybe not)
}

function update() {
    rocket.move(controls.getMotion());
    rocket.fire(controls.getShooting());

    space.tilePositionY -= 2;
    primus.tilePositionY -= 2;

    // if (rocket == blackhole && boost = True) {
    //     this.load.image('space', "")
    // }
    if (primus.tilePositionY <= -370) {
        primus.destroy();
    }
}
