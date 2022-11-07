// シーン名
const SCENE_NAME_CHASERGAME = "ChaserGameScene";

// 画像ファイルのディレクトリ
const DIR_ASSETS = "./assets"
const DIR_IMG = DIR_ASSETS + "/img"

// 各画像ファイルのアセット名
const IMG_NAME_SCORE_1 = "SCORE_1";
const IMG_NAME_SCORE_2 = "SCORE_2";
const IMG_NAME_SCORE_3 = "SCORE_3";
const IMG_NAME_LIFE = "LIFE";
const IMG_NAME_BLOCK_NORMAL = "BLOCK_NORMAL";

// 画像ファイルロード用配列
const FILE_NAME_IMG_LIST = {
    [SCENE_NAME_CHASERGAME]: {
        [IMG_NAME_SCORE_1]: "Item_score_1.png",
        [IMG_NAME_SCORE_2]: "Item_score_2.png",
        [IMG_NAME_SCORE_3]: "Item_score_3.png",
        [IMG_NAME_LIFE]: "Item_life.png",
        [IMG_NAME_BLOCK_NORMAL]: "Block_normal.png",
    }
};

// スプライトシートロード用文字列 
const SPRITE_NAME_PLAYER = "PLAYER";

const FILE_NAME_PLAYER = "Player.png";

const UNIT_SIZE = 64;