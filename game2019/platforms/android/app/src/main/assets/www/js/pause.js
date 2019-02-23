class Pause{
    constructor(scene) {
        this.scene = scene;
    }

createPause () {
    //veil is transparent
    this.veil = this.scene.add.graphics ({ x:0, y: 0});
    this.veil.fillStyle('0x000000', 0.3);
    this.veil.fillRect(0,0, this.Config.width, this.Config.height);
    this.veil.setDepth(this.depth.ui);
    this.veil.setScrollFactor(0);

    this.txt_pause = new text (
        this, this.Config,centerX, this.Config,centerY-32,
    );
        this.txt_pause.setDepth(this.depth.ui);
        this.txt_pause.setScrollFactor(0);

        //Hide at start
        this.togglePauseScreen
}

togglePauseScreen (is_visible) {
    this.veil.setVisible (is_visible);
    this.pause.setVisible(is_visible);
}

clickPause() {
    if (!this.allow_input) return;
    if (this.is.gameover) return;

    this.is_pause = !this.is_pause;

    //Toggle pause overlay
    this.togglePauseScreen(this.is_pause);


    //if Pause
    if (this.is_pause) {
        this.startPause();
    }
    else{
        this.stopPause();
    }
 }

startPause() {
    //stops rocket from moving
    // if (this.rocket.states.walk) {

    // }

    //stop asteroid, cargo, hatchPanels
    //stop background
}

endPause() {
    //resume movement
}

}