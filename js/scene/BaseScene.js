/**
 * 各Sceneクラスの継承元クラス
 * @author Muriko
 */
class BaseScene extends Phaser.Scene {

    /**
     * コンストラクタ
     * @param {String} _sceneName シーン名
     */
    constructor(_sceneName) {
        super({ key: _sceneName });

        // フラグの設定
    }

    /**
     * 画像の読み込みを行う <br>
     * 記載例: <br>
     * this.load.image([imageID], [imageURL]); <br>
     */
    loadImg() { }

    /**
     * スプライトシートの読み込みを行う <br>
     * 記載例: <br>
     * this.load.spritesheet([spriteSheetID], [spriteSheetURL], { <br>
     *     frameWidth: [spriteWidth], <br>
     *     frameHeight: [spriteHeight] <br>
     * });
     */
    loadSpriteSheet() { }

    /**
     * 文字列を画面上に追加しセットする
     * @param {string} _text 追加する文字列
     * @param {int} _x 文字列のx座標
     * @param {int} _y 文字列のy座標
     * @param {int} _fontSize 文字列のサイズ
     * @param {int} _color 文字列の色
     * @param {boolean} _isBold 太字かどうか
     * @return {Object} セットしたテキストオブジェクト
     */
    loadText(_text, _x, _y, _fontSize, _color, _isBold) {
        return this.add.text(_x, _y, _text).setFontSize(_fontSize).setFill(_color).setFontFamily(_isBold ? "Bit12Bold" : "Bit12");
    }

    /**
     * シーン開始前に実行する関数 <br>
     * 各アセットをロードする
     */
    preload() {
        // 各画像のロード
        this.loadImg();
        // 各スプライトシートのロード
        this.loadSpriteSheet();
    }

    /**
     * 描画エリアの作成を行う
     * @param {*} _g 描画用オブジェクト
     * @param {*} _strokeColor 枠線の色
     * @param {*} _areaColor エリアの色
     * @param {*} _strokeWeight 枠線の太さ
     * @param {*} _areaX エリアの左上のx座標
     * @param {*} _areaY エリアの左上のy座標
     * @param {*} _areaW エリアの幅
     * @param {*} _areaH エリアの高さ
     * @param {*} _strokeAlpha 枠線のアルファ値
     * @param {*} _areaAlpha エリアのアルファ値
     */
    createArea(_g, _strokeColor, _areaColor, _strokeWeight, _areaX, _areaY, _areaW, _areaH, _strokeAlpha, _areaAlpha) {

        // 線の描画スタイル
        g.lineStyle(_strokeWeight, _strokeColor, _strokeAlpha);
        // 情報表示エリア 
        g.fillStyle(_areaColor, _areaAlpha)
            .fillRect(
                _areaX,
                _areaY,
                _areaW,
                _areaH
            )
            .strokeRect(
                _areaX + _strokeWeight / 2,
                _areaY + _strokeWeight / 2,
                _areaW - _strokeWeight,
                _areaH - _strokeWeight
            );
    }

    /**
     * シーン開始直後に実行する関数 <br>
     * 画面の初期描画などを行う
     */
    create() {
        // 描画オブジェクトの生成
        let g = this.add.graphics();

        // 各エリアの描画
        // hogehoge
    }

    /**
     * シーン開始後, 一定間隔で実行される関数
     */
    update() {
    }
}