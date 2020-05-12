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

        this.scorebg = new PIXI.Sprite.from("Assets/girl_pt_bar_empty.png");
        this.scorebg.anchor.set(0);
        this.scorebg.x = 19;
        this.scorebg.y = 26;
        this.scorebg.width = 378;
        this.scorebg.height = 33;
        this.container.addChild(this.scorebg);

        this.scoreline = new PIXI.Sprite.from("Assets/girl_pt_bar_full.png");
        this.scoreline.anchor.set(0);
        this.scoreline.x = 19;
        this.scoreline.y = 26;
        this.scoreline.width = 1;
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

    let yellow = new Board(femaleContainer, sw, sh, "yellow", 100, 10, scorebox);
    let pink = new Board(femaleContainer, sw, sh, "pink", 80, 20, scorebox);
    let red = new Board(femaleContainer, sw, sh, "red", 60, 30, scorebox);


    let uterus = new PIXI.Sprite.from("Assets/uterus.png");
    uterus.anchor.set(0);
    uterus.x = 160;
    uterus.y = 199;
    uterus.width = 88;
    uterus.height = 72;
    femaleContainer.addChild(uterus);

    let wings = new PIXI.Sprite.from("Assets/wings.png");
    wings.anchor.set(0);
    wings.x = 1;
    wings.y = 109;
    wings.width = 415;
    wings.height = 342;
    femaleContainer.addChild(wings);

    // let txt = new PIXI.Text("", { fontFamily: 'Arial', fontSize: 24, fill: 0x000000, align: 'center' });
    // femaleContainer.addChild(txt);
    // txt = new PIXI.Text("RED="+red.score, { fontFamily: 'Arial', fontSize: 24, fill: 0xFF0000, stroke: 'black', strokeThickness: 1, align: 'center' });
    // txt.y = 200;
    // femaleContainer.addChild(txt);
    // txt = new PIXI.Text("PINK="+pink.score, { fontFamily: 'Arial', fontSize: 24, fill: 0xFFC0CB, stroke: 'black', strokeThickness: 1, align: 'center' });
    // txt.y = 225;
    // femaleContainer.addChild(txt);
    // txt = new PIXI.Text("YELLOW="+yellow.score, { fontFamily: 'Arial', fontSize: 24, fill: 0xFFFF00, stroke: 'black', strokeThickness: 1, align: 'center' });
    // txt.y = 255;
    // femaleContainer.addChild(txt);

    str_bar_empty = new PIXI.Texture.from("Assets/str_bar_empty.png");
    str_bar_full = new PIXI.Texture.from("Assets/str_bar_full.png");
    let str_bar = new PIXI.Sprite.from("Assets/str_bar_empty.png");
    str_bar.anchor.set(0);
    str_bar.x = 32;
    str_bar.y = 511;
    str_bar.width = 381;
    str_bar.height = 143;
    femaleContainer.addChild(str_bar);

    let indicator = new PIXI.Sprite.from("Assets/indicator.png");
    indicator.anchor.set(0.5);
    indicator.x = 186.38;
    indicator.y = 618.84;
    indicator.width = 48;
    indicator.height = 20;
    indicator.angle = 90;
    femaleContainer.addChild(indicator);



    // var semicircGraphic = new this.PIXI.Graphics();
    // semicircGraphic.beginFill(0x00FF00);
    // semicircGraphic.lineStyle(2, 0x00FF00);
    // semicircGraphic.arc(0, 0, 100, Math.PI, 0); // cx, cy, radius, startAngle, endAngle
    // var semicircTexture = app.renderer.generateTexture(semicircGraphic);
    // semicircle= new PIXI.Sprite(semicircTexture);
    // semicircle.anchor.set(0.5,1);
    // semicircle.x=sw/2;
    // semicircle.y=sh*7/8;
    // femaleContainer.addChild(semicircle);

    // var circleGraphic = new this.PIXI.Graphics();
    // circleGraphic.beginFill(0xFF0000);
    // circleGraphic.lineStyle(2, 0xFF0000);
    // circleGraphic.drawCircle(0, 0, 20);
    // var circleTexture = app.renderer.generateTexture(circleGraphic);
    // circle= new PIXI.Sprite(circleTexture);
    // circle.anchor.set(0.5);
    // circle.x=sw/2;
    // circle.y=sh*13/16;
    // femaleContainer.addChild(circle);

    arrow = new CArrow(femaleContainer, "blue")

    var k = 1;
    rotateTicker = () => {
        var angle = arrow.angle;
        if (arrow.angle < 0 || arrow.angle > 180) { k = -k; }
        arrow.angle += k;
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
            var centerx = yellow.x, centery = yellow.y;
            var txtx = arrow.x, txty = arrow.y;
            for (var i = 0; i <= arrow.width; i++) {
                txtx -= Math.cos(arrow.rotation);
                txty -= Math.sin(arrow.rotation);
                //  txty -= Math.cos(arrow.rotation);
                // txtx -= Math.sin(arrow.rotation);

            }
            // txt = new PIXI.Text("X", { fontFamily: 'Arial', fontSize: 24, fill: 0x000000, stroke: 'black', strokeThickness: 1, align: 'center' });
            // txt.anchor.set(0.5);
            // txt.x=txtx;
            // txt.y=txty;
            //femaleContainer.addChild(txt);
            var r2 = ((txtx - centerx) * (txtx - centerx)) + ((txty - centery)) * ((txty - centery));


            if (r2 <= Math.pow(red.radius, 2)) {
                displayed = hitboard(scorebox, red.score, scoreTxt);
                txt1.text = "red";
            }
            else if (r2 <= Math.pow(pink.radius, 2)) {
                displayed = hitboard(scorebox, pink.score, scoreTxt);
                txt1.text = "pink";
            }
            else if (r2 <= Math.pow(yellow.radius, 2)) {
                displayed = hitboard(scorebox, yellow.score, scoreTxt);
                txt1.text = "yellow";
            }
            app.ticker.add(fadeTicker);
            counter = 0;

        }

        arrow.x = arrow.x - Math.cos(arrow.rotation) * speed;
        arrow.y = arrow.y - Math.sin(arrow.rotation) * speed;
        //arrow.y = arrow.y - Math.cos(arrow.rotation) * speed;
        //arrow.x = arrow.x - Math.sin(arrow.rotation) * speed;
        counter++;
        gaugeCircle.interactive = false;


    }

    app.ticker.add(rotateTicker);

    var gaugeContainer = new PIXI.Container();
    femaleContainer.addChild(gaugeContainer);

    let txt1 = new PIXI.Text("SPEED=0", { fontFamily: 'Arial', fontSize: 24, fill: 0xFFFF00, stroke: 'black', strokeThickness: 1, align: 'center' });
    txt1.y = 400;
    femaleContainer.addChild(txt1);

    gaugeBar = new PIXI.Sprite.from("images/gaugebar.png");
    gaugeBar.anchor.set(0.5);
    gaugeBar.x = sw / 2;
    gaugeBar.y = sh * 18 / 20;
    gaugeBar.height = 30;
    gaugeBar.width = 300;
    gaugeContainer.addChild(gaugeBar);

    let holdCircle = false;
    gaugeCircle = new PIXI.Sprite.from("images/circle.png");
    gaugeCircle.anchor.set(0.5);
    gaugeCircle.x = sw / 2;
    gaugeCircle.y = sh * 18 / 20;
    gaugeCircle.height = 30;
    gaugeCircle.width = gaugeCircle.height;
    gaugeContainer.addChild(gaugeCircle);
    gaugeCircle.interactive = true;
    gaugeCircle.on('pointerdown', function () { holdCircle = true; app.ticker.remove(rotateTicker); });
    gaugeCircle.on('pointermove', function (e) {
        if (holdCircle == true) {
            pos = e.data.global.x;
            posy = e.data.global.y;
            farleft = gaugeBar.x - gaugeBar.width / 2 + gaugeCircle.width / 2;
            farright = gaugeBar.x + gaugeBar.width / 2 - gaugeCircle.width / 2;
            fartop = gaugeBar.y - gaugeBar.height / 2;
            farbottom = gaugeBar.y + gaugeBar.height / 2;
            diff = farright - farleft; //342-72 = 270
            scale = diff / 100; //2.7
            if (pos < farleft) {
                holdCircle = false;
                gaugeCircsle.x = farleft;
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

    if (width < scrbx.scorebg.width) {
        scrbx.scoreline.width += score;
        scrbx.score += score;
        if (width > scrbx.scorebg.width) {
            width = scrbx.scorebg.width;
        }
        txt.text = "SCORE=" + scrbx.score;
        offsetX = scrbx.scoreline.x + scrbx.scoreline.width;
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
    arrow = new CArrow(femaleContainer, "blue");
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

    // buttonReplay = new PIXI.Sprite.from("images/replay.png");
    // buttonReplay.anchor.set(0, 1);
    // buttonReplay.height = 50;
    // buttonReplay.width = 50;
    // buttonReplay.x = w1;
    // buttonReplay.y = 2 * h1;
    // buttonReplay.interactive = true;
    // buttonReplay.on('pointerdown', onReplay);

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