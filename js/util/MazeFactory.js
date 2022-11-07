class MazeFactory {
    constructor(_row, _col) {
        this.row = _row;
        this.col = _col;
        this.mazeArr = Array();
    }

    initMaze() {
        this.mazeArr = [];
        for (let r = 0; r < this.row; r++) {
            this.mazeArr.push([]);
            for (let c = 0; c < this.col * 2 - 1; c++) {
                this.mazeArr[r].push(MAZE_OBJ_BLANK);
            }
        }
    }

    createMaze() {

        return;
    }
}