class MazeFactory {
    constructor(_row, _col) {
        this.row = _row;
        this.col = _col;
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
}