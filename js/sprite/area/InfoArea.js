class InfoArea {
    constructor() {
        // 各テキストオブジェクト
        this.textObject = {
            "PlayTime": null,
            "Reverse": null,
            "CurrentMode": null,
            "HighScore": null,
        };

        // 各表示文字列の後ろに付与する文字列
        this.END_STR = {
            "PlayTime": INFO_VAL_PLAYTIME_END,
            "Reverse": INFO_VAL_REVERSETIME_END,
            "CurrentMode": "",
            "HighScore": INFO_VAL_HIGHSCORE_END,
        };

        // 開始時間
        this.startTime = 0;
        // 終了時間
        this.endTime = 0;
        // 経過時間
        this.gameTime = 0;
        // 反転回数
        this.revTimes = 0;
        // ハイスコア
        this.highScore = [
            [0, 0],
            [0, 0],
            [0, 0]
        ];
    }

    dispColumnAll() {

    }

    setValueOf(_column, _value) {
        if (_column == INFO_NAME_HIGHSCORE) {
            this.textObject[_column].setText(_value[HIGHSCORE_REVNUM] + INFO_VAL_HIGHSCORE_MID + _val[HIGHSCORE_TIME]);
        } else {
            this.textObject[_column].setText(_value + this.END_STR[_column]);
        }
    }

    startTimer() {
        let startDate = new Date();
        this.startTime = startDate.getTime();
    }

    stopTimer() {

    }

    updateTimer() {
        this.gameTime = new Date().getTime() - this.startTime;
        this.gameTime = (this.gameTime / 1000).toFixed(1);
        this.textObject[INFO_NAME_PLAYTIME].setText(this.gameTime + this.END_STR[INFO_NAME_PLAYTIME]);
    }

    resetTimer() {
        this.startTime = 0;
    }

    dispHighscore(_mode) {
        this.textObject[INFO_NAME_HIGHSCORE].setText(
            this.highScore[_mode][HIGHSCORE_REVNUM] + INFO_VAL_HIGHSCORE_MID +
            this.highScore[_mode][HIGHSCORE_TIME] + INFO_VAL_HIGHSCORE_END
        );
    }

    updateHighScore(_mode) {
        // 反転回数を更新した場合
        if (this.highScore[_mode][HIGHSCORE_REVNUM] == 0
            || this.highScore[_mode][HIGHSCORE_REVNUM] > this.revTimes
        ) {
            // 各値を更新する
            this.highScore[_mode][HIGHSCORE_TIME] = this.gameTime;
            this.highScore[_mode][HIGHSCORE_REVNUM] = this.revTimes;

            // 反転回数がハイスコアと同じ場合
        } else if (this.highScore[_mode][HIGHSCORE_REVNUM] == this.revTimes) {
            // パズル時間によって更新するかを決定する
            if (this.highScore[_mode][HIGHSCORE_TIME] > this.gameTime) {
                // 各値を更新する
                this.highScore[_mode][HIGHSCORE_TIME] = this.gameTime;
                this.highScore[_mode][HIGHSCORE_REVNUM] = this.revTimes;
            }
        }

        // ハイスコアの表示を更新する
        this.dispHighscore(_mode);
    }
}