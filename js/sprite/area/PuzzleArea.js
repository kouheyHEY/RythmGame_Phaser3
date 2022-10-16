class PuzzleArea {
    constructor() {
        this.puzzleMode = MODE_NORMAL;
        this.reverseMode = REV_MODE_CROSS;
        this.puzzleSize = PUZZLE_SIZE[this.puzzleMode];
        this.puzzleDefault = [];
        this.puzzleUnit = [];
        this.puzzleUnitSprite = [];

        this.revChangeModeButton = null;
        this.restartButton = null;
    }

    /**
     * パズルを初期配列に戻す
     */
    restartPuzzle() {
        // パズル配列を初期化する
        this.puzzleUnit = [];

        for (var i = 0; i < this.puzzleSize[IDX_ROW]; i++) {
            // 空の配列を準備する
            this.puzzleUnit.push([]);
            for (var j = 0; j < this.puzzleSize[IDX_COL]; j++) {
                // 初期配列の値を代入する
                this.puzzleUnit[i].push(this.puzzleDefault[i][j]);
            }
        }
    }

    /**
     * 初期配列を生成する
     */
    initPuzzle() {
        // 各配列を初期化する
        this.puzzleUnit = [];
        this.puzzleDefault = [];

        for (var i = 0; i < this.puzzleSize[IDX_ROW]; i++) {
            // 空の配列を準備する
            this.puzzleUnit.push([]);
            this.puzzleDefault.push([]);

            for (var j = 0; j < this.puzzleSize[IDX_COL]; j++) {
                // 初期配列を生成する
                this.puzzleUnit[i].push(0);
                this.puzzleDefault[i].push(0);
            }
        }

        // 初期配列を生成する
        let rndList = [];
        for (let i = 0; i < PUZZLE_RAND_NUM[this.puzzleMode]; i++) {
            let rndN = 0;
            // ランダムな数字を指定の数だけ生成する
            let duplicate = true;
            while (duplicate) {
                rndN = Math.floor((Math.random() * PUZZLE_UNIT_NUM[this.puzzleMode]));
                duplicate = false;
                for (let j = 0; j < rndList.length; j++) {
                    if (rndList[j] == rndN) {
                        duplicate = true;
                        break;
                    }
                }
            }
            rndList.push(rndN);

            this.puzzleDefault
            [Math.floor(rndN / PUZZLE_SIZE[this.puzzleMode][IDX_COL])]
            [Math.floor(rndN % PUZZLE_SIZE[this.puzzleMode][IDX_COL])]
                = PUZZLE_STATE_1;
            this.restartPuzzle();
        }
    }

    /**
     * パズルが正解用パズルと同一か判定する
     * @return 正解ならtrue, そうでないならfalse
     */
    checkPuzzleAnswer() {
        for (var unitRow of this.puzzleUnit) {
            for (var unit of unitRow) {
                if (unit != 1) {
                    // 一つでも一致しないなら, false
                    return false
                }
            }
        }
        return true;
    }

    /**
     * 指定の位置にあるパズルを反転させる
     * @param {int} _row 行
     * @param {int} _col 列
     * @param {Boolean} _revArround 周囲を反転させるか
     */
    reversePuzzleUnit(_row, _col, _revArround) {

        // 指定のパズルを反転させる
        this.puzzleUnit[_row][_col] = (this.puzzleUnit[_row][_col] + 1) % 2;

        // 周囲を反転させない場合
        if (!_revArround) {
            // 終了する
            return;
        }

        for (var i = -1; i <= 1; i++) {
            // パズルの範囲外を参照している場合
            if (_row + i < 0 || _row + i >= this.puzzleSize[IDX_ROW]) {
                // 次の処理に移る
                continue;
            }
            for (var j = -1; j <= 1; j++) {
                // パズルの範囲外を参照している場合
                // または自身の位置を参照している場合
                if (
                    _col + j < 0 || _col + j >= this.puzzleSize[IDX_COL] ||
                    (i == 0 && j == 0)
                ) {
                    // 次の処理に移る
                    continue;
                }

                // パズルを反転させる
                this.puzzleUnit[_row + i][_col + j] = (this.puzzleUnit[_row + i][_col + j] + REV_POS_LIST[this.reverseMode][1 + i][1 + j]) % 2;

            }
        }
    }

    /**
     * パズルの反転方法を変更する
     */
    changeRevMode() {
        this.reverseMode = (this.reverseMode + 1) % REV_MODE_NUM;
        this.revChangeModeButton.setTexture(REV_BUTTON_TEXTURE[this.reverseMode]);
    }

    /** パズルエリアを初期化する
     * @param {int} _mode 変更後のモード
     */
    createPuzzle(_mode) {
        // パズルボタンなどの初期化
        this.puzzleUnit = [];
        this.puzzleDefault = [];
        if (this.puzzleUnitSprite != []) {
            for (var i = 0; i < PUZZLE_SIZE[this.puzzleMode][IDX_ROW]; i++) {
                for (var j = 0; j < PUZZLE_SIZE[this.puzzleMode][IDX_COL]; j++) {
                    this.puzzleUnitSprite[i][j].destroy();
                }
            }
        }

        this.puzzleMode = _mode;
        this.puzzleSize = PUZZLE_SIZE[_mode];

        // リスタートボタンの削除
        this.restartButton.destroy();
        // 反転方法変更ボタンの削除
        this.revChangeModeButton.destroy();

        // パズルの再生成
        this.initPuzzle();
    }
}