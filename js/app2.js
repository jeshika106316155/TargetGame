class CStar extends PIXI.Sprite {
    constructor(container, x) {
        super(PIXI.Texture.from("Assets/star_empty.png"));
        this.anchor.set(0);
        this.x = x;
        this.y = 22;
        this.height = 38;
        this.width = 40;
        container.addChild(this);
    }
}

class CScore {
    constructor() {
        this.container = new PIXI.Container();

        this.score = 0;

        this.scorebg = new PIXI.Sprite.from("Assets/girl_pt_bar_full.png");
        this.scorebg.anchor.set(0);
        this.scorebg.x = 19;
        this.scorebg.y = 26;
        this.scorebg.width = 378;
        this.scorebg.height = 33;
        this.container.addChild(this.scorebg);

        this.scoreline = new PIXI.Sprite.from("Assets/girl_pt_bar_empty.png");
        this.scoreline.anchor.set(0);
        this.scoreline.x = 19;
        this.scoreline.y = 26;
        this.scoreline.width = 378;
        this.scoreline.height = 33;
        this.container.addChild(this.scoreline);

        this.star1 = new CStar(this.container, 61);
        this.star2 = new CStar(this.container, 130);
        this.star3 = new CStar(this.container, 200);
        this.star4 = new CStar(this.container, 271);
        this.star5 = new CStar(this.container, 348);

        femaleContainer.addChild(this.container)
    }
}

class Board extends PIXI.Sprite {
    static count;
    constructor(app, sw, sh, color, radius, score, scorebox) {
        super(PIXI.Texture.from("images/" + color + ".png"));
        this.app = app;
        this.sw = sw;
        this.sh = sh;
        this.color = color;
        this.radius = radius;
        this.score = score;
        this.scorebox = scorebox;
        //this.board = new PIXI.Sprite.from("images/" + color + ".png");
        this.anchor.set(0.5);
        this.x = sw / 2;
        this.y = sh * 1 / 4;
        this.width = radius * 2;
        this.height = radius * 2;
        femaleContainer.addChild(this);
    }
}

Board.count = 0;

class CBoard extends PIXI.Sprite {
    static count;
    constructor(femaleContainer, pict, x, y, width, height, score, scorebox) {
        super(PIXI.Texture.from("Assets/" + pict + ".png"));
        this.pict = pict;
        this.anchor.set(0);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.score = score;
        this.scorebox = scorebox;
        femaleContainer.addChild(this);
    }
}

CBoard.count = 0;

class CArrow extends PIXI.Sprite {
    constructor(container, color) {
        super(PIXI.Texture.from("Assets/" + color + "_dart.png"));
        this.anchor.set(1, 0.5);
        this.color = color;
        this.x = 188 + 15.5;
        this.y = 437 + 97;
        this.width = 97;
        this.height = 31;
        this.angle = 90;
        container.addChild(this);
    }
}


let gaugeCircle;

function initFemale() {
    sw = app.view.width, sh = app.view.height;

    femaleContainer = new PIXI.Container();
    app.stage.addChild(femaleContainer);

    let semicircle, circle;


    let backgroundimg = new PIXI.Sprite.from("Assets/background.png");
    backgroundimg.anchor.set(0);
    backgroundimg.height = app.view.height;
    backgroundimg.width = app.view.width;
    backgroundimg.x = 0;
    backgroundimg.y = 0;
    femaleContainer.addChild(backgroundimg);

    let wings = new PIXI.Sprite.from("Assets/wings.png");
    wings.anchor.set(0);
    wings.x = 1;
    wings.y = 109;
    wings.width = 415;
    wings.height = 342;
    femaleContainer.addChild(wings);

    let scorebox = new CScore(femaleContainer, sw, sh);

    let top_10pt = new CBoard(femaleContainer, "10pt_top", 247, 123, 95, 113, 10, scorebox);
    let bot_10pt = new CBoard(femaleContainer, "10pt_bot", 67, 236, 102, 111, 10, scorebox);
    let top_20pt = new CBoard(femaleContainer, "20pt_top", 67, 125, 98, 108, 20, scorebox);
    let bot_20pt = new CBoard(femaleContainer, "20pt_bot", 252, 237, 93, 110, 20, scorebox);
    let top_30pt = new CBoard(femaleContainer, "30pt_top", 132, 98, 129, 77, 30, scorebox);
    let bot_30pt = new CBoard(femaleContainer, "30pt_bot", 141, 292, 134, 84, 30, scorebox);
    let pt40 = new CBoard(femaleContainer, "40pt", 137, 170, 131, 133, 40, scorebox);

    let dartBorder = new PIXI.Sprite.from("Assets/border.png");
    dartBorder.anchor.set(0);
    dartBorder.x = 64;
    dartBorder.y = 90;
    dartBorder.width = 283;
    dartBorder.height = 290;
    femaleContainer.addChild(dartBorder);

    let uterus = new PIXI.Sprite.from("Assets/uterus.png");
    uterus.anchor.set(0);
    uterus.x = 160;
    uterus.y = 199;
    uterus.width = 88;
    uterus.height = 72;
    femaleContainer.addChild(uterus);

    str_bar_empty = new PIXI.Texture.from("Assets/str_bar_empty.png");
    str_bar_full = new PIXI.Texture.from("Assets/str_bar_full.png");
    let str_bar = new PIXI.Sprite.from("Assets/str_bar_full.png");
    str_bar.anchor.set(0);
    str_bar.x = 32;
    str_bar.y = 511;
    str_bar.width = 381;
    str_bar.height = 143;
    str_bar.interactive = true;
    str_bar.on("pointerdown", function () { app.ticker.remove(rotateTicker); arrow.angle = indicator.angle; })
    femaleContainer.addChild(str_bar);

    let indicator = new PIXI.Sprite.from("Assets/indicator.png");
    indicator.anchor.set(1, 0.5);
    indicator.x = 204;
    indicator.y = 615;
    indicator.width = 48;
    indicator.height = 20;
    indicator.angle = 90;
    femaleContainer.addChild(indicator);

    arrow = new CArrow(femaleContainer, "blue")

    var k = 1;
    rotateTicker = () => {
        if (indicator.angle < 0 || indicator.angle > 180) { k = -k; }
        indicator.angle += k;
    }

    var displayed = false;
    counter = 0;
    let fadeTicker = () => {
        if (counter == 50) {
            app.ticker.remove(fadeTicker);
            femaleContainer.removeChild(arrow);
            if (displayed == false) {
                initArrow(app, arrow, counter, gaugeCircle, rotateTicker);
            }
        }
        counter++;
    }

    let scoreTxt = new PIXI.Text("SCORE=0", { fontFamily: 'Arial', fontSize: 24, fill: 0x000000, stroke: 'black', strokeThickness: 1, align: 'center' });
    scoreTxt.y = 0;
    femaleContainer.addChild(scoreTxt);

    var speed = 5; //1-20

    var flyTicker = () => {
        if (counter == 50) {
            app.ticker.remove(flyTicker);
            counter = 0;
            var centerx = pt40.x + (pt40.height / 2), centery = pt40.y + (pt40.height / 2);
            var txtx = arrow.x, txty = arrow.y;
            for (var i = 0; i <= arrow.width; i++) {
                txtx -= Math.cos(arrow.rotation);
                txty -= Math.sin(arrow.rotation);
            }
            // txt = new PIXI.Text("X", { fontFamily: 'Arial', fontSize: 24, fill: 0x000000, stroke: 'black', strokeThickness: 1, align: 'center' });
            // txt.anchor.set(0.5);
            // txt.x=txtx;
            // txt.y=txty;
            //femaleContainer.addChild(txt);
            var r2 = ((txtx - centerx) * (txtx - centerx)) + ((txty - centery)) * ((txty - centery));


            if (r2 <= Math.pow((pt40.height / 2), 2)) {
                displayed = hitboard(scorebox, 40, scoreTxt);
                //txt1.text = "red";
            }
            else if (r2 <= Math.pow((dartBorder.height / 2), 2)) {
                var sin = Math.atan((txty - centery) / (txtx - centerx));
                sin *= 180 / Math.PI; // rads to degs, range (-180, 180]
                if (sin < 0) sin = 360 + sin;
                //txt1.text = sin;
                var scr = 0;
                if (sin >= 0 && sin < 60) {
                    scr = 20;
                }
                else if (sin < 120) {
                    scr = 30;
                }
                else if (sin < 180) {
                    scr = 10;
                }
                else if (sin < 240) {
                    scr = 20;
                }
                else if (sin < 300) {
                    scr = 30;
                }
                else if (sin < 360) {
                    scr = 10;
                }
                displayed = hitboard(scorebox, scr, scoreTxt);

                //txt1.text = "pink";
            }
            app.ticker.add(fadeTicker);
            counter = 0;

        }

        arrow.x = arrow.x - Math.cos(arrow.rotation) * speed;
        arrow.y = arrow.y - Math.sin(arrow.rotation) * speed;
        counter++;
        gaugeCircle.interactive = false;
    }

    app.ticker.add(rotateTicker);

    var gaugeContainer = new PIXI.Container();
    femaleContainer.addChild(gaugeContainer);

    let txt1 = new PIXI.Text("SPEED=0", { fontFamily: 'Arial', fontSize: 24, fill: 0xFFFF00, stroke: 'black', strokeThickness: 1, align: 'center' });
    txt1.y = 400;

    let holdCircle = false;
    gaugeCircle = new PIXI.Sprite.from("images/circle.png");
    gaugeCircle.anchor.set(0.5);
    gaugeCircle.x = sw / 2;
    gaugeCircle.y = 626;
    gaugeCircle.height = 30;//13;
    gaugeCircle.width = gaugeCircle.height;
    femaleContainer.addChild(gaugeCircle);
    gaugeCircle.interactive = true;
    gaugeCircle.on('pointerdown', function () { holdCircle = true; });
    gaugeCircle.on('pointermove', function (e) {
        if (holdCircle == true) {
            pos = e.data.global.x;
            posy = e.data.global.y;
            farleft = str_bar.x + 1.5 * gaugeCircle.width;
            farright = str_bar.x + str_bar.width - 2 * gaugeCircle.width;
            fartop = str_bar.y + 100;
            farbottom = fartop + gaugeCircle.height;
            diff = farright - farleft;
            scale = diff / 100;
            if (pos < farleft) {
                holdCircle = false;
                gaugeCircle.x = farleft;
            }
            else if (pos > farright) {
                holdCircle = false;
                gaugeCircle.x = farright;
            }
            if (posy > farbottom || posy < fartop) {
                holdCircle = false;
            }
            else {
                gaugeCircle.x = pos;
            }
            gaugeValue = parseInt((gaugeCircle.x - farleft) / scale);
            speed = gaugeValue / 10;
            txt1.text = "SPEED=" + speed;
        }
    });
    gaugeCircle.on('pointerup', function () {
        if (holdCircle == true) {
            holdCircle = false;
            Arrowangle = arrow.angle;
            app.ticker.add(flyTicker);
        }
    });
}

function hitboard(scorebox, score, txt) {
    let fullstar = new PIXI.Texture.from("Assets/star_full.png");
    let scrbx = scorebox;
    let width = scrbx.scoreline.width;
    let sw = app.view.width;

    let counter = 0;
    let waitTicker = () => {
        if (counter == 30) {
            app.ticker.remove(waitTicker);
            displayBox();
        }
        counter++;
    }

    if (width >= 0) {
        scrbx.scoreline.width -= score;
        scrbx.scoreline.x += score;
        scrbx.score += score;
        if (width <= scrbx.scorebg.width) {
            width = 1;
        }
        txt.text = "SCORE=" + scrbx.score;
        offsetX = scrbx.scoreline.x;
        if (offsetX >= scrbx.star1.x && CBoard.count == 0) {
            CBoard.count++;
            scrbx.star1.texture = fullstar;
            app.ticker.add(waitTicker);
            return true;
        }
        if (offsetX >= scrbx.star2.x && CBoard.count == 1) {
            CBoard.count++;
            scrbx.star2.texture = fullstar;
            app.ticker.add(waitTicker);
            return true;
        }
        if (offsetX >= scrbx.star3.x && CBoard.count == 2) {
            CBoard.count++;
            scrbx.star3.texture = fullstar;
            app.ticker.add(waitTicker);
            return true;
        }
        if (offsetX >= scrbx.star4.x && CBoard.count == 3) {
            CBoard.count++;
            scrbx.star4.texture = fullstar;
            app.ticker.add(waitTicker);
            return true;
        }
    } else if (CBoard.count == 4) {
        CBoard.count++;
        scrbx.star5.texture = fullstar;
        app.ticker.add(waitTicker);
        return true;
    }
    return false;
}

function initArrow() {
    arrows = ["blue", "red", "green"];
    var color = arrow.color;
    for (var i = 0; i < arrows.length; i++) {
        if (arrow.color == arrows[i]) {
            if (i + 1 == arrows.length) i -= 1;
            color = arrows[i + 1];
            break;
        }
    }
    arrow = new CArrow(femaleContainer, color);
    counter = 0;
    gaugeCircle.x = sw / 2;
    gaugeCircle.interactive = true;
    app.ticker.add(rotateTicker);
}

function displayBox() {
    let buttonok;
    var textureok = PIXI.Texture.from('Assets/understood.png');

    buttons = new PIXI.Container();
    app.stage.addChild(buttons);

    buttonok = new PIXI.Sprite.from(textureok);
    buttonok.anchor.set(0);
    buttonok.width = 110;
    buttonok.height = 57;
    buttonok.interactive = true;
    buttonok.on('pointerdown', onGameOk);
    buttons.addChild(buttonok)

    var background = new PIXI.Sprite.from('Assets/girl_star1.png');
    buttons.addChild(background);
    switch (CBoard.count) {
        case 1:
            background = new PIXI.Sprite.from('Assets/girl_star1.png');
            buttonok.x = 17;
            buttonok.y = 404;
            break;
        case 2:
            background.texture = PIXI.Texture.from('Assets/girl_star2.png');
            buttonok.x = 292;
            buttonok.y = 419;
            break;
        case 3:
            background.texture = PIXI.Texture.from('Assets/girl_star3.png');
            buttonok.x = 300;
            buttonok.y = 351;
            break;
        case 4:
            background.texture = PIXI.Texture.from('Assets/girl_star4.png');
            buttonok.x = 22;
            buttonok.y = 437;
            break;
        case 5:
            background.texture = PIXI.Texture.from('Assets/girl_star5.png');
            buttonok.x = 283;
            buttonok.y = 591;
            break;
        case 6:
            background.texture = PIXI.Texture.from('Assets/end_page.png');
            buttonok.texture = PIXI.Texture.from('Assets/back_intro.png');
            buttonok.x = 52;
            buttonok.y = 562;
            buttonok.width = 143;
            buttonok.height = 82;
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
            break;

    }
}

function onGameOk() {
    let waitTicker = () => {
        if (counter == 30) {
            app.ticker.remove(waitTicker);
            displayBox();
        }
        counter++;
    }
    if (CBoard.count == 5) {
        CBoard.count++;
        app.ticker.add(waitTicker);
    }
    else {
        app.stage.removeChild(buttons);
        displayed = false;
        initArrow();
    }
}

function onReplay() {   //back to game home
    app.stage.removeChild(buttons);
    app.stage.removeChild(femaleContainer);
    app.stage.addChild(homecontainer);
}

function onEnd() {  //end game, back to main app
    app.stage.removeChild(buttons);
    app.stage.removeChild(femaleContainer);
    app.stage.addChild(homecontainer);
}