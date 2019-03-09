class gameOver extends Phaser.Scene{
    constructor(){
        super({key: 'GameOver', active: false});
    }

    preload() {
        this.load.image('gameOver', './imgs/gameover.png');
    }

    create() {
        console.log("YEEEEEE BRUH");
        // this.highScore = Math.max(score, highScore);
        // this.localStorage.setItem(localStorageName, highScore);

        this.gameOver = this.add.image(window.innerWidth*0.5, window.innerHeight*0.5,'gameOver');
        this.gameOver.displayWidth = window.innerWidth;
        this.gameOver.displayHeight = window.innerHeight;

        this.score = this.add.text(window.innerWidth*0.5, window.innerHeight*0.43, score, {
            fontSize: window.innerWidth*0.2 + 'px',
            fill: '#ffffff'
        });
        this.score.setOrigin(0.5,0.5);


        this.restartButton = this.add.text(window.innerWidth*0.5, window.innerHeight*0.6, "Restart", {
            fontSize: window.innerWidth*0.2 + 'px',
            fill: ''
        });
        this.restartButton.setOrigin(0.5,0.5);
        
        this.restartButton.setInteractive();

        this.restartButton.on('pointerdown', function () {
            this.scene.stop('GameOver');
            this.scene.start('Game_');
        }, this);


        this.menuButton = this.add.text(window.innerWidth*0.5, window.innerHeight*0.83, "Restart", {
            fontSize: window.innerWidth*0.2 + 'px',
            fill: ''
        });
        this.menuButton.setOrigin(0.5,0.5);
        
        this.menuButton.setInteractive();

        // this.menuButton = this.add.text(window.innerWidth*0.53, window.innerHeight*0.81, window.innerWidth*0.74, window.innerHeight*0.15);
        // this.menuButton.setInteractive();
       
         this.menuButton.on('pointerdown', function () {
            console.log('menu');
            this.scene.stop('GameOver');
            this.scene.start('Menu');
        }, this);

        if(score > localStorage.getItem('highscore')){
            localStorage.setItem('highscore', score);
        }
    }
}

// class gameOver extends Phaser.Scene{
//     constructor(){
//         super({key: 'GameOver', active: false});

//         console.log("yay, in game over");

//         // this.Over = this.scene.add.image((300/640)*window.innerWidth,(450,960)*window.innerHeight, 'over')
//         // this.button = this.scene.add.rectangle((410/640)*window.innerWidth,(450/960)*window.innerHeight, window.innerWidth, window.innerHeight*0.7)
//         // this.button.setInteractive();
//         // this.button('pointerdown', function(){
//         //     console.log('restart');
//         //     this.scene.start('Game');
//         // });
//         // this.create();
//     }

//     create(){
//         console.log(" BYEEEEEEYEEEEEERUH");
//         // game.physics.arcade.checkCollision.down = false;
//         // rocket.asteriodCrash = true;
//         // rocket.events.asteriodCollider.add(function(){
//         //     alert('Game Over');
//         //     location.reload();
//         // }, this);
//         this.pauseText = this.add.text(window.innerWidth/2, window.innerHeight/3, 'Go To Menu', {
//             fontSize: '80px',
//             fill: '#ffffff'
//         });

//         this.pauseText.setInteractive();

//         this.pauseText.on('pointerdown', function () {
//             this.scene.stop('GameOver');
//             this.scene.start('Menu');
//         }, this);
//     }
// }
