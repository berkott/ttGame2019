class Bullet {
    constructor(scene, x){
        this.scene = scene;
        this.bullets = this.scene.add.sprite(x, 240, 'bullet');
        // this.fly();
    }

    fly(){
        this.bullets.y += 3;
    }

    //what does the return true or false do
    bulletsOut(){
        if(this.bullets.y > 960){
            return true;
        }
        return false;
    }

    firing(bullets, asteroids) {
        this.physics.add.collider(bullets, asteroids, firing, null, this);
            // set explosion on asteroid
        }
}

