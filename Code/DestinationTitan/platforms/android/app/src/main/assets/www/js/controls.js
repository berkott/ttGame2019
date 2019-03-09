class Controls {
    // add;
    constructor(scene) {
        this.scene = scene;

        this.left = false;
        this.right = false;

        // this.leftArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        // this.rightArrow = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);        
        this.scene.input.on("pointerdown", (context)=>{
            console.log("down")
            // console.log(context)
            if(context.position.y>100 && context.position.x < window.innerWidth/2){
                this.left = true;
                this.right = false;
            } else {
                this.right = true;
                this.left = false;
            }
        });
        this.scene.input.on("pointerup", (context)=>{
            console.log("up")
            console.log(context);
            this.right = false;
            this.left = false;
        })
        // this.leftbutton = this.scene.add.zone(0, 0,150,2000);
        // this.leftbutton.setInteractive();

        // this.leftbutton.on('pointerdown', () => {
        //     console.log('left');
        //     this.left = true;
        //     this.right = false;
        // }, this);
        // this.leftbutton.on('pointerup', () => {
        //     console.log('left up');
        //     this.left = false;
        //     this.right = false;
        // }, this);

        // // this.rightbutton = this.scene.add.zone(window.innerWidth/2, 0, window.innerWidth/2-1, window.innerHeight-1);
        // this.rightbutton = this.scene.add.zone(200,0,150,2000);
        // this.rightbutton.setInteractive();

        // this.rightbutton.on('pointerdown', () => {
        //     console.log('right');
        //     this.left = false;
        //     this.right = true;
        // }, this);
        // this.rightbutton.on('pointerup', () => {
        //     console.log('right up');
        //     this.left = false;
        //     this.right = false;
        // }, this);
    }


    create() {
        console.log("okk");

        // window.addEventListener('resize', resize);
        // resize();

        // For location
        // this.button = this.add.rectangle((320/640)*window.innerWidth, (480/960)*window.innerHeight, window.innerWidth*0.8, window.innerHeight*0.5);
        // this.leftbutton = this.add.image(window.innerWidth/2, window.innerHeight);
        //     this.leftbutton.displayWidth = window.innerWidth;
        //     this.leftbutton.displayHeight = window.innerHeight;


    //     this.leftbutton = this.add.rectangle(0, 0, window.innerWidth/2, window.innerHeight);
    //     this.leftbutton.setInteractive();

    //     this.leftbutton.on('pointerdown', function() {
    //         console.log('left');
    //         this.leftArrow = true;
    //     }, this);
    //     this.rightbutton = this.add.rectangle(window.innerWidth/2, window.innerHeight, window.innerWidth, 0);
    //     this.rightbutton.setInteractive();

    //     this.rightbutton.on('pointerdown', function() {
    //         console.log('right');
    //         this.rightArrow = true;
    //         this.button.destroy();
    //     }, this);
    }
    tester(){
        this.leftbutton = this.add.rectangle(0, 0, window.innerWidth/2, window.innerHeight);
        this.leftbutton.setInteractive();

        this.leftbutton.on('pointerdown', function() {
            console.log('left');
            this.leftArrow = true;
        }, this);
        this.rightbutton = this.add.rectangle(window.innerWidth/2, window.innerHeight, window.innerWidth, 0);
        this.rightbutton.setInteractive();

        this.rightbutton.on('pointerdown', function() {
            console.log('right');
            this.rightArrow = true;
        }, this);

    }
    // tester(){

    //     if (this.leftbutton === true){
    //         console.log("HD");
    //     }
    // }

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

    getMotion() {
        // this.update();
        return { left: this.left, right: this.right };
    }

}
