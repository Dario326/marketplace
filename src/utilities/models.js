export class WBAsset {
    constructor(src, height = 100, width = 50, type = "image") {
        this.src = src;
        this.height = height;
        this.width = width;
        this.type = type;
    }
}