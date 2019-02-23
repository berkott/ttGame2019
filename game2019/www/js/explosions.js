// this is for the asteroid crash or any other explosions in the game 
class Explosions{
    preload () {
    this.load.path = 'assets/animations/';

    this.load.image('explosion1', '');
    this.load.image('explosion2', '');
    this.load.image('explosion3', '');
    this.load.image('explosion4', '');
    // put explosion images
}

    create () {
    this.anims.create({
        key: 'snooze',
        frames: [
            { key: 'explosion1' },
            { key: 'explosion2' },
            { key: 'explosion3' },
            { key: 'explosion4', duration: 40 }
        ],
        frameRate: 5,
    });

    this.add.sprite(this.rocket.x, this.rocket.y, 'explosion1').play('explode');
    }
}
