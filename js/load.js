var button;
var header;
var footer;
var campButton;
var normButton;
var rankButton;
var findButton;
var selBG;
var lordBG;
var servantBG;
var formBG;
var clanBG;
var c1;
var c2;
var c3;
var char0;
var userText;
function actionOnClick () {
  //game.add.tween(button).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true, 0, 0, 0);
  button.input.enabled = false;
  button.setFrames(3, 0, 2);
  //game.add.sprite(window.innerWidth/2-100, 15, 'lock');
  campButton.visible = true;
  normButton.visible = true;
  rankButton.visible = true;
}
function actionOnCamp () {
  campButton.input.enabled = false;
  campButton.setFrame(0,0,0);
  rankButton.input.enabled = true;
  normButton.input.enabled = true;
  rankButton.setFrames(0,1,0);
  normButton.setFrames(0,1,0);
  lordBG.visible = false;
  servantBG.visible = false;
  clanBG.visible = false;
  formBG.alpha = 0;
  formBG.y = 680;
  formBG.visible = true;
  game.add.tween(formBG).to( {y: 650, alpha: 1 }, 250, Phaser.Easing.Linear.None, true, 0, 0,false);
}
function actionOnNorm () {
  normButton.input.enabled = false;
  normButton.setFrame(0,0,0);
  campButton.input.enabled = true;
  rankButton.input.enabled = true;
  campButton.setFrames(0,1,0);
  rankButton.setFrames(0,1,0);
  clanBG.alpha = 0;
  clanBG.y = 270;
  clanBG.visible = true;
  game.add.tween(clanBG).to( { y: 280, alpha: 1 }, 250, Phaser.Easing.Linear.None, true, 0, 0,false);
  lordBG.alpha = 0;
  lordBG.x = window.innerWidth/2 - 500;
  lordBG.visible = true;
  game.add.tween(lordBG).to( { x: window.innerWidth/2-400, alpha: 1 }, 250, Phaser.Easing.Linear.None, true, 0, 0,false);
  servantBG.alpha = 0;
  servantBG.x = window.innerWidth/2;
  servantBG.visible = true;
  game.add.tween(servantBG).to( {x: window.innerWidth/2-100, alpha: 1 }, 250, Phaser.Easing.Linear.None, true, 0, 0,false);
  formBG.alpha = 0;
  formBG.y = 680;
  formBG.visible = true;
  game.add.tween(formBG).to( {y: 650, alpha: 1 }, 250, Phaser.Easing.Linear.None, true, 0, 0,false);
}
function actionOnRank () {
  rankButton.input.enabled = false;
  rankButton.setFrames(0,0,0);
  campButton.input.enabled = true;
  normButton.input.enabled = true;
  campButton.setFrames(0,1,0);
  normButton.setFrames(0,1,0);
  clanBG.alpha = 0;
  clanBG.y = 270;
  clanBG.visible = true;
  game.add.tween(clanBG).to( { y: 280, alpha: 1 }, 250, Phaser.Easing.Linear.None, true, 0, 0,false);
  lordBG.alpha = 0;
  lordBG.x = window.innerWidth/2 - 500;
  lordBG.visible = true;
  game.add.tween(lordBG).to( { x: window.innerWidth/2-400, alpha: 1 }, 250, Phaser.Easing.Linear.None, true, 0, 0,false);
  servantBG.alpha = 0;
  servantBG.x = window.innerWidth/2;
  servantBG.visible = true;
  game.add.tween(servantBG).to( {x: window.innerWidth/2-100, alpha: 1 }, 250, Phaser.Easing.Linear.None, true, 0, 0,false);
  formBG.alpha = 0;
  formBG.y = 680;
  formBG.visible = true;
  game.add.tween(formBG).to( {y: 650, alpha: 1 }, 250, Phaser.Easing.Linear.None, true, 0, 0,false);
}
var loadState={


  create: function(){
    game.stage.backgroundColor = '#f4f4f4';
    char0 = game.add.sprite(window.innerWidth/2-236,430,'char');
    clanBG = game.add.sprite(window.innerWidth/2-200, 250, 'clanSBG');
    clanBG.visible = false;
    lordBG = game.add.sprite(window.innerWidth/2-400, 390, 'lordSBG');
    lordBG.visible = false;
    servantBG = game.add.sprite(window.innerWidth/2-100, 390, 'servantSBG');
    servantBG.visible = false;
    formBG = game.add.sprite(window.innerWidth/2-350, 650, 'formationBG');
    formBG.visible = false;
    header = game.add.sprite(0, 0, 'header');
    header.width = window.innerWidth;
    header.height = 110;
    footer = game.add.sprite(0, window.innerHeight-50, 'footer');
    footer.width = window.innerWidth;
    footer.height = 50;
    button = game.add.button(window.innerWidth/2-100, 15, 'playButton', actionOnClick, this, 2, 0, 1);
    findButton = game.add.button(window.innerWidth/2+400, 725, 'fmatch', actionOnClick, this, 2, 0, 1);
    campButton = game.add.button(window.innerWidth/2-200, 130, 'campButton', actionOnCamp, this, 0, 1, 0);
    normButton = game.add.button(window.innerWidth/2-50, 140, 'normButton', actionOnNorm, this, 0, 1, 0);
    rankButton = game.add.button(window.innerWidth/2+100, 130, 'rankButton', actionOnRank, this, 0, 1, 0);
    userText = game.add.text(window.innerWidth - 150, 40, userN, {
        font: "25px Bit",
        fill: "#ffffff"});
    //hide buttons at start
    campButton.visible = false;
    normButton.visible = false;
    rankButton.visible = false;
  }



};
