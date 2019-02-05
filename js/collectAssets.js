class collectAssets {
    constructor(scene) {
        this.scene= scene;
    }
assetsAnimation() {
    this.anims.create({
        key: "rotate",
        frames: this.anims.generateFrameNumbers("cargo", {
            start: 0,
            end: 5
        }),
        frameRate: 5,
        yoyo: true,
        repeat: -1
     });

    this.anims.create({
        key: "rotate",
        frames: this.anims.generateFrameNumbers("hatchPanels", {
            start: 0,
            end: 5
        }),
        frameRate: 10,
        yoyo: true,
        repeat: -1
    });


}   
assetCreate() {
    if(Phaser.Math.Between(1, 100) <= gameOptions.cargoPercent){
        if(this.cargoPool.getLength()){
            let cargo = this.cargoPool.getFirst();
            cargo.x = posX;
            cargo.y = posY - 96;
            cargo.alpha = 1;
            cargo.active = true;
            cargo.visible = true;
            this.cargoPool.remove(cargo);
        }
        else{
            let cargo = this.physics.add.sprite(posX, posY - 96, "cargo");
            cargo.setImmovable(true);
            cargo.setVelocityX(platform.body.velocity.x);
            cargo.anims.play("rotate");
            cargo.setDepth(2);
            this.cargoGroup.add(cargo);
            }
        }
        
        if(Phaser.Math.Between(1, 100) <= gameOptions.hatchPanelsPercent){
            if(this.hatchPanelsPool.getLength()){
                let hatchPanels = this.hatchPanelsPool.getFirst();
                hatchPanels.x = posX;
                hatchPanels.y = posY - 96;
                hatchPanels.alpha = 1;
                hatchPanels.active = true;
                hatchPanels.visible = true;
                this.hatchPanelsPool.remove(hatchPanels);
            }
            else{
                let hatchPanels = this.physics.add.sprite(posX, posY - 96, "hatchPanels");
                hatchPanels.setImmovable(true);
                hatchPanels.setVelocityX(platform.body.velocity.x);
                hatchPanels.anims.play("rotate");
                hatchPanels.setDepth(2);
                this.hatchPanelsGroup.add(hatchPanels);
                }
            }

        if(Phaser.Math.Between(1, 100) <= gameOptions.asteroidPercent){
            if(this.asteroidPool.getLength()){
                let asteroid = this.asteroidPool.getFirst();
                asteroid.x = posX;
                asteroid.y = posY - 96;
                asteroid.alpha = 1;
                asteroid.active = true;
                asteroid.visible = true;
                this.asteroidPool.remove(asteroid);
            }
            else{
                let asteroid = this.physics.add.sprite(posX, posY - 96, "asteroid");
                asteroid.setImmovable(true);
                asteroid.setVelocityX(platform.body.velocity.x);
                asteroid.setDepth(2);
                this.asteroidGroup.add(asteroid);
                }
        }
    
    //cargo
    this.cargoGroup = this.add.group({
        // once a cargo is removed, it's added to the pool
        removeCallback: function(cargo){
           cargo.scene.cargoPool.add(cargo)
            }
        });
    //once a cargo is removed from the pool, it's added to the active cargos group
    this.cargoPool = this.add.group({
        removeCallback: function(cargo){
            cargo.scene.cargoGroup.add(cargo)
            }
        });

    //hatchPanels
    this.hatchPanelsGroup = this.add.group({
        removeCallback: function(hatchPanels){
            hatchPanels.scene.hatchPanelsPool.add(hatchPanels)
            }    
        });
    this.hatchPanelsPool = this.add.group({
        removeCallback: function(hatchPanels){
        hatchPanels.scene.hatchPanelsGroup.add(hatchPanels)
            }
        });
    
    //asteroids
    this.asteroidGroup = this.add.group({
        removeCallback: function(asteroid){
            asteroid.scene.asteroidPool.add(asteroid)
            }    
        });
    this.asteroidPool = this.add.group({
        removeCallback: function(asteroid){
        asteroid.scene.hatchPanelsGroup.add(asteroid)
            }
        });
    }
}