class Bullet {
    constructor(scene, x){
        this.scene = scene;
        this.bullets = this.scene.add.sprite(x, 225, 'bullet');
        // this.fly();
    }

    fly(){
        this.bullets.y += 3;
    }

    //what does the return true or false do
    bulletsOut(){
        if(this.bullets.y > 800){
            return true;
        }
        return false;
    }

    firing(bullets, bombs) {
        this.physics.add.collider(bullets, bombs, firing, null, this);
            // set explosion on asteroid
        }
}

