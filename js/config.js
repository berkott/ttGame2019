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
};

    game = new Phaser.Game(config);
    game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');const SAFE_ZONE_WIDTH=2048;const SAFE_ZONE_HEIGHT=1365;var lGameScale=Math.round(10000 * Math.min(game.width/SAFE_ZONE_WIDTH,game.height / SAFE_ZONE_HEIGHT)) / 10000;var world= game.add.group ();world.scale.setTo (lGameScale,lGameScale);world.x=(game.width-SAFE_ZONE_WIDTH*lGameScale)/2;world.y=(game.height-SAFE_ZONE_HEIGHT*lGameScale)/2;

window.focus();
    resize();
    window.addEventListener("resize", resize, false);
};

function gofull() {
    game.stage.scale.startFullScreen();

    game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL; toogame.stage.scale.setShowAll();game.stage.scale.refresh();

    Phaser.StageScaleMode.EXACT_FIT = 0

}