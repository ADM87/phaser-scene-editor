import Phaser from 'phaser';
import { editorGameConfig } from '../config/EditorConfig';
import EditorView from './scenes/EditorView';

let game = undefined;
export class Game extends Phaser.Game {
    constructor(config, gameState) {
        super({ ...config, scene: EditorView });
        this.gameState = { ...gameState };
    }
}

export function createGame(gameState) {
    game = new Game(editorGameConfig, gameState);
}

export function updateGame(gameState) {
    game.gameState = { ...gameState };
    game.events.emit("updateEditorView");
}

export function getGame() {
    return game;
}