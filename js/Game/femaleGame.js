class CStar extends PIXI.Sprite {
    constructor(container, width, max, x) {
        let ratio = width / max;
        super(PIXI.Texture.from("Assets/star_empty.png"));
        this.anchor.set(0.5, 0);
        this.x = x * ratio;
        this.y = 22;
        this.height = 38;
        this.width = 40;
        container.addChild(this);
    }
}

class CScore {
    constructor(ctnr) {
        this.container = new PIXI.Container();

        this.score = 0;
        this.scorebg = new PIXI.Sprite.from("Assets/pt_bar_full.png");
        this.scoreline = new PIXI.Sprite.from("Assets/pt_bar_empty.png");
        this.scorebg.anchor.set(0);
        this.scorebg.x = 19;
        this.scorebg.y = 26;
        this.scorebg.width = 378;
        this.scorebg.height = 33;
        this.container.addChild(this.scorebg);

        this.scoreline.anchor.set(0);
        this.scoreline.x = 19;
        this.scoreline.y = 26;
        this.scoreline.width = 378;
        this.scoreline.height = 33;
        this.container.addChild(this.scoreline);

        if (sex == "female") {
            this.star1 = new CStar(this.container, this.scorebg.width, 280, 60);
            this.star2 = new CStar(this.container, this.scorebg.width, 280, 120);
            this.star3 = new CStar(this.container, this.scorebg.width, 280, 180);
            this.star4 = new CStar(this.container, this.scorebg.width, 280, 230);
            this.star5 = new CStar(this.container, this.scorebg.width, 280, 280);
        }
        else {
            this.star1 = new CStar(this.container, this.scorebg.width, 200, 70);
            this.star2 = new CStar(this.container, this.scorebg.width, 200, 150);
            this.star3 = new CStar(this.container, this.scorebg.width, 200, 200);
        }

        ctnr.addChild(this.container)
    }
}

class CBoard extends PIXI.Sprite {
    static count;
    constructor(ctnr, pict, x, y, width, height, score, scorebox) {
        super(PIXI.Texture.from("Assets/" + pict + ".png"));
        this.pict = pict;
        this.anchor.set(0);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.score = score;
        this.scorebox = scorebox;
        ctnr.addChild(this);
    }
}

CBoard.count = 0;

class CArrow extends PIXI.Sprite {
    constructor(ctnr, color) {
        super(PIXI.Texture.from("Assets/" + color + "_dart.png"));
        this.anchor.set(1, 0.5);
        this.color = color;
        this.x = 188 + 15.5;
        this.y = 437 + 97;
        this.width = 97;
        this.height = 31;
        this.angle = 90;
        ctnr.addChild(this);
    }
}

function hitboard(scorebox, score, txt) {
    let fullstar = new PIXI.Texture.from("Assets/star_full.png");
    let scrbx = scorebox;
    let width = scrbx.scoreline.width;
    let max = (sex == "female") ? 280 : 200;
    let ratio = scrbx.scorebg.width / max;

    let counter = 0;
    let waitTicker = () => {
        if (counter == 30) {
            app.ticker.remove(waitTicker);
            displayBox(sex);
        }
        counter++;
    }

    if (width > 0) {
        scrbx.scoreline.width -= score * ratio;
        scrbx.scoreline.x += score * ratio;
        scrbx.score += score;
        txt.text = "SCORE=" + scrbx.score;
        offsetX = scrbx.scoreline.x;
        if (offsetX >= scrbx.star1.x && CBoard.count == 0) {
            CBoard.count++;
            scrbx.star1.texture = fullstar;
            app.ticker.add(waitTicker);
            return true;
        }

        if (sex == "female") {
            if (offsetX >= scrbx.star2.x && CBoard.count == 1) {
                CBoard.count++;
                scrbx.star2.texture = fullstar;
                app.ticker.add(waitTicker);
                return true;
            }

            else if (offsetX >= scrbx.star3.x && CBoard.count == 2) {
                CBoard.count++;
                scrbx.star3.texture = fullstar;
                app.ticker.add(waitTicker);
                return true;
            }
            else if (offsetX >= scrbx.star4.x && CBoard.count == 3) {
                CBoard.count++;
                scrbx.star4.texture = fullstar;
                app.ticker.add(waitTicker);
                return true;
            }
            else if (offsetX >= scrbx.star5.x && CBoard.count == 4) {
                CBoard.count++;
                scrbx.star5.texture = fullstar;
                app.ticker.add(waitTicker);
                //width = 1;//scrbx.scorebg.width;
                return true;
            }
        }
        else if (sex == "male") {
            if (offsetX >= scrbx.star2.x && CBoard.count == 1) {
                CBoard.count++;
                scrbx.star2.texture = fullstar;
                app.ticker.add(waitTicker);
                return true;
            }
            else if (offsetX >= scrbx.star3.x && CBoard.count == 2) {
                CBoard.count++;
                scrbx.star3.texture = fullstar;
                app.ticker.add(waitTicker);
                //width = 1;//scrbx.scorebg.width;
                return true;
            }
        }
        return false;
    }
}

function initArrow() {
    var arrows = ["blue", "red", "green"];
    var color = arrow.color;
    for (var i = 0; i < arrows.length; i++) {
        if (arrow.color == arrows[i]) {
            if (i + 1 == arrows.length) i = -1;
            color = arrows[i + 1];
            break;
        }
    }
    arrow = new CArrow(gameContainer, color);
    counter = 0;
    gaugeCircle.x = 77;
    app.ticker.add(rotateTicker);
}

function displayBox(sex) {
    let buttonok;
    buttonrender = false;
    textureok = PIXI.Texture.from('Assets/understood.png');
    buttons = new PIXI.Container();
    app.stage.addChild(buttons);

    buttonok = new PIXI.Sprite.from(textureok);
    buttonok.anchor.set(0);
    buttonok.width = 110;
    buttonok.height = 57;

    //buttonok.on('pointerdown', onGameOk);

    var background;

    if (sex == "female") {
        infoImage = femaleInfo;

        if (CBoard.count <= 5) {

            background = new PIXI.Sprite.from(infoImage[CBoard.count - 1].img);//'Assets/girl_star1.png');
            buttonok.x = infoImage[CBoard.count - 1].x;
            buttonok.y = infoImage[CBoard.count - 1].y;
            buttonok.interactive = true;
            buttonok.on('pointerdown', onGameOk);
        }
        else if (CBoard.count == 6) {
            textureok = PIXI.Texture.from('Assets/back_intro.png');
            buttonok = new PIXI.Sprite.from(textureok);
            background = new PIXI.Sprite.from('Assets/end_page.png');
            buttonok.x = 52;
            buttonok.y = 562;
            buttonok.width = 143;
            buttonok.height = 82;
            buttonok.interactive = true;
            buttonok.on('pointerdown', onReplay);
            buttonEnd = new PIXI.Sprite.from('Assets/end_game.png');
            buttonEnd.anchor.set(0);
            buttonEnd.x = 217;
            buttonEnd.y = 561;
            buttonEnd.width = 148;
            buttonEnd.height = 76;
            buttonEnd.interactive = true;
            buttonEnd.on('pointerdown', onEnd);
            buttons.addChild(buttonEnd);
        }
    }
    else {
        infoImage = maleInfo;
        if (CBoard.count <= 3) {
            background = new PIXI.Sprite.from(infoImage[CBoard.count - 1].img);//'Assets/girl_star1.png');
            buttonok.x = infoImage[CBoard.count - 1].x;
            buttonok.y = infoImage[CBoard.count - 1].y;
            buttonok.interactive = true;
            buttonok.on('pointerdown', onGameOk);
        }
        else if (CBoard.count == 4) {
            textureok = PIXI.Texture.from('Assets/back_intro.png');
            buttonok = new PIXI.Sprite.from(textureok);
            background = new PIXI.Sprite.from('Assets/end_page.png');
            buttonok.x = 52;
            buttonok.y = 562;
            buttonok.width = 143;
            buttonok.height = 82;
            buttonok.interactive = true;
            buttonok.on('pointerdown', onReplay);
            buttonEnd = new PIXI.Sprite.from('Assets/end_game.png');
            buttonEnd.anchor.set(0);
            buttonEnd.x = 217;
            buttonEnd.y = 561;
            buttonEnd.width = 148;
            buttonEnd.height = 76;
            buttonEnd.interactive = true;
            buttonEnd.on('pointerdown', onEnd);
            buttons.addChild(buttonEnd);
        }
    }

    renderbutton(buttons, background);
    if (buttonrender == true) { buttons.addChild(buttonok); }
}
function renderbutton(buttons, background) {
    buttons.addChild(background);
    buttonrender = true;
}
function onGameOk() {
    let waitTicker = () => {
        if (counter == 30) {
            app.ticker.remove(waitTicker);
            displayBox(sex);
        }
        counter++;
    }
    if ((sex == "female" && CBoard.count == 5) || (sex == "male" && CBoard.count == 3)) {
        CBoard.count++;
        //app.ticker.add(waitTicker);
        displayBox(sex);
    }
    else {
        app.stage.removeChild(buttons);
        displayed = false;
        initArrow();
    }
}

function onReplay() {   //back to game home
    app.stage.removeChild(buttons);
    app.stage.removeChild(gameContainer);
    app.stage.addChild(homecontainer);
}

function onEnd() {  //end game, back to main app
    app.stage.removeChild(buttons);
    app.stage.removeChild(gameContainer);
    app.stage.addChild(homecontainer);
}