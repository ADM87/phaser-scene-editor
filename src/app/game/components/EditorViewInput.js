export default class EditorViewInput {
    constructor(inputManager, camera) {
        this.input = inputManager;
        this.camera = camera;

        this.isPointerDown = false;
        this.lastDownPoint = null;

        this.input.on("pointerdown", this.onPointerDown, this);
        this.input.on("pointerup", this.onPointerUp, this);
    }

    update() {
        if (this.isPointerDown) {
            const downPoint = this.getCurrentMousePoint();

            const delta = {
                x: downPoint.x - this.lastDownPoint.x,
                y: downPoint.y - this.lastDownPoint.y
            };

            this.camera.scrollX -= delta.x;
            this.camera.scrollY -= delta.y;

            this.lastDownPoint = downPoint;
        }
    }

    onPointerDown({ x, y }) {
        this.lastDownPoint = { x: x, y: y };
        this.isPointerDown = true;
    }

    onPointerUp() {
        this.isPointerDown = false;
    }

    getCurrentMousePoint() {
        return {
            x: this.input.mousePointer.x,
            y: this.input.mousePointer.y
        }
    }
}