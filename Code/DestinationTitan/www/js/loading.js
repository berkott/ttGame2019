class Loading extends Phaser.Scene {
    constructor() {
        super({ key: 'Loading', active: true });
        this.loadingTime = 75;
    }

    preload() {
        this.load.image('technoLogo', './imgs/technoTitanLogo.png');
    }

    create() {
        this.technoLogo = this.add.image(window.innerWidth/2, window.innerHeight*0.45, 'technoLogo');
        this.technoLogo.setDisplayWidth = window.innerWidth*0.4
        this.technoLogo.setDisplayHeight = window.innerHeight*0.4;
        this.technoLogo.setOrigin(0.5, 0.5);
    }

    update() {
        if(this.loadingTime > 0){
            this.loadingTime--;
        }
        if(this.loadingTime == 0) {
            this.scene.stop('Loading');
            this.scene.start('Menu');
        }
    }
}