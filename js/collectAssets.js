class collectAssets {
    constructor(scene) {
        this.scene = scene;
    }

    assetCreate() {
        this.cargoGroup = this.scene.add.group({
            // once a cargo is removed, it's added to the pool
            removeCallback: function (cargo) {
                cargo.scene.cargoPool.add(cargo)
            }
        });
        //once a cargo is removed from the pool, it's added to the active cargos group
        this.cargoPool = this.scene.add.group({
            removeCallback: function (cargo) {
                cargo.scene.cargoGroup.add(cargo)
            }
        });
        //hatchPanels
        this.hatchPanelsGroup = this.scene.add.group({
            removeCallback: function (hatchPanels) {
                hatchPanels.scene.hatchPanelsPool.add(hatchPanels)
            }
        });
        this.hatchPanelsPool = this.scene.add.group({
            removeCallback: function (hatchPanels) {
                hatchPanels.scene.hatchPanelsGroup.add(hatchPanels)
            }
        });
        this.asteroidGroup = this.scene.add.group({
            removeCallback: function (asteroid) {
                asteroid.scene.asteroidPool.add(asteroid)
            }
        });
        this.asteroidPool = this.scene.add.group({
            removeCallback: function (asteroid) {
                asteroid.scene.hatchPanelsGroup.add(asteroid)
            }
        });

        // console.log("Phaser math number: " + Phaser.Math.Between(1, 100));
        //adding asteroid from asteroidPool
        if (Phaser.Math.Between(1, 100) <= gameOptions.cargoPercent) {
            console.log("hi");
            if (this.cargoPool.getLength()) {
                let cargo = this.cargoPool.getFirst();
                cargo.x = posX;
                posX = Phaser.Math.Between(1, 640);
                cargo.y = posY - 96;
                cargo.alpha = 1;
                cargo.active = true;
                cargo.visible = true;
                this.cargoPool.remove(cargo);
                console.log(1);
            }
            else {
                let cargo = this.scene.physics.add.sprite(posX, posY - 96, "cargo");
                cargo.setVelocityX(space.body.velocity.x);
                cargo.anims.play("rotate");
                cargo.setDepth(2);
                this.cargoGroup.add(cargo);
                console.log(3);
            }
        }

        if (Phaser.Math.Between(1, 100) <= gameOptions.hatchPanelsPercent) {
            if (this.hatchPanelsPool.getLength()) {
                let hatchPanels = this.hatchPanelsPool.getFirst();
                hatchPanels.x = posX;
                posX = Phaser.Math.Between(1, 640);
                hatchPanels.y = posY - 96;
                hatchPanels.alpha = 1;
                hatchPanels.active = true;
                hatchPanels.visible = true;
                this.hatchPanelsPool.remove(hatchPanels);
            }
            else {
                let hatchPanels = this.scene.physics.add.sprite(posX, posY - 96, "hatchPanels");
                hatchPanels.setVelocityX(space.body.velocity.x);
                hatchPanels.anims.play("rotate");
                hatchPanels.setDepth(2);
                this.hatchPanelsGroup.add(hatchPanels);
            }
        }

        // if(Phaser.Math.Between(1, 100) <= gameOptions.asteroidPercent){
        //         if(this.asteroidPool.getLength()){
        //             let asteroid = this.asteroidPool.getFirst();
        //             asteroid.x = posX;
        //             asteroid.y = posY - 96;
        //             asteroid.alpha = 1;
        //             asteroid.active = true;
        //             asteroid.visible = true;
        //             this.asteroidPool.remove(asteroid);
        //         }
        //         else{
        //             let asteroid = this.physics.add.sprite(posX, posY - 96, "asteroid");
        //             asteroid.setVelocityX(space.body.velocity.x);
        //             asteroid.anims.play("rotate");
        //             asteroid.setDepth(2);
        //             this.asteroidGroup.add(asteroid);
        //             }
        //         }

        //   asteroid = this.add.tileSprite(posX, posY, asteroidWidth, 32, "asteroid");
        // this.physics.add.existing(asteroid);
        // asteroid.body.setVelocityX(Phaser.Math.Between(gameOptions.asteroidSpeedRange[0], gameOptions.asteroidSpeedRange[1]) * -1);
        // asteroid.setDepth(2);
        //     // this.asteroidGroup.add(asteroid);
        //     // this.nextasteroidDistance = Phaser.Math.Between(gameOptions.spawnRange[0], gameOptions.spawnRange[1]);
        //     }
        // }

        //cargo

        this.cargoGroup.getChildren().forEach(function (cargo) {
            if (cargo.x < - cargo.displayWidth / 2) {
                this.cargoGroup.killAndHide(cargo);
                this.cargoGroup.remove(cargo);
            }
        }, this);

        this.hatchPanelsGroup.getChildren().forEach(function (hatchPanels) {
            if (hatchPanels.x < - hatchPanels.displayWidth / 2) {
                this.hatchPanelsGroup.killAndHide(hatchPanels);
                this.hatchPanelsGroup.remove(hatchPanels);
            }
        }, this);

        this.asteroidGroup.getChildren().forEach(function (asteroid) {
            if (asteroid.x < - asteroid.displayWidth / 2) {
                this.asteroidGroup.killAndHide(asteroid);
                this.asteroidGroup.remove(asteroid);
            }
        }, this);
    }
}