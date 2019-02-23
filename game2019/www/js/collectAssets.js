class collectAssets {
    constructor(scene) {
        this.scene = scene;
        this.timeCargo = 0;
    }

    assetCreate() {
        this.cargoGroup = this.scene.add.group({
            // once a cargo is removed, it's added to the pool
            removeCallback: function (cargo) {
                this.cargo.scene.cargoPool.add(cargo)
            }
        });
        //once a cargo is removed from the pool, it's added to the active cargos group
        this.cargoPool = this.scene.add.group({
            removeCallback: function (cargo) {
                this.cargo.scene.cargoGroup.add(cargo)
            }
        });
        //hatchPanels
        // this.hatchPanelsGroup = this.scene.add.group({
        //     removeCallback: function (hatchPanels) {
        //         this.hatchPanels.scene.hatchPanelsPool.add(hatchPanels)
        //     }
        // });
        // this.hatchPanelsPool = this.scene.add.group({
        //     removeCallback: function (hatchPanels) {
        //         this.hatchPanels.scene.hatchPanelsGroup.add(hatchPanels)
        //     }
        // });
        this.asteroidGroup = this.scene.add.group({
            removeCallback: function (asteroid) {
                this.asteroid.scene.asteroidPool.add(asteroid)
            }
        });
        this.asteroidPool = this.scene.add.group({
            removeCallback: function (asteroid) {
                this.asteroid.scene.asteroidGroup.add(asteroid)
            }
        });

    //     if (Phaser.Math.Between(1, 1000) <= gameOptions.cargoPercent) {
    //     this.cargoGroup = this.scene.physics.add.group({
    //         key: 'cargo',
    //         repeat: 0,
    //         setXY: { x: Phaser.Math.Between(1, 910), y: 50, stepX: 50, stepY: 50},
    //     });
    //     this.cargoGroup.setVelocity(-((space.tilePositionY)));
    // }

    // if (Phaser.Math.Between(1, 1000) <= gameOptions.hatchPanelsPercent) {
    //     this.hatchPanelsGroup = this.scene.physics.add.group({
    //         key: 'hatchPanels',
    //         repeat: 0,
    //         setXY: { x: Phaser.Math.Between(1, 910), y: 50, stepX: 50, stepY: 50},
    //     });
    //     this.hatchPanelsGroup.setVelocity(-((space.tilePositionY)));
    // }

    // if (Phaser.Math.Between(1, 150) <= gameOptions.asteroidPercent) {
    //     this.asteroidGroup = this.scene.physics.add.group({
    //         key: 'asteroid',
    //         repeat: 0,
    //         setXY: { x: Phaser.Math.Between(1, 910), y: 50, stepX: 50, stepY: 50},
    //     });
    //     // this.asteroidGroup.setVelocity(-((space.tilePositionY)));
    // }

// let timedEvent;
// timedEvent = this.time.addEventListener({ delay: 3000, callback: onEvent, callbackScope: this, loop: true });
//         function onEvent() {

        if(this.timeCargo > 0){
            this.timeCargo--;
        }

        if (Phaser.Math.Between(1, 2000) <= gameOptions.cargoPercent && this.timeCargo === 0) {
            let cargo = this.scene.physics.add.sprite(Phaser.Math.Between(1,window.innerWidth), -50, 'cargo');
            cargo.setVelocityY(- ((space.tilePositionY/150)-300));
            cargo.setDepth(1);
            this.cargoGroup.add(cargo);

            this.timeCargo = 100;
        }
    // }
    //
    //     if (Phaser.Math.Between(1, 2000) <= gameOptions.hatchPanelsPercent) {
    //         let hatchPanels = this.scene.physics.add.sprite(Phaser.Math.Between (1,window.innerWidth), -50, 'hatchPanels');
    //         hatchPanels.setVelocityY(-((space.tilePositionY/150)-300));
    //         // hatchPanels.anims.play("rotate");
    //         hatchPanels.setDepth(1);
    //         this.hatchPanelsGroup.add(hatchPanels);
    //     }

        if (Phaser.Math.Between(1, 150) <= gameOptions.asteroidPercent) {
            let asteroid = this.scene.physics.add.sprite(Phaser.Math.Between (1,window.innerWidth), -50, 'asteroid');
            asteroid.setVelocityY(- ((space.tilePositionY/150)-300));
            asteroid.setDepth(1);
            this.asteroidGroup.add(asteroid);
        }




        this.cargoGroup.getChildren().forEach(function (cargo) {
            if (cargo.y < - cargo.displayHeight) {
                this.cargoGroup.killAndHide(cargo);
                this.cargoGroup.remove(cargo);
            }
        }, this);

        // this.hatchPanelsGroup.getChildren().forEach(function (hatchPanels) {
        //     if (hatchPanels.y < - hatchPanels.displayHeight) {
        //         this.hatchPanelsGroup.killAndHide(hatchPanels);
        //         this.hatchPanelsGroup.remove(hatchPanels);
        //     }
        // }, this);

        this.asteroidGroup.getChildren().forEach(function (asteroid) {
            if (asteroid. y < - asteroid.displayHeight) {
                this.asteroidGroup.killAndHide(asteroid);
                this.asteroidGroup.remove(asteroid);
            }
        }, this);
    }
}