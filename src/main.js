import Phaser from 'phaser';
import config from './config/config.js';
import MainScene from './scenes/MainScene.js';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('MainScene', MainScene);
    this.scene.start('MainScene');
  }
}

window.game = new Game();
