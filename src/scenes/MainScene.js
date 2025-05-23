import Hero from '../objects/Characters/Hero.js';
import EmanuelImage from '../assets/images/characters/emanuel.png';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.load.spritesheet('Emanuel', EmanuelImage, {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  create() {
    this.hero = new Hero(this, 100, 100);
  }

  update() {
    this.hero.update();
  }
}
