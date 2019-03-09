class Rocket{
    constructor(scene) {
        this.scene = scene;
        this.rocket = this.scene.physics.add.sprite(window.innerWidth * 0.5, window.innerHeight * 0.93, 'rocket');
        this.rocket.displayWidth = window.innerWidth*0.2;
        this.rocket.displayHeight = window.innerHeight*0.2;   
        
        this.dead = false;
        //spritesheeet
        // this.player.scaleX = 40;
        // this.player.scaleY = 40;
        
        // sprite.scale.x = value;
        //  sprite.scale.y = value;
        // this.player.scale.setTo(40, 40);

        // this.bullets = [];
        // this.update();
    }

    move(mvmt){
        if(this.rocket.x - window.innerWidth*0.06 <= 0) {
            mvmt.left = false;
        }
        else if(this.rocket.x + window.innerWidth*0.06 >= window.innerWidth) {
            mvmt.right = false;
        }
        if(mvmt.left === true){
            this.rocket.x -= 5;
        } else if(mvmt.right === true){
            this.rocket.x += 5;
        }
    }

    walls(){
        if (this.rocket.x < 0){
            rocket.x = 150 - math.abs(rocket.x)
        }
    }

    direction() {
        this.rocket.body.velocity.x = 0;

        if (cursors.left.isDown) {
            this.rocket.x = -200;
        } else if (cursors.right.isDown) {
            this.rocket.body.velocity.x = 200;
        }
        console.log("direction");
    }

    //     var mvmt = event.gamma;
    //     window.addEventListener('deviceorientation', function(event) {
    //     if (mvmt >= 45) {
    //         this.rocket.x += mvmt/100;
    //     } else if (mvmt < 45){
    //         this.rocket.x -= mvmt/100;
    //     }
    // });

    // walls() {
    //     if (rocket.x > width){
    //         rocket.x = 0 - rocket.width;
    //     } else if (rocket.x < 0 - rocket.width) {
    //         rocket.x = width;
    //     }
    // }


    //?
    //     fire(shooting){
    //         for(let i = 0; i < this.bullets.length; i++) {
    //             this.bullets[i].fly();
    //
    //             if(this.bullets[i].bulletOut() === true){
    //                 // this.bullets[i].terminate()
    //                 this.bullets[i].bullets.destroy(true);
    //                 this.bullets.splice(i, 1);
    //             }
    //         }
    //        
    //         if (shooting){
    //             this.bullets.push(new Bullet(this.scene, this.rocket.x));
    //         }
    //     }

    update() {
        console.log("update");

        if(this.rocket.x -window.innerWidth*0.08 >= this.cargoGroup.x - 50 || this.rocket.x + window.innerWidth*0.04 <= this.cargoGroup.x +50 && this.rocket.y == this.cargoGroup.y) {

            cargo.destroy();
            console.log("Hello");
            //add to boost
        }


        if(this.rocket.x -window.innerWidth*0.08 >= this.asteroidGroup.x -50 || this.rocket.x + window.innerWidth*0.04 <= this.asteroidGroup + 50 && this.rocket.y == this.asteroid.y) {
            asteroid.destroy();
            this.dying();
            console.log("asteroid");
        }
    }

    dying() {
        console.log("Dang we died rip bye! :D XD");
        this.dead = true;
        console.log(this.dead);
        // window.onbeforeunload()
        //add gameOver
        // this.scene.scene.remove("Game_");
        // this.scene.launch('Game_');
    }

    // getDeath() {
    //     // console.log(this.dead);
    //     return this.dead;
    // }

    // kill(){
    //     this.rocket.destroy();
    // }

    // asteriod: this.asteroidGroup, cargo: this.cargoGroup
    checkCollision(assets){
        // console.log("Rocket X: " + this.rocket.x);
        // console.log("Rocket Y: " + this.rocket.y);
        for (let i = 0; i < assets.asteroid.length; i++) {
            // console.log("Asteroid X: " + assets.asteroid[i].x);
            // console.log("Asteroid Y: " + assets.asteroid[i].y);
            // this.scene.physics.overlap(assets.asteroid[i], this.rocket, function() {
            if (assets.asteroid[i].x >= this.rocket.x -window.innerWidth*0.08 && assets.asteroid[i].x <= this.rocket.x + window.innerWidth*0.08 && this.rocket.y + window.innerHeight* 0.05 >= assets.asteroid[i].y && this.rocket.y - window.innerHeight*0.1 <= assets.asteroid[i].y) {

                this.rocket.destroy();
                console.log("Dang we died rip bye!! :D XD");
                this.scene.scene.stop("Game_");
                this.scene.scene.start("GameOver");
            }
        }
        
        for (let i = 0; i < assets.cargo.length; i++) {
            if (assets.cargo[i].x -10 > this.rocket.x -window.innerWidth*0.08 && assets.cargo[i].x + 10 < this.rocket.x + window.innerWidth*0.08 && this.rocket.y + window.innerHeight* 0.05 > assets.cargo[i].y +10 && this.rocket.y - window.innerHeight* 0.1 < assets.cargo[i].y -10) {
                assets.cargo[i].destroy();
                score += 50;
            }
        }
    }
}

// this.physics.add.overlap(this.rocket, assets.asteroid, function(rocket, asteroid){
//     this.dying = true;
//     this.physics.world.removeCollider(this.platformCollider);

// }, null, this);

// this.physics.add.overlap(hatchPanels, rocket, collectHatchPanels, null, this);
//         hatchPanels.destroy(hatchPanels.x, hatchPanels.y); // remove the tile/coin
//         hatchPanelsScore ++; // increment the score
//         text.setText(`Hatch Panels: ${hatchPanelsScore}x`); // set the text to show the current score
//         return false;