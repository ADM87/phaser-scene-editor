import { Scene } from 'phaser';
import EditorViewInput from '../components/EditorViewInput';

export default class EditorView extends Scene {
    create() {
        this.game.events.on("updateEditorView", this.updateEditorView, this);

        this.editorInput = new EditorViewInput(this.input, this.cameras.main);
        this.gameSizeDisplay = this.add.graphics();

        this.cameras.main.setScroll(
            (-this.scale.width / 2) + (this.game.gameState.gameConfig.width / 2),
            (-this.scale.height / 2) + (this.game.gameState.gameConfig.height / 2)
        );

        this.drawGameSizeDisplay();
    }

    update() {
        this.editorInput.update();
    }

    updateEditorView() {
        this.drawGameSizeDisplay();
    }

    drawGameSizeDisplay() {
        const width = parseInt(this.game.gameState.gameConfig.width);
        const height = parseInt(this.game.gameState.gameConfig.height);

        this.gameSizeDisplay.clear();

        this.gameSizeDisplay.lineStyle(1, 0xEDEDED);
        this.gameSizeDisplay.strokeRect(0, 0, width, height);
    }
}