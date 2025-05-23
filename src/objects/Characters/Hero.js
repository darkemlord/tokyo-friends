// src/objects/Hero.js
import Phaser from 'phaser';

export default class Hero extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'Emanuel');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.body.setCollideWorldBounds(true);
    this.speed = 100;

    this.createAnimations(scene);
    this.cursors = scene.input.keyboard.createCursorKeys();

    this.play('idle-down');
  }

  createAnimations(scene) {
    scene.anims.create({
      key: 'walk-up',
      frames: scene.anims.generateFrameNumbers('Emanuel', {
        start: 105,
        end: 112,
      }),
      frameRate: 8,
      repeat: -1,
    });

    scene.anims.create({
      key: 'walk-left',
      frames: scene.anims.generateFrameNumbers('Emanuel', {
        start: 117,
        end: 124,
      }),
      frameRate: 8,
      repeat: -1,
    });

    scene.anims.create({
      key: 'walk-down',
      frames: scene.anims.generateFrameNumbers('Emanuel', {
        start: 130,
        end: 138,
      }),
      frameRate: 8,
      repeat: -1,
    });

    scene.anims.create({
      key: 'walk-right',
      frames: scene.anims.generateFrameNumbers('Emanuel', {
        start: 143,
        end: 151,
      }),
      frameRate: 8,
      repeat: -1,
    });
  }

  update() {
    const speed = 200;
    let isMoving = false;

    this.body.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.body.setVelocityX(-speed);
      this.play('walk-left', true);
      isMoving = true;
    } else if (this.cursors.right.isDown) {
      this.body.setVelocityX(speed);
      this.play('walk-right', true);
      isMoving = true;
    } else if (this.cursors.up.isDown) {
      this.body.setVelocityY(-speed);
      if (!isMoving) {
        this.play('walk-up', true);
        isMoving = true;
      }
    } else if (this.cursors.down.isDown) {
      this.body.setVelocityY(speed);
      if (!isMoving) {
        this.play('walk-down', true);
        isMoving = true;
      }
    }

    if (!isMoving) {
      const currentAnim = this.anims.currentAnim;
      if (currentAnim) {
        const direction = currentAnim.key.split('-')[1];
        this.play(`idle-${direction}`, true);
      }
    }

    this.body.velocity.normalize().scale(speed);
  }
}
