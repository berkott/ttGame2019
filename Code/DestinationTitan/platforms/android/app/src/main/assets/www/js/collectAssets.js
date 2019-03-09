class collectAssets {
    constructor(scene) {
        this.scene = scene;
        this.timeOverall = 0;

        this.cargoGroup = [];
        this.asteroidGroup = [];
    }

    assetCreate() {
        this.updateTime();
        this.randAssets();
        
        this.destroyAssets(this.cargoGroup);
        this.destroyAssets(this.asteroidGroup);
    }

    randAssets() {
        if (Phaser.Math.Between(1, 50) <= gameOptions.cargoPercent && this.timeOverall === 0) {
            let cargo = this.scene.physics.add.sprite(Phaser.Math.Between(window.innerWidth*0.05, window.innerWidth-window.innerWidth*0.05), -50, 'cargo');
            cargo.setVelocityY(- ((space.tilePositionY / 150) - 300));
            this.cargoGroup.push(cargo);
            cargo.displayWidth = window.innerWidth*0.15;
            cargo.displayHeight = window.innerHeight*0.1;

            this.timeOverall = 20;
        }

        if (Phaser.Math.Between(1, 25) <= gameOptions.asteroidPercent && this.timeOverall === 0) {
            let asteroid = this.scene.physics.add.sprite(Phaser.Math.Between(window.innerWidth*0.1, window.innerWidth-window.innerWidth*0.1), -50, 'asteroid');
            asteroid.setVelocityY(- ((space.tilePositionY / 150) - 300));
            this.asteroidGroup.push(asteroid);
            asteroid.displayWidth = window.innerWidth*0.25;
            asteroid.displayHeight = window.innerHeight*0.15;
            
            this.timeOverall = 20;
        }
    }

    destroyAssets(asset){
        for(let i = 0; i < asset.length; i++){
            if(asset[i].y -50 > game.config.height){
                asset[i].destroy(true);
                asset.splice(i, 1);
            }
        }
    }

    updateTime() {
        if(this.timeOverall > 0){
            this.timeOverall--;
        }
    }

    getAssetCoordinates() {
        return {asteroid: this.asteroidGroup, cargo: this.cargoGroup}
    }
}

//   class collectAssets{
//     constructor(scene) {
//         this.scene = scene;
//         this.timeOverall = 0;
//     }

//     assetCreate() {
//         this.cargoGroup = this.scene.add.group({
//             // once a cargo is removed, it's added to the pool
//             removeCallback: function (cargo) {
//                 this.scene.cargoPool.add(cargo)
//             }
//         });
//         //once a cargo is removed from the pool, it's added to the active cargos group
//         this.cargoPool = this.scene.add.group({
//             removeCallback: function (cargo) {
//                 this.scene.cargoGroup.add(cargo)
//             }
//         });


//         // this.hatchPanelsGroup = this.scene.add.group({
//         //     removeCallback: function (hatchPanels) {
//         //         this.scene.hatchPanelsPool.add(hatchPanels)
//         //     }
//         // });
//         // this.hatchPanelsPool = this.scene.add.group({
//         //     removeCallback: function (hatchPanels) {
//         //         this.scene.hatchPanelsGroup.add(hatchPanels)
//         //     }
//         // });

//         this.asteroidGroup = this.scene.add.group({
//             removeCallback: function (asteroid) {
//                 this.scene.asteroidPool.add(asteroid)
//             }
//         });
//         this.asteroidPool = this.scene.add.group({
//             removeCallback: function (asteroid) {
//                 this.scene.asteroidGroup.add(asteroid)
//             }
//         });


//         if(this.timeOverall > 0){
//             this.timeOverall--;
//         }

//         if (Phaser.Math.Between(1, 2000) <= gameOptions.cargoPercent && this.timeOverall === 0) {
//             let cargo = this.scene.physics.add.sprite(Phaser.Math.Between(1,640), -50, 'cargo');
//             cargo.setVelocityY(- ((space.tilePositionY/150)-300));
//             this.cargoGroup.add(cargo);

//             this.timeOverall = 100;
//         }


//         // if (Phaser.Math.Between(1, 20) <= gameOptions.hatchPanelsPercent && this.timeOverall === 0) {
//         //     let hatchPanels = this.scene.physics.add.sprite(Phaser.Math.Between (1,640), -50, 'hatchPanels');
//         //     hatchPanels.setVelocityY(-((space.tilePositionY/150)-300));
//         //     // hatchPanels.anims.play("rotate");
//         //     hatchPanels.setDepth(1);
//         //     this.hatchPanelsGroup.add(hatchPanels);

//         //     this.timeOverall = 100;
//         // }

//         if (Phaser.Math.Between(1, 150) <= gameOptions.asteroidPercent && this.timeOverall === 0) {
//             let asteroid = this.scene.physics.add.sprite(Phaser.Math.Between (1,640), -50, 'asteroid');
//             asteroid.setVelocityY(- ((space.tilePositionY/150)-300));
//             this.asteroidGroup.add(asteroid);

//             this.timeOverall = 20;
//         }


//         this.cargoGroup.getChildren().forEach(function (cargo) {
//             if (cargo.y < game.config.height) {
//                 this.cargoGroup.killAndHide(cargo);
//                 this.cargoGroup.remove(cargo);
//             }
//         }, this);

//         // this.hatchPanelsGroup.getChildren().forEach(function (hatchPanels) {
//         //     if (hatchPanels.y < - hatchPanels.displayHeight) {
//         //         this.hatchPanelsGroup.killAndHide(hatchPanels);
//         //         this.hatchPanelsGroup.remove(hatchPanels);
//         //     }
//         // }, this);

//         this.asteroidGroup.getChildren().forEach(function (asteroid) {
//             if (asteroid.y < game.config.height) {
//                 this.asteroidGroup.killAndHide(asteroid);
//                 this.asteroidGroup.remove(asteroid);
//             }
//         }, this);
//     }
//   }