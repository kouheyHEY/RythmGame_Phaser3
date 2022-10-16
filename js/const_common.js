
/* 全シーン共通変数 START */
// 画面サイズ
const D_WIDTH = 720;
const D_HEIGHT = 720;

/* 全シーン共通変数 END */

/* ゲームシーン変数 START */

// 各モードのID
const MODE_NORMAL = 0;
const MODE_HARD = 1;
const MODE_EXTRA = 2;

// 各モードの表示用文字列
const MODE_NAME = [
    "NORMAL",
    "HARD",
    "EXTRA"
];

// パズルの広さの定義
const PUZZLE_SIZE = [
    [3, 3],
    [3, 4],
    [4, 4]
];

// パズルのユニット数
const PUZZLE_UNIT_NUM = [
    9, 12, 16
];

// パズルの状態数を表す定数
const PUZZLE_STATE_NUM = 2

// パズルの行列のインデックス
const IDX_ROW = 0;
const IDX_COL = 1;
const IDX_X = 0;
const IDX_Y = 1;

// パズルの反転モード
const REV_MODE_NUM = 3;
const REV_MODE_CROSS = 0;
const REV_MODE_ALL = 1;
const REV_MODE_DIAGONAL = 2;

// パズルの反転用配列
const REV_POS_LIST_CROSS = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0]
];
const REV_POS_LIST_ALL = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];
const REV_POS_LIST_DIAGONAL = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
];
const REV_POS_LIST = [
    REV_POS_LIST_CROSS,
    REV_POS_LIST_ALL,
    REV_POS_LIST_DIAGONAL,
];

// パズルの状態
// 0が正
const PUZZLE_STATE_0 = 0;
const PUZZLE_STATE_1 = 1;

// 各エリアの描画色
const COLOR_AREA_NORMAL = 0xafffaf;
const COLOR_AREA_STROKE = 0x207020;
const STROKE_WEIGHT = 8;

// 各エリアの座標, 幅, 高さ
const AREA_X_INFOAREA = 0;
const AREA_Y_INFOAREA = 0;
const AREA_W_INFOAREA = 480;
const AREA_H_INFOAREA = 240;

const AREA_X_MODECHOICEAREA = 481;
const AREA_Y_MODECHOICEAREA = 0;
const AREA_W_MODECHOICEAREA = 240;
const AREA_H_MODECHOICEAREA = 240;

const AREA_X_PUZZLEAREA = 0;
const AREA_Y_PUZZLEAREA = 241;
const AREA_W_PUZZLEAREA = 720;
const AREA_H_PUZZLEAREA = 480;

// 各テキストの座標, 幅, 高さ
const INFO_SPAN = 20;
const INFO_X = STROKE_WEIGHT + INFO_SPAN;
const INFO_W = (AREA_W_INFOAREA - 3 * INFO_SPAN - 2 * STROKE_WEIGHT) / 2;

const INFO_H = 30;
const INFO_Y_PLAYTIME = STROKE_WEIGHT + INFO_SPAN;
const INFO_Y_REVERSE = INFO_Y_PLAYTIME + INFO_SPAN + INFO_H;
const INFO_Y_MODE = INFO_Y_REVERSE + INFO_SPAN + INFO_H;
const INFO_Y_HIGHSCORE = INFO_Y_MODE + INFO_SPAN + INFO_H;

const INFO_NAME_PLAYTIME = "PlayTime";
const INFO_NAME_REVERSETIME = "Reverse";
const INFO_NAME_MODE = "CurrentMode";
const INFO_NAME_HIGHSCORE = "HighScore";

const INFO_VAL_PLAYTIME_END = " sec";
const INFO_VAL_REVERSETIME_END = " Times";
const INFO_VAL_HIGHSCORE_END = " sec";
const INFO_VAL_HIGHSCORE_MID = " / ";

const INFO_COLOR = 0x002200;

// モード選択ボタンの座標, 幅, 高さ
const MODE_BUTTON_SIZE = [168, 48];
const MODE_BUTTON_MARGIN = [28, 20];

// パズルエリアの座標, 幅, 高さ
const PUZZLE_OUTER_MARGIN = [
    [88, 81],
    [80, 108],
    [80, 64]
];

const PUZZLE_INNER_MARGIN = [
    [16, 16],
    [16, 16],
    [16, 16]
];

const PUZZLE_UNIT_SIZE = [
    [120, 90],
    [96, 72],
    [96, 72]
];

const PUZZLE_BUTTON_SCALE = [
    1,
    0.8,
    0.8
];

const HIGHSCORE_REVNUM = 0;
const HIGHSCORE_TIME = 1;

const PUZZLE_RAND_NUM = [
    3, 4, 5
];

/* ゲームシーン変数 END */