class CStar extends PIXI.Sprite{
    constructor(container, x) {
        super(PIXI.Texture.fromImage("Assets/star_empty.png"));
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

        this.score=0;

        this.scorebg = new PIXI.Sprite.from("Assets/girl_pt_bar_empty.png");
        this.scorebg.anchor.set(0);
        this.scorebg.x=19;
        this.scorebg.y=26;
        this.scorebg.width=378;
        this.scorebg.height=33;
        this.container.addChild(this.scorebg);

        this.scoreline = new PIXI.Sprite.from("Assets/girl_pt_bar_full.png");
        this.scoreline.anchor.set(0);
        this.scoreline.x=19;
        this.scoreline.y=26;
        this.scoreline.width=378;
        this.scoreline.height=33;
        this.container.addChild(this.scoreline);
       
        this.star1 = new CStar(this.container, 61);
        this.star2 = new CStar(this.container, 130);
        this.star3 = new CStar(this.container, 200);
        this.star4 = new CStar(this.container, 271);
        this.star5 = new CStar(this.container, 348);

        femaleContainer.addChild(this.container)
    }
}

class CBoard extends PIXI.Sprite{
    static count;
    constructor(pict, x, y, width, height, score, scorebox) {
        super(PIXI.Texture.fromImage("Assets/" + pict + ".png"));
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
let gaugeCircle;

function initFemale() {
    sw = app.view.width, sh = app.view.height;

    let yellow, pink, red, uterus;
    let scorebox;
    let semicircle, circle;

    femaleContainer = new PIXI.Container();
    app.stage.addChild(femaleContainer);

    scorebox = new CScore(femaleContainer, sw, sh);

    dartBorder = new PIXI.Sprite.from("Assets/border.png");
    dartBorder.anchor.set(0);
    dartBorder.x = 64;
    dartBorder.y = 90;
    dartBorder.width = 283;
    dartBorder.height = 290;
    femaleContainer.addChild(dartBorder);

    top_10pt = new CBoard(femaleContainer,"10pt_top", 247, 123,  95, 113, 10, scorebox);
    bot_10pt = new CBoard(femaleContainer, "10pt_bot",  57, 236, 102, 111, 10, scorebox);
    top_20pt = new CBoard(femaleContainer, "20pt_top", 67, 125, 98, 108, 20, scorebox);
    bot_20pt = new CBoard(femaleContainer, "20pt_bot", 252, 237, 93, 110, 20, scorebox);
    top_30pt = new CBoard(femaleContainer, "30pt_top",132, 98,  129, 77, 30, scorebox);
    bot_30pt = new CBoard(femaleContainer,"30pt_bot", 141, 292,  134, 84, 30, scorebox);
    pt40 = new CBoard(femaleContainer,"40pt",  137, 170, 131, 133, 40, scorebox);

    let txt = new PIXI.Text("", { fontFamily: 'Arial', fontSize: 24, fill: 0x000000, align: 'center' });
    femaleContainer.addChild(txt);
    txt = new PIXI.Text("RED="+red.score, { fontFamily: 'Arial', fontSize: 24, fill: 0xFF0000, stroke: 'black', strokeThickness: 1, align: 'center' });
    txt.y = 200;
    femaleContainer.addChild(txt);
    txt = new PIXI.Text("PINK="+pink.score, { fontFamily: 'Arial', fontSize: 24, fill: 0xFFC0CB, stroke: 'black', strokeThickness: 1, align: 'center' });
    txt.y = 225;
    femaleContainer.addChild(txt);
    txt = new PIXI.Text("YELLOW="+yellow.score, { fontFamily: 'Arial', fontSize: 24, fill: 0xFFFF00, stroke: 'black', strokeThickness: 1, align: 'center' });
    txt.y = 255;
    femaleContainer.addChild(txt);

    uterus = new PIXI.Sprite.from("Assets/uterus.png");
    uterus.anchor.set(0);
    uterus.x = 160;
    uterus.y = 199;
    uterus.height = 72;
    uterus.width = 88;
    femaleContainer.addChild(uterus);

    var semicircGraphic = new this.PIXI.Graphics();
    semicircGraphic.beginFill(0x00FF00);
    semicircGraphic.lineStyle(2, 0x00FF00);
    semicircGraphic.arc(0, 0, 100, Math.PI, 0); // cx, cy, radius, startAngle, endAngle
    var semicircTexture = app.renderer.generateTexture(semicircGraphic);
    semicircle= new PIXI.Sprite(semicircTexture);
    semicircle.anchor.set(0.5,1);
    semicircle.x=sw/2;
    semicircle.y=sh*7/8;
    femaleContainer.addChild(semicircle);

    var circleGraphic = new this.PIXI.Graphics();
    circleGraphic.beginFill(0xFF0000);
    circleGraphic.lineStyle(2, 0xFF0000);
    circleGraphic.drawCircle(0, 0, 20);
    var circleTexture = app.renderer.generateTexture(circleGraphic);
    circle= new PIXI.Sprite(circleTexture);
    circle.anchor.set(0.5);
    circle.x=sw/2;
    circle.y=sh*13/16;
    femaleContainer.addChild(circle);

    arrow = new PIXI.Sprite.from("images/arrow.png");
    arrow.anchor.set(1, 0.5);
    arrow.width = 150;
    arrow.height = 40;
    arrow.angle = 90;
    arrow.x = sw / 2;
    arrow.y = sh * 13 / 16;
    femaleContainer.addChild(arrow);

    var k = 1;
    let rotateTicker = () => {
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
                initArrow(app, arrow, counter, gaugeCircle);
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
            }

            var r2 = ((txtx - centerx) * (txtx - centerx)) + ((txty - centery)) * ((txty - centery));
            femaleContainer.addChild(txt);

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
        counter++;
        gaugeCircle.interactive = false;


    }

    //app.ticker.add(rotateTicker);

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
        if (counter == 30){
            app.ticker.remove(waitTicker);
            displayBox();
        }
        counter++;
    }

    if (width < sw * 7 / 8) {
        scrbx.scoreline.width += score;
        scrbx.score+=score;
        if (width > sw * 7 / 8) {
            width = sw * 7 / 8;
        }
        txt.text= "SCORE="+scrbx.score;
        offsetX=scrbx.scoreline.x+scrbx.scoreline.width;
        if (offsetX >= scrbx.star1.x && CBoard.count == 0) {
            scorebg.count++;
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
    } else if (CBoard.count == 2) {
        CBoard.count++;
        scrbx.star3.texture = fullstar;
        app.ticker.add(waitTicker);
        return true;
    }
    return false;
}

function initArrow() {
    arrow.x = sw / 2;
    arrow.y = sh * 13 / 16;
    femaleContainer.addChild(arrow);
    counter = 0;
    gaugeCircle.x = sw / 2;
    gaugeCircle.interactive = true;
}

function displayBox() {
    let buttonok;
    var textureok = PIXI.Texture.from('images/ok.png');

    var h1 = app.view.height / 3;
    var w1 = 30,
        w2 = app.view.width - (2 * w1);
    buttons = new PIXI.Container();
    buttons.height = app.view.height;
    buttons.width = app.view.width;

    buttonok = new PIXI.Sprite.from(textureok);
    buttonok.buttonMode = true;
    buttonok.anchor.set(1);
    buttonok.height = 50;
    buttonok.width = 50;
    buttonok.x = w1 + w2;
    buttonok.y = 2 * h1;
    buttonok.myCustomProperty = this.okimage;
    buttonok.interactive = true;
    buttonok.buttonMode = true;
    buttonok.on('pointerdown', onGameOk);

    buttonReplay = new PIXI.Sprite.from("images/replay.png");
    buttonReplay.anchor.set(0, 1);
    buttonReplay.height = 50;
    buttonReplay.width = 50;
    buttonReplay.x = w1;
    buttonReplay.y = 2 * h1;
    buttonReplay.interactive = true;
    buttonReplay.on('pointerdown', onReplay);

    var buttonEndTurn = new PIXI.Graphics();
    buttonEndTurn.beginFill(0xFF2342);
    buttonEndTurn.drawRect(w1, h1, w2, h1);
    buttonEndTurn.endFill();

    var text = new PIXI.Text("Instruction:");
    text.font = "50px Arial";
    text.fill = "0XFFFFFF";
    text.anchor.set(0.5);
    text.x = (w1 + w2) / 2;
    text.y = h1 + text.height;

    var blurbg = new PIXI.Graphics();
    blurbg.beginFill(0xFFFFFF);
    blurbg.drawRect(0, 0, app.view.width, app.view.height);

    buttons.addChild(blurbg);
    buttons.addChild(buttonEndTurn);
    buttons.addChild(text);
    if (CBoard.count < 3) { buttons.addChild(buttonok); }
    else {

        buttons.addChild(buttonReplay);
        buttonok.texture = new PIXI.Texture.from("images/logout.png");
        buttons.addChild(buttonok);
    }
    app.stage.addChild(buttons);
}

function onGameOk() {
    if (CBoard.count < 3) {
        app.stage.removeChild(buttons);
        displayed = false;
        initArrow();
    }
    else { onReplay(); };
}

function onReplay() {
    app.stage.removeChild(buttons);
    app.stage.removeChild(femaleContainer);
    app.stage.addChild(homecontainer);
}