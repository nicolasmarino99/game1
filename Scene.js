import Phaser from "phaser";

export default class Scene extends Phaser.Scene {
  constructor() {
    super("Scene");
  }

  preload() {
    this.load.image("landbot", "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg");
  }

  create() {
    const logo = this.add.image(0, 0, "landbot").setScale(0.2);
    this.physics.add.existing(logo);
    logo.body.setGravityY(300);
    logo.body.setCollideWorldBounds(true);
    logo.body.setVelocity(100, 20);
    logo.body.setBounce(1);
  }
}