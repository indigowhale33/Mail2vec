var logBG;
var loginButton;
var loggin = false;
var socket = io.connect();
var userN = '';
Parse.initialize("FUO5HE5FTONLhbeCd0BrKDChQ61WbvzgBUMiuEqj", "LE4LKonCwCoURJgXALnYweOgN72qArdnum5gINTM");

socket.on('ready', function(data){
    console.log(data.message);
    userN = data.id;
    game.state.start("loader");
});

socket.on('name', function(data){
    console.log(data.message);
    game.state.start("name");
});


function actionOnLog() {
  if(!loggin)
  {
    loggin = true;
    Parse.User.logIn(document.getElementById("user").value, document.getElementById("pass").value, {
  success: function(user) {
    // Do stuff after successful login.
    //userN = document.getElementById("user").value;
    document.getElementById("thelog").style.display = 'none';
    socket.emit('lego', {'legouser': user.id});
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
    alert(error.message);
    loggin = false;
  }
});

}
  //document.getElementById("accHelp").style.display = 'none';

}

var logloadState={
  preload: function(){
      game.load.image('logBG', 'assets/blackbg.png');
      game.load.spritesheet('loginBut', 'assets/loginSPR.png', 100, 32);
      game.load.image('header', 'assets/topbg2.png');
      game.load.image('footer', 'assets/botbg2.png');
      game.load.image('scroll', 'assets/scroll.png');
      game.load.image('bloo', 'assets/bluerect.png');
      game.load.image('bgbg', 'assets/bgbg.png');
  },

  create: function(){
      game.stage.backgroundColor = '#efefef';
      entKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
      entKey.onDown.add(actionOnLog, this);
      logBG = game.add.sprite(window.innerWidth*.10 - 40, window.innerHeight*.33 - 70, 'logBG');
      logBG.width = 420;
      logBG.height = 400;
      loginButton  = game.add.button(window.innerWidth*.10 + 238, window.innerHeight*.33 + 150, 'loginBut', actionOnLog, this, 0, 1, 0);
        }



};
