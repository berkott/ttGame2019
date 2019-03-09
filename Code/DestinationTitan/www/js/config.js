let config;

let scene = [];
// scene.push(Loading);
scene.push(Menu);
scene.push(Game_);
scene.push(Pause);
scene.push(gameOver);
// scene.push(gameOver);

window.onload = function () {
    config = {
        type: Phaser.CANVAS,
        width: window.innerWidth * window.devicePixelRatio,
        height: window.innerHeight * window.devicePixelRatio,
        scene: scene,
        physics: {
            default: "arcade",
        },
        audio: {
            disableWebAudio: true
        }
    };
    game = new Phaser.Game(config);
    // window.focus();
    // resize();
    // window.addEventListener("resize", resize, false);
};

//     menuConfig = {
//         type: Phaser.AUTO,
//         width: 640,
//         height: 960,
//         scene:
//         {
//             preload: menuPreload,
//             create: menuCreate,
//             update: menuUpdate

//         },

//         physics: {
//             default: "arcade",
//         }
//     };
//     start();
// };