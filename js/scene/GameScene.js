class GameScene extends Phaser.Scene {
    // コンストラクタ
    constructor() {
        super({ key: 'GameScene' });

        // 各エリアを管理するオブジェクト
        this.puzzleArea = new PuzzleArea();
        this.puzzleArea.initPuzzle();
        this.modeChoiceArea = new ModeChoiceArea();
        this.InfoArea = new InfoArea();

        // 各パラメータ
        this.gameMode = MODE_NORMAL;
        this.revTimes = 0;

        // 各フラグ
        this.updatePuzzleFlg = false;
        this.completePuzzleFlg = false;
        this.startFlg = false;

    }

    /**
     * 各パラメータの初期化
     */
    initParameters() {

    }

    loadImg() {
        // 各画像の読み込み
        this.load.image(IMG_REV_ALL, DIR_IMG + "/" + FNAME_IMG_REV_ALL);
        this.load.image(IMG_REV_CROSS, DIR_IMG + "/" + FNAME_IMG_REV_CROSS);
        this.load.image(IMG_REV_DIAG, DIR_IMG + "/" + FNAME_IMG_REV_DIAG);
        this.load.image(IMG_PZL_UNIT_OFF, DIR_IMG + "/" + FNAME_IMG_PZL_UNIT_OFF);
        this.load.image(IMG_PZL_UNIT_ON, DIR_IMG + "/" + FNAME_IMG_PZL_UNIT_ON);
        this.load.image(IMG_BUTTON_RESTART, DIR_IMG + "/" + FNAME_IMG_PZL_UNIT_RESTART);
        this.load.image(IMG_MODE_NORMAL_OFF, DIR_IMG + "/" + FNAME_IMG_MODE_NORMAL);
        this.load.image(IMG_MODE_NORMAL_ON, DIR_IMG + "/" + FNAME_IMG_MODE_NORMAL_ON);
        this.load.image(IMG_MODE_HARD_OFF, DIR_IMG + "/" + FNAME_IMG_MODE_HARD);
        this.load.image(IMG_MODE_HARD_ON, DIR_IMG + "/" + FNAME_IMG_MODE_HARD_ON);
        this.load.image(IMG_MODE_EXTRA_OFF, DIR_IMG + "/" + FNAME_IMG_MODE_EXTRA);
        this.load.image(IMG_MODE_EXTRA_ON, DIR_IMG + "/" + FNAME_IMG_MODE_EXTRA_ON);


        // 各スプライトシートの読み込み
        // this.load.spritesheet("slime", "assets/img/slime_spriteSheet.png", {
        //     frameWidth: UNIT_SIZE,
        //     frameHeight: UNIT_SIZE
        // });
    }

    /**
     * 文字列を画面上に追加しセットする
     * @param {string} _text 追加する文字列
     * @param {int} _x 文字列のx座標
     * @param {int} _y 文字列のy座標
     * @param {int} _fontSize 文字列のサイズ
     * @param {int} _color 文字列の色
     * @param {boolean} _isBold 太字かどうか
     */
    setText(_text, _x, _y, _fontSize, _color, _isBold) {
        return this.add.text(_x, _y, _text).setFontSize(_fontSize).setFill(_color).setFontFamily(_isBold ? "Bit12Bold" : "Bit12");
    }

    preload() {
        this.loadImg();
    }

    // 画面生成時の実行関数
    create() {
        /* 画面の初期表示 START */
        let g = this.add.graphics();
        // 各エリアの描画
        g.lineStyle(STROKE_WEIGHT, COLOR_AREA_STROKE, 1);
        // 情報表示エリア
        g.fillStyle(COLOR_AREA_NORMAL, 1)
            .fillRect(
                AREA_X_INFOAREA,
                AREA_Y_INFOAREA,
                AREA_W_INFOAREA,
                AREA_H_INFOAREA
            ).strokeRect(
                AREA_X_INFOAREA + STROKE_WEIGHT / 2,
                AREA_Y_INFOAREA + STROKE_WEIGHT / 2,
                AREA_W_INFOAREA - STROKE_WEIGHT,
                AREA_H_INFOAREA - STROKE_WEIGHT);

        // モード選択エリア
        g.fillStyle(COLOR_AREA_NORMAL, 1)
            .fillRect(
                AREA_X_MODECHOICEAREA,
                AREA_Y_MODECHOICEAREA,
                AREA_W_MODECHOICEAREA,
                AREA_H_MODECHOICEAREA
            ).strokeRect(
                AREA_X_MODECHOICEAREA + STROKE_WEIGHT / 2,
                AREA_Y_MODECHOICEAREA + STROKE_WEIGHT / 2,
                AREA_W_MODECHOICEAREA - STROKE_WEIGHT,
                AREA_H_MODECHOICEAREA - STROKE_WEIGHT);

        // パズルエリア
        g.fillStyle(COLOR_AREA_NORMAL, 1)
            .fillRect(
                AREA_X_PUZZLEAREA,
                AREA_Y_PUZZLEAREA,
                AREA_W_PUZZLEAREA,
                AREA_H_PUZZLEAREA
            ).strokeRect(
                AREA_X_PUZZLEAREA + STROKE_WEIGHT / 2,
                AREA_Y_PUZZLEAREA + STROKE_WEIGHT / 2,
                AREA_W_PUZZLEAREA - STROKE_WEIGHT,
                AREA_H_PUZZLEAREA - STROKE_WEIGHT);

        // 各エリアの描画
        this.createInfoArea();
        this.createModeChoiceArea();
        this.createPuzzleArea();

        /* 画面の初期表示 END */
    }

    update() {
        // ゲームクリアしていない場合
        if (!this.completePuzzleFlg) {
            if (this.updatePuzzleFlg) {
                // ゲームが開始されたとき、タイマーを開始する
                if (!this.startFlg) {
                    this.startFlg = true;

                    // タイマーを開始する
                    this.InfoArea.startTimer();
                }
                // パズルの再描画を行う
                this.updatePuzzleState(false);
                this.updatePuzzleFlg = false;
            }
            if (this.startFlg) {
                // タイマーの更新
                this.InfoArea.updateTimer();
            }

        } else {
            // ゲームクリアの処理を行う
            return;
        }

    }

    updatePuzzleState(_restart) {
        for (let i = 0; i < this.puzzleArea.puzzleSize[IDX_ROW]; i++) {
            for (let j = 0; j < this.puzzleArea.puzzleSize[IDX_COL]; j++) {
                this.puzzleArea.puzzleUnitSprite[i][j].setTexture(
                    PUZZLE_TEXTURE[this.puzzleArea.puzzleUnit[i][j]]
                );
            }
        }

        // パズル初期化時の挙動
        if (_restart) {
            this.InfoArea.resetTimer();
            this.InfoArea.setValueOf(INFO_NAME_REVERSETIME, 0);
            this.InfoArea.setValueOf(INFO_NAME_PLAYTIME, "0.0");
            this.startFlg = false;
            this.InfoArea.revTimes = 0;
            this.completePuzzleFlg = false;

        } else {
            this.InfoArea.revTimes++;
            this.InfoArea.setValueOf(INFO_NAME_REVERSETIME, this.InfoArea.revTimes);
            this.completePuzzleFlg = this.puzzleArea.checkPuzzleAnswer();

            // パズルがそろった場合
            if (this.completePuzzleFlg) {
                //　ハイスコアの更新を行う
                this.InfoArea.updateHighScore(this.gameMode);
            }
        }
    }

    /**
     * 情報表示エリアの描画を行う
     */
    createInfoArea() {
        // 表示する項目
        let info_val_playTime = "0.0" + INFO_VAL_PLAYTIME_END;
        let info_val_reverse = 0 + INFO_VAL_REVERSETIME_END;
        let info_val_mode = MODE_NAME[this.gameMode];
        let info_val_highScore = 0 + INFO_VAL_HIGHSCORE_MID + "0.0" + INFO_VAL_HIGHSCORE_END;

        // 情報表示エリアの各文字列
        this.setText(INFO_NAME_PLAYTIME, INFO_X, INFO_Y_PLAYTIME, INFO_H, INFO_COLOR, true);
        this.setText(INFO_NAME_REVERSETIME, INFO_X, INFO_Y_REVERSE, INFO_H, INFO_COLOR, true);
        this.setText(INFO_NAME_MODE, INFO_X, INFO_Y_MODE, INFO_H, INFO_COLOR, true);
        this.setText(INFO_NAME_HIGHSCORE, INFO_X, INFO_Y_HIGHSCORE, INFO_H, INFO_COLOR, true);

        let infoValX = INFO_X + INFO_W;
        this.InfoArea.textObject[INFO_NAME_PLAYTIME] =
            this.setText(info_val_playTime, infoValX, INFO_Y_PLAYTIME, INFO_H, INFO_COLOR, true);
        this.InfoArea.textObject[INFO_NAME_REVERSETIME] =
            this.setText(info_val_reverse, infoValX, INFO_Y_REVERSE, INFO_H, INFO_COLOR, true);
        this.InfoArea.textObject[INFO_NAME_MODE] =
            this.setText(info_val_mode, infoValX, INFO_Y_MODE, INFO_H, INFO_COLOR, true);
        this.InfoArea.textObject[INFO_NAME_HIGHSCORE] =
            this.setText(info_val_highScore, infoValX, INFO_Y_HIGHSCORE, INFO_H, INFO_COLOR, true);

    }

    /**
     * モード選択エリアの描画
     */
    createModeChoiceArea() {
        var btnXOffset = AREA_X_MODECHOICEAREA + STROKE_WEIGHT + MODE_BUTTON_MARGIN[IDX_X];
        var btnYOffset = AREA_Y_MODECHOICEAREA + STROKE_WEIGHT + MODE_BUTTON_MARGIN[IDX_Y];

        for (let i = 0; i < MODE_NAME.length; i++) {
            this.modeChoiceArea.modeButtonList.push(this.add.sprite(
                btnXOffset + MODE_BUTTON_SIZE[IDX_X] / 2,
                btnYOffset + i * (MODE_BUTTON_SIZE[IDX_Y] + MODE_BUTTON_MARGIN[IDX_Y]) + MODE_BUTTON_SIZE[IDX_Y] / 2,
                MODE_BUTTON_OFF_TEXTURE[i]
            ).setInteractive());

            // モード選択ボタン押下時の挙動
            this.modeChoiceArea.modeButtonList[i].on('pointerdown', function (pointer) {

                // モードを判別し、現在のモードを変更する
                let mode = Math.floor((pointer.y - btnYOffset) / (MODE_BUTTON_SIZE[IDX_Y] + MODE_BUTTON_MARGIN[IDX_Y]));
                this.gameMode = mode;

                // パズルエリアの再描画と各情報の初期化
                this.puzzleArea.createPuzzle(mode);
                this.createPuzzleArea();
                this.updatePuzzleState(true);

                this.InfoArea.setValueOf(INFO_NAME_MODE, MODE_NAME[mode]);

                // ハイスコアの表示を更新する
                this.InfoArea.dispHighscore(this.gameMode);

                // 難易度選択ボタンを押下表示にする
                this.modeChoiceArea.pushChgButton(mode);

            }, this);
        }

        this.modeChoiceArea.pushChgButton(this.gameMode);
    }

    /**
     * パズルエリアの描画を行う
     */
    createPuzzleArea() {
        // パズルユニットのリストを作成する
        var pzlXOffset = AREA_X_PUZZLEAREA + STROKE_WEIGHT + PUZZLE_OUTER_MARGIN[this.gameMode][IDX_X];
        var pzlYOffset = AREA_Y_PUZZLEAREA + STROKE_WEIGHT + PUZZLE_OUTER_MARGIN[this.gameMode][IDX_Y];
        for (var i = 0; i < PUZZLE_SIZE[this.gameMode][IDX_ROW]; i++) {

            this.puzzleArea.puzzleUnitSprite.push([]);

            for (var j = 0; j < PUZZLE_SIZE[this.gameMode][IDX_COL]; j++) {

                // パズルの初期状態によって生成する際の裏表の状態を決定する
                let addTexture = null;
                if (this.puzzleArea.puzzleDefault[i][j] == PUZZLE_STATE_0) {
                    addTexture = IMG_PZL_UNIT_OFF
                } else {
                    addTexture = IMG_PZL_UNIT_ON;
                }

                this.puzzleArea.puzzleUnitSprite[i][j] = this.add.sprite(
                    pzlXOffset + j * (PUZZLE_UNIT_SIZE[this.gameMode][IDX_X] + PUZZLE_INNER_MARGIN[this.gameMode][IDX_X]) + PUZZLE_UNIT_SIZE[this.gameMode][IDX_X] / 2,
                    pzlYOffset + i * (PUZZLE_UNIT_SIZE[this.gameMode][IDX_Y] + PUZZLE_INNER_MARGIN[this.gameMode][IDX_Y]) + PUZZLE_UNIT_SIZE[this.gameMode][IDX_Y] / 2,
                    addTexture
                ).setScale(PUZZLE_BUTTON_SCALE[this.gameMode]).setDepth(1).setInteractive();

                this.puzzleArea.puzzleUnitSprite[i][j].on('pointerdown', function (pointer) {

                    let row = Math.floor((pointer.y - pzlYOffset) / (PUZZLE_UNIT_SIZE[this.gameMode][IDX_Y] + PUZZLE_INNER_MARGIN[this.gameMode][IDX_Y]));
                    let col = Math.floor((pointer.x - pzlXOffset) / (PUZZLE_UNIT_SIZE[this.gameMode][IDX_X] + PUZZLE_INNER_MARGIN[this.gameMode][IDX_X]));

                    this.puzzleArea.reversePuzzleUnit(row, col, true);

                    this.updatePuzzleFlg = true;
                }, this);
            }
        }

        // 反転方法変更ボタンの表示
        let chgRevBtnX = pzlXOffset +
            PUZZLE_SIZE[this.gameMode][IDX_COL] * (
                PUZZLE_UNIT_SIZE[this.gameMode][IDX_X] + PUZZLE_INNER_MARGIN[this.gameMode][IDX_X]
            ) + PUZZLE_UNIT_SIZE[this.gameMode][IDX_X] / 2 + PUZZLE_INNER_MARGIN[this.gameMode][IDX_X];
        let chgRevBtnY = pzlYOffset + PUZZLE_UNIT_SIZE[this.gameMode][IDX_Y] / 2;

        this.puzzleArea.revChangeModeButton =
            this.add.sprite(
                chgRevBtnX,
                chgRevBtnY,
                REV_BUTTON_TEXTURE[REV_MODE_CROSS]
            ).setScale(PUZZLE_BUTTON_SCALE[this.gameMode]).setInteractive();

        this.puzzleArea.revChangeModeButton.on('pointerdown', function (pointer) {

            this.puzzleArea.changeRevMode();
        }, this);

        // リスタートボタンの表示
        let resttBtnX = pzlXOffset +
            PUZZLE_SIZE[this.gameMode][IDX_COL] * (
                PUZZLE_UNIT_SIZE[this.gameMode][IDX_X] + PUZZLE_INNER_MARGIN[this.gameMode][IDX_X]
            ) + PUZZLE_UNIT_SIZE[this.gameMode][IDX_X] / 2 + PUZZLE_INNER_MARGIN[this.gameMode][IDX_X];
        let resttBtnY = chgRevBtnY + (
            PUZZLE_UNIT_SIZE[this.gameMode][IDX_Y] +
            PUZZLE_INNER_MARGIN[this.gameMode][IDX_Y]
        );

        this.puzzleArea.restartButton =
            this.add.sprite(
                resttBtnX,
                resttBtnY,
                IMG_BUTTON_RESTART
            ).setScale(PUZZLE_BUTTON_SCALE[this.gameMode]).setInteractive();

        this.puzzleArea.restartButton.on('pointerdown', function (pointer) {
            // パズルの初期化を行い、再描画を行う
            this.puzzleArea.restartPuzzle();
            this.updatePuzzleState(true);
        }, this);
    }
};