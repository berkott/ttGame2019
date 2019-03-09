class Menu extends Phaser.Scene {
    constructor() {
        super({key: 'Menu', active: true}); 
        this.score = 0;
    }

    preload() {
        this.load.image('titanMenu', './imgs/TitanMenu.png');
    }

    create() {
        console.log("okk");

        this.titanMenu = this.add.image(window.innerWidth/2, window.innerHeight/2, 'titanMenu');
            this.titanMenu.displayWidth = window.innerWidth;
            this.titanMenu.displayHeight = window.innerHeight;


        this.button = this.add.rectangle(window.innerWidth*0.52, window.innerHeight*0.53, window.innerWidth*0.63, window.innerHeight*0.1);
        this.button.setInteractive();
        
        this.button.on('pointerdown', function () {
            console.log('menu');
            this.scene.stop('Menu');
            this.scene.start('Game_');       
        }, this);

        // if (score > localStorage.getItem('highscore')) {
        this.score = localStorage.getItem('highscore');
        // }
            
        this.highScore = this.add.text(window.innerWidth/2, window.innerHeight*0.42, this.score, {
            fontSize: window.innerWidth*0.1 +'px',
            fill:'#ffffff'
        });
        this.highScore.setOrigin(0.5, 0.5);
    }
}