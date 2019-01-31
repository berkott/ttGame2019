class Rocket{
    constructor(scene) {
        this.scene = scene;
        this.rocket = this.scene.add.sprite(320, 500, 'spaceShip');
        //spritesheeet
        // this.player.scaleX = 40;
        // this.player.scaleY = 40;
        
        // sprite.scale.x = value;
        //  sprite.scale.y = value;
        // this.player.scale.setTo(40, 40);

        this.bullets = [];
    }

    // create(){
    //     this.scene.add.sprite(200, 200, 'spaceShip');
    // }

    move(mvmt){
        if(mvmt.left === true){
            this.rocket.x -= 2;
        } else if(mvmt.right === true){
            this.rocket.x += 2;
        } else{
            this.rocket.x =0
        }
    }

    

//?
    fire(shooting){
        for(let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].fly();

            if(this.bullets[i].bulletOut() == true){
                // this.bullets[i].terminate()
                this.bullets[i].bullets.destroy(true);
                this.bullets.splice(i, 1);
            }
        }
        
        if (shooting){
            this.bullets.push(new Bullet(this.scene, this.rocket.x));
        }
    }

    collectCargo(rocket, cargo) {
            this.physics.add.overlap(cargo, rocket, collectCargo, null, this);
            cargo.destroy(cargo.x, cargo.y); // remove the tile/coin
            // coin.children.iterate(function (child) 
            //set gravity on coins
        }
    
    collectHatchPanels(rocket, hatchPanels) {
        this.physics.add.overlap(hatchPanels, rocket, collectHatchPanels, null, this);
        hatchPanels.destroy(hatchPanels.x, hatchPanels.y); // remove the tile/coin
        hatchPanelsScore ++; // increment the score
        text.setText(`Hatch Panels: ${hatchPanelsScore}x`); // set the text to show the current score
        return false;
    }
    
    asteroidCrash(rocket, bombs) {
            game.physics.add.collider(rocket, bombs, asteroidCrash, null, this);
            this.physics.pause();
            
        // set an explosion after asteroid crashes
            gameOver = true;
        }
    }