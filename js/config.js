 let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 960,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 100 }
        }
      }
   };
let game = new Phaser.Game(config);
