import Snake from './Snake.js'

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    create() { 
        //Create a new instance of Snake when the scene starts
        this.snake = new Snake(this);
    }

    update(time) {
        this.snake.update(time);
    }
};