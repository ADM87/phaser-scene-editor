import { AUTO, CANVAS, WEBGL } from 'phaser';

export const phaserRendererTypes = {
    auto: "Auto",
    canvas: "Canvas",
    webgl: "WebGL"
};

export const phaserRendererList = [
    phaserRendererTypes.auto,
    phaserRendererTypes.canvas,
    phaserRendererTypes.webgl
];

export const phaserRenderers = {
    [phaserRendererTypes.auto]: AUTO,
    [phaserRendererTypes.canvas]: CANVAS,
    [phaserRendererTypes.webgl]: WEBGL
};

// Fresh Phaser game config
export const newGameConfig = {
    renderer: phaserRenderers[phaserRendererTypes.auto],
    parent: "",
    title: "",
    backgroundColor: "",
    width: 800,
    height: 600
};