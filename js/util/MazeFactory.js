class MazeFactory {
    constructor(_row, _col, _modeHalf) {
        this.row = _row;
        this.col = _col;
        this.modeHalf = _modeHalf;
        this.mazeArr = Array();
    }

    initMaze() {
        this.mazeArr = [];
        for (let r = 0; r < this.row * 2 - 1; r++) {
            this.mazeArr.push([]);
            for (let c = 0; c < this.col * 2 - 1; c++) {
                this.mazeArr[r].push(MAZE_OBJ_BLANK);
            }
        }
    }

    createMaze() {
        // ①格子点を打つ
        for (let r = 0; r < this.row; r++) {
            if (r % 2 == 1) {
                for (let c = 0; c < this.col; c++) {
                    if (c % 2 == 1) {
                        this.mazeArr[r][c] = MAZE_OBJ_PILLAR;
                    }
                }
            }
        }

        // ②各点から、線が伸びていない点に向けて、最大4方向に線を伸ばす


        // ③線が1本も伸びていない点から、曲がり角が2箇所無いように線を伸ばす

        // ④作成したマップの一部分を複製+反転させ、マップ全体を作成する

        return;
    }

    checkIndp(_row, _col) {
        let indp = true;
        for (let r = -1; r < 1; r++) {
            for (let c = -1; c < 1; c++) {
                if (this.mazeArr[_row + r][_col + c] != MAZE_OBJ_BLANK) {
                    if (r == 0 && c == 0) {
                        continue;
                    }
                    indp = false;
                    r = 2;
                    break;
                }
            }
        }
        return indp;
    }
}