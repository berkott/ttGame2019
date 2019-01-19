class Rocket{
    constructor(scene) {
        this.scene = scene;
        this.rocket = this.scene.add.sprite(200, 200, 'spaceShip');
        //we need to find the scale of our rocket and make spritesheet
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
        }
    }

//?
    fire(shooting){
        for(let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].fly();

            if(this.bullets[i].bulletOut() == true){
                // this.bullets[i].terminate()
                this.bullets[i].bullet.destroy(true);
                this.bullets.splice(i, 1);
            }
        }
        
        if (shooting){
            this.bullets.push(new Bullet(this.scene, this.rocket.x));
        }
    }

    collectCargo(rocket, cargo) {
            this.physics.add.overlap(cargo, rocket, collectCargo, null, this);
            // coin.children.iterate(function (child) 
            //set gravity on coins
        }
    
    asteroidCrash(rocket, bombs) {
            this.physics.pause();
            game.physics.add.collider(rocket, bombs, asteroidCrash, null, this);
        // set an explosion after asteroid crashes
            gameOver = true;
        }
    }