class BaseSprite {
    constructor(_sprite, _x, _y, _w, _h) {
        // スプライト
        this.sprite = _sprite;
        // 座標
        this.x = _x;
        this.y = _y;
        // 幅, 高さ
        this.w = _w;
        this.h = _h;
        // 加速度
        this.vx = 0;
        this.vy = 0;
    }
}