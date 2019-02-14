class collectAssets {
    constructor(scene) {
        this.scene = scene;
        this.scene.load.image('cargo', '../imgs/cargo.jpg');
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
            let cargo = this.scene.physics.add.sprite(Phaser.Math.Between(1,640), 0, 'cargo');
            cargo.setVelocityY(10);
            cargo.setDepth(1);
            this.cargoGroup.add(cargo);
        }

        if (Phaser.Math.Between(1, 100) <= gameOptions.hatchPanelsPercent) {
            let hatchPanels = this.scene.physics.add.sprite(Phaser.Math.Between (1,640), 0, 'hatchPanels');
            hatchPanels.setVelocityY(10);
            hatchPanels.anims.play("rotate");
            hatchPanels.setDepth(1);
            this.hatchPanelsGroup.add(hatchPanels);
        }

        if (Phaser.Math.Between(1, 100) <= gameOptions.asteroidPercent) {
            let asteroid = this.scene.physics.add.sprite(Phaser.Math.Between (1,640), 0, 'asteroid');
            asteroid.setVelocityY(10);
            asteroid.setDepth(2);
            this.asteroidGroup.add(asteroid);
        }


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