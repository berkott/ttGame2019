class Controls {
    constructor(scene) {
        this.scene = scene;

        this.left = false;
        this.right = false;

        // window.addEventListener('deviceorientation');
        this.leftArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.rightArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        // this.leftArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    }

    handleOrientation(event) {
        var y = event.gamma; // In degree in the range [-90,90]
        output.innerHTML += "gamma: " + y + "\n";
        y += 90;
        // rocket size is 80 by 150; 40 is half of its size
        // It center the positioning point to the center of the ball
        rocket.style.left = (maxY * y / 180 - 40) + "px";
    }

    update(){
        if (this.leftArrow.isDown) {
            this.left = true;
            this.right = false;
        } else if (this.rightArrow.isDown) {
            this.right = true;
            this.left = false;
        } else{
            this.left = false;
            this.right = false;
        }

    }



    // update(){
    //     if (this.leftArrow.isDown) {
    //         this.left = true;
    //         this.right = false;
    //         console.log('teu')
    //     } else if (this.rightArrow.isDown) {
    //         this.right = true;
    //         this.left = false;
    //     } else{
    //         this.left = false;
    //         this.right = false;
    //     }
    //
    // }

    getMotion() {
        this.update();
        return { left: this.left, right: this.right };
    }
}