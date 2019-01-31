class Controls{

    constructor (scene){
        this.scene = scene;

        this.left = false;
        this.right = false;
        this.space = false;

        this.keyboard();
    }

    keyboard(){
        this.scene.input.keyboard.on('keydown_ArrowLeft', (e) => { this.left = true });
        this.scene.input.keyboard.on('keyup_ArrowLeft', (e) => { this.left = false });

        this.scene.input.keyboard.on('keydown_ArrowRight', _ => { this.right = true });
        this.scene.input.keyboard.on('keyup_ArrowRight', _ => { this.right = false });

        this.scene.input.keyboard.on('keydown_Space', _ => { this.space = true });
        this.scene.input.keyboard.on('keyup_Space', _ => { this.space = false });
    }
    
    getMotion() {
        return {left: this.left, right: this.right};
    }

    getShooting(){
        return this.space;
    }    
 }