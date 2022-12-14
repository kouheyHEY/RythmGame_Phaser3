// Phaser3の設定データ
const config = {
    type: Phaser.AUTO,

    // 画面の幅
    width: D_WIDTH,

    // 画面の高さ
    height: D_HEIGHT,

    // アンチエイリアス
    antialias: true,

    // シーン設定
    scene: [
        ChaserGameScene
    ],

    fps: {
        target: 30,
        forceSetTimeOut: true
    },

    physics: {
        default: "arcade",
        arcade: {
            // スプライトに緑の枠を表示
            debug: true,
            // 重力の方向と強さ
            gravity: {
            }
        }
    },
}

// ゲームの開始
const phaser = new Phaser.Game(config);