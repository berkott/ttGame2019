function preload () {
    this.load.image('space', 'spacegif.jpg');
    this.load.image('spaceShip', 'rocket.png');
    this.load.image('alien', 'alien.jpg');
    this.load.image('bombs', 'asteroid.jpg');
    this.load.image('cargo', 'cargo.jpg');
    this.load.image('hatchPanels', 'hatchPanels.jpg');
    this.load.image('bullets', 'laserBlasts.jpg');
    this.load.image('primus', 'primus.png');
}

function create () {
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    space = this.add.tileSprite(450, 300, 900, 600, 'space');
    rocket = new Rocket(this);
    controls = new Controls(this);
// primus
    primus = this.add.tileSprite(250, 300, 900, 600,'primus');

// hatchPanels for upgrades *set repeats continuously for cargo, this, and asteroid
    asteroid = this.physics.add.sprite({
        key: 'bombs',
        repeat: 14,
        setXY: { x: 12, y: 100, stepX: 70 }
    });

    cargo = this.physics.add.sprite({
        key: 'cargo',
        repeat: 14,
        setXY: { x: 12, y: 100, stepX: 70 }
    });

    hatchPanels = this.physics.add.sprite({
        key: 'hatchPanels',
        repeat: 2,
        setXY: { x: 12, y:100, stepX: 70, stepY: 10000 }
    });

// alien
    alien = this.physics.add.sprite();

// black hole portal (maybe not)
}

function update() {
    rocket.move(controls.getMotion());
    rocket.fire(controls.getShooting());

    space.tilePositionY -= 2;
    primus.tilePositionY = space.tilePositionY;

    if (primus.tilePositionY <= -250) {
        this.primus.destroy(true);
        this.primus.splice(i, 1);
    }
}