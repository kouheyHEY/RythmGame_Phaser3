class ModeChoiceArea {
    constructor() {
        this.modeButtonList = [];
    }

    pushChgButton(_mode) {
        for (let i = 0; i < MODE_NAME.length; i++) {
            if (i != _mode) {
                this.modeButtonList[i].setTexture(MODE_BUTTON_OFF_TEXTURE[i]);
            } else {
                this.modeButtonList[i].setTexture(MODE_BUTTON_ON_TEXTURE[i]);
            }
        }
    }
}