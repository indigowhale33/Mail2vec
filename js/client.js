var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'gameWin');
game.state.add('logload', logloadState);
game.state.add('name', nameState);
game.state.add('loader', loaderState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('game', gameState);

game.state.start('logload');
