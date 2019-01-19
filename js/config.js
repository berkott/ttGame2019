 let config = {
    type: Phaser.AUTO,
    width: 600,
    height: 900,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
let game = new Phaser.game(config);