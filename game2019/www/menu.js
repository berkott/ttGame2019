var config = {
    type: TTGame2019.AUTO,
    width: 600,
    height: 900,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
    }
};
var game = new TTGame2019.Game(config);

function preload () 
{
}

function create ()
{
    this.add.image()

}