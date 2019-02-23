class Rocket{
    constructor(scene) {
        this.scene = scene;
        this.rocket = this.scene.add.sprite(gameOptions.rocketStartPosition, game.config.height * 0.9, 'rocket');   
        //spritesheeet
        // this.player.scaleX = 40;
        // this.player.scaleY = 40;
        
        // sprite.scale.x = value;
        //  sprite.scale.y = value;
        // this.player.scale.setTo(40, 40);

        this.bullets = [];
    }

    move(mvmt){
        if(mvmt.left === true && this.rocket.x > 0){
            this.rocket.x -= 5;
        } else if(mvmt.right){
            this.rocket.x += 5;
        }

        if(this.rocket.x < 0){
            this.rocket.x = 0;
        } else if (this.rocket.x > game.config.width){
            this.rocket.x = game.config.width;
        }
        // console.log(navigator.gyroscope.getCurrentGyroscope(gyroscopeSuccess, gyroscopeError));
    }




    // walls(){
    //     if (rocket.x < 0){
    //         console.log("x -")
    //         rocket.x = 150 - math.abs(rocket.x)
    //
    //     }
    // }

    
    direction(){
        this.rocket.body.velocity.x = 0;

        if (cursors.left.isDown) {
            this.rocket.x = -200;
        } else if (cursors.right.isDown) {
            this.rocket.body.velocity.x = 200;
        }
    }
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

    collectCargo() {
        this.physics.add.overlap(this.rocket, this.cargoGroup, function(rocket, cargo){
            this.tweens.add({
                targets: cargo,
                y: cargo.y - 100,
                alpha: 0,
                duration: 800,
                ease: "Cubic.easeOut",
                callbackScope: this,
                onComplete: function(){
                    this.cargoGroup.killAndHide(cargo);
                    this.cargoGroup.remove(cargo);
                }
            });
    
        }, null, this);
    }
    
    collectHatchPanels() {
        this.physics.add.overlap(this.rocket, this.hatchPanelsGroup, function(rocket, hatchPanels){
            this.tweens.add({
                targets: hatchPanels,
                y: hatchPanels.y - 100,
                alpha: 0,
                duration: 800,
                ease: "Cubic.easeOut",
                callbackScope: this,
                onComplete: function(){
                    this.hatchPanelsGroup.killAndHide(hatchPanels);
                    this.hatchPanelsGroup.remove(hatchPanels);
                    scoreText
                }
            });
    
        }, null, this);
    }
    
    asteroidCrash() {
        this.physics.add.overlap(this.rocket, this.asteroidGroup, function(rocket, asteroid){
 
            this.dying = true;
            this.rocket.anims.stop();
            this.rocket.setFrame(2);
            this.rocket.body.setVelocityY(-200);
            this.physics.world.removeCollider(this.asteroidcollider);
 
        }, null, this);

            // game.physics.add.collider(rocket, asteroid, asteroidCrash, null, this);
            // // this.physics.pause();
            // new Explosions();
        // set an explosion after asteroid crashes
            gameOver = true;
    }
}

// this.physics.add.overlap(hatchPanels, rocket, collectHatchPanels, null, this);
//         hatchPanels.destroy(hatchPanels.x, hatchPanels.y); // remove the tile/coin
//         hatchPanelsScore ++; // increment the score
//         text.setText(`Hatch Panels: ${hatchPanelsScore}x`); // set the text to show the current score
//         return false;