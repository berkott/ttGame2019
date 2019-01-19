class Controls{

    constructor (scene){
        this.scene = scene;
        this.left = false;
        this.right = false;
        this.space = false;
        
        // this.keyboard();
    }
    
    window.addEventListener("deviceorientation", handleOrientation, true);



    // keyboard(){
    //     this.scene.input.keyboard.on('keydown_ArrowLeft', (e) => { this.left = true });
    //     this.scene.input.keyboard.on('keyup_ArrowLeft', (e) => { this.left = false });

    //     this.scene.input.keyboard.on('keydown_ArrowRight', (e) => { this.right = true });
    //     this.scene.input.keyboard.on('keyup_ArrowRight', (e) => { this.right = false });

    //     this.scene.input.keyboard.on('keydown_Space', (e) => { this.space = true });
    //     this.scene.input.keyboard.on('keyup_Space', (e) => { this.space = false });
    // }
    
    // getMotion() {
    //     return {left: this.left, right: this.right};
    // }

    getShooting(){
        return this.space;
    }    
}