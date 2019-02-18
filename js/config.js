window.onload = function() {
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 960,
    scene: {
        // loading: loading,
        // loadScreen: loadScreen
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
        // arcade: {
        //     gravity: { y: 70 }
        // }
    }
}

game = new Phaser.Game(config);

window.focus();
    resize();
    window.addEventListener("resize", resize, false);
}