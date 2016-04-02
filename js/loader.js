var displayProg = 0;
var trueProg = 0;

function updateProg() {

}
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
  trueProg = progress;

}
function loadComplete() {

	game.state.start("load");

}

function start(){
  game.load.image('selectBG', 'assets/selectbg.png');
  game.load.image('lordSBG', 'assets/lordbg.png');
  game.load.image('clanSBG', 'assets/clanbg.png');
  game.load.image('c1SBG', 'assets/c1.png');
  game.load.image('c2SBG', 'assets/c2.png');
  game.load.image('c3SBG', 'assets/c3.png');
  game.load.image('servantSBG', 'assets/servantsbg.png');
  game.load.image('formationBG', 'assets/1x7.png');
  game.load.image('light', 'assets/light.png');
  game.load.image('fmatch', 'assets/findmatch.png');
  game.load.image('char', 'assets/charpro.png');
  game.load.spritesheet('playButton', 'assets/playsprite.png', 200, 80);
  game.load.spritesheet('campButton', 'assets/camp.png', 100, 100);
  game.load.spritesheet('normButton', 'assets/norm.png', 100, 100);
  game.load.spritesheet('rankButton', 'assets/rank.png', 100, 100);
  game.load.start();


}

var loaderState={
  preload: function(){


  },
  loadUpdate: function(){
      alert(game.progress);
  },
  create: function(){
    game.time.events.loop(1, updateProg, this);
    game.load.onFileComplete.add(fileComplete, this);
    game.load.onLoadComplete.add(loadComplete, this);
    start();


  }



};
