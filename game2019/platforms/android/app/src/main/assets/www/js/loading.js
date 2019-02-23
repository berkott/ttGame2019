// class Loading{
//     constructor(scene){
//         this.scene = scene;
// }
function loading() {
    var progressBar = this.scene.add.graphics();
    var progressBox = this.scene.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    var width = this.Config.main.width;
    var height = this.Config.main.height;
    var loadingText = this.scene.make.text({
        x: width / 2,
        y: height / 2 - 50,
        text: 'Loading...',
        style: {
        font: '20px monospace',
        fill: '#ffffff'
        }
    });
    loadingText.setOrigin(0.5, 0.5);
    
    var percentText = this.scene.make.text({
        x: width / 2,
        y: height / 2 - 5,
        text: '0%',
        style: {
            font: '18px monospace',
            fill: '#ffffff'
        }
    });
    percentText.setOrigin(0.5, 0.5);

    var assetText = this.make.text({
        x: width / 2,
        y: height / 2 + 50,
        text: 'Hello',
        style: {
            font: '18px monospace',
            fill: '#72FFFF'
        }
    });
    assetText.setOrigin(0.5, 0.5);
    
    this.scene.load.on('progress', function (value) {
        percentText.setText(parseInt(value * 100) + '%');
        progressBar.clear();
        progressBar.fillStyle('#00FFFF');
        progressBar.fillRect(250, 280, 300 * value, 30);
    });
                
    this.scene.load.on('fileprogress', function (file) {
        assetText.setText('Loading asset: ' + file.key);
    });
     
    this.scene.load.on('complete', function () {
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
        assetText.destroy();
    });

    this.scene.load.image('logo', '../imgs/technoTitanLogo.png');
        for (var i = 0; i < 5000; i++) {
            this.scene.load.image('logo'+i, '../imgs/technoTitanLogo.png');
        }
    }

function loadScreen() {
    logo = this.scene.add.image(400, 300, 'logo');
    if(logo.posX == 400) {
        this.scene.start(Game);
        }
    }
// }