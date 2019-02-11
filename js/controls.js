class Controls {
    constructor(scene) {
        this.scene = scene;

        this.up = false;
        this.right = false;
        this.space = false;


        this.keyboard();
        // window.addEventListener('deviceorientation');
    }

    handleOrientation(event) {
        var y = event.gamma; // In degree in the range [-90,90]
        output.innerHTML += "gamma: " + y + "\n";
        y += 90;
        // rocket size is 80 by 150; 40 is half of its size
        // It center the positioning point to the center of the ball
        rocket.style.left = (maxY * y / 180 - 40) + "px";
    }

    keyboard() {
        this.scene.input.keyboard.on('keydown_ArrowLeft', (e) => { this.left = true });
        this.scene.input.keyboard.on('keyup_ArrowLeft', (e) => { this.left = false });

        this.scene.input.keyboard.on('keydown_ArrowRight', _ => { this.right = true });
        this.scene.input.keyboard.on('keyup_ArrowRight', _ => { this.right = false });

        this.scene.input.keyboard.on('keydown_Space', _ => { this.space = true });
        this.scene.input.keyboard.on('keyup_Space', _ => { this.space = false });
    }

    getMotion() {
        return { left: this.left, right: this.right };
    }

    getShooting() {
        return this.space;
    }
}