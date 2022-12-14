class ChaserGameScene extends BaseScene {
    // コンストラクタ
    constructor() {
        super('ChaserGameScene');

        // 各エリアを管理するオブジェクト
        // ゲームエリア
        this.gameArea = null;

        // 各パラメータ
        // プレイヤーのオブジェクト
        this.player = null;
        // 敵のオブジェクトグループ
        this.enemyGroup = null;
        // その他オブジェクトグループ
        this.otherGroup = null;
        // 壁のオブジェクトグループ
        this.wallGroup = null;

        // 各フラグ

    }

    loadSpriteSheet() {
        this.load.spritesheet(
            [SPRITE_NAME_PLAYER],
            [FILE_NAME_PLAYER],
            {
                frameWidth: [UNIT_SIZE],
                frameHeight: [UNIT_SIZE]
            }
        );
    }

    // 画面生成時の実行関数
    create() {
        // 描画オブジェクトの生成
        let g = this.add.graphics();

        // 

        // 各エリアの描画
    }

    update() { }
};