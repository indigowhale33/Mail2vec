
var socket = io.connect();
var userN = '';
var gPaw;
var newNam;
var acceptButton;
var yesButton;
var noButton;
socket.on('ignAuth', function(data){
    console.log(data.message);
    document.getElementById("newacc").style.display = 'none';
    document.getElementById("newac").disabled = true;
    document.getElementById("newac").style.display = 'none';
    newNam.loadTexture('tutText');
    newNam.width = 650;
    newNam.height = 250;
    newNam.y = window.innerHeight*.33 - 15;
    acceptButton.visible = false;
    yesButton.visible = true;
    noButton.visible = true;

    //game.state.start("load");
});

socket.on('signErr', function(data){
    alert(data.err);
});

function actionOnAccept() {
 socket.emit('atSign', {'testName': document.getElementById("newac").value});
}

function moveOn(){
  game.state.start("load");
}

var nameState={
  preload: function(){
    document.getElementById("newacc").style.display = 'inline';
    game.load.image('gPawn', 'assets/glowpawn.png');
    game.load.image('newBG', 'assets/newnamebg.png');
    game.load.spritesheet('acceptBut', 'assets/acceptSPR.png', 112, 32);
    game.load.spritesheet('yesBut', 'assets/yesSPR.png', 100, 32);
    game.load.spritesheet('noBut', 'assets/noSPR.png', 100, 32);
    game.load.image('tutText', 'assets/tutorialprompt.png');
  },

  create: function(){
      game.stage.backgroundColor = '#efefef';
      newNam = game.add.sprite(window.innerWidth*.50 - 325, window.innerHeight*.33-40, 'newBG');
      acceptButton  = game.add.button(window.innerWidth*.5 - 56, window.innerHeight*.33 + 200, 'acceptBut', actionOnAccept, this, 0, 1, 0);
      yesButton  = game.add.button(window.innerWidth*.5 - 150, window.innerHeight*.33 + 145, 'yesBut', moveOn, this, 0, 1, 0);
      noButton  = game.add.button(window.innerWidth*.5 + 50, window.innerHeight*.33 + 145, 'noBut', moveOn, this, 0, 1, 0);
      yesButton.visible = false;
      noButton.visible = false;
        }



};
