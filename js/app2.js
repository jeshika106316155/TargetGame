init();
let app;

class CStar {
    constructor(container, sw, sh, x, texture, ) {
        this.s = new PIXI.Sprite(texture);
        this.s.anchor.set(0.5, 0.5);
        this.s.x = x;
        this.s.y = sh * 1 / 20 + (sh / 20 / 3);
        this.s.height = 50;
        this.s.width = this.s.height;
        container.addChild(this.s);
    }
}

class CScore {
    constructor(app, sw, sh) {
        this.container = new PIXI.Container();

        this.scorebg = new PIXI.Graphics();
        this.scorebg.beginFill(0xFFFFFF);
        this.scorebg.lineStyle(2, 0xFFFFFF);
        this.scorebg.drawRect(sw / 20, sh / 20, sw * 18 / 20, 30);
        this.container.addChild(this.scorebg);

        this.scoreline = new PIXI.Graphics();
        this.scoreline.beginFill(0xffc107);
        this.scoreline.lineStyle(2, 0xFFFF00);
        this.scoreline.drawRect(sw / 20 + 10, sh / 20 + 5, 0.5, 20);
        this.container.addChild(this.scoreline);

        this.emptystar = new PIXI.Texture.from("images/emptystar.png");

        this.star1 = new CStar(this.container, sw, sh, sw / 3, this.emptystar);
        this.star2 = new CStar(this.container, sw, sh, sw * 2 / 3, this.emptystar);
        this.star3 = new CStar(this.container, sw, sh, sw * 18 / 20, this.emptystar);

        app.stage.addChild(this.container)
    }
    drawScoreline(sw, sh, width) {
        this.scoreline.beginFill(0xffc107);
        this.scoreline.lineStyle(2, 0xFFFF00);
        this.scoreline.drawRect(sw / 20 + 10, sh / 20 + 5, width, 20);
        this.scoreline.zIndex = 1;
    }
}

class Board {
    static count;
    constructor(app, sw, sh, color, radius, score, scorebox) {
        this.app = app;
        this.sw = sw;
        this.sh = sh;
        this.color = color;
        this.radius = radius;
        this.score = score;
        this.scorebox = scorebox;
        this.board = new PIXI.Sprite.from("images/" + color + ".png");
        this.board.anchor.set(0.5);
        this.board.x = sw / 2;
        this.board.y = sh * 1 / 4;
        this.board.width = radius * 2;
        this.board.height = radius * 2;
        //this.board = new PIXI.Graphics();
        //this.board.beginFill(color);
        //this.board.lineStyle(1, color);
        //this.board.drawCircle(sw / 2, sh * 1 / 4, radius);
        //this.board.interactive = true;

        //this.board.click = this.hitBoard;
        // this.board.click = function () {
        //     //hitboard(scorebox, score, txt);
        // var txt = new PIXI.Text(".", { fontFamily: 'Arial', fontSize: 24, fill: 0x000000, stroke: 'black', strokeThickness: 1, align: 'center' });
        // app.stage.addChild(txt);
        // txt.x = sw / 2;
        // txt.y = sh / 4;
        // };

        app.stage.addChild(this.board);
    }
    hitBoard(e, scorebox) {

    }
}

Board.count = 0;

function init() {
    let yellow, pink, red, uterus;
    let scorebox;
    let semicircle, arrow, circle, backgroundimg;
    window.onload = function () {
        app = new PIXI.Application({
            x: 0,
            y: 0,
            width: 414,
            height: 736,
            backgroundcolor: 0xAAAAAA
        });
        document.body.appendChild(app.view);

        backgroundimg = new PIXI.Sprite.from("images/bg1.jpg");
        backgroundimg.anchor.set(0);
        backgroundimg.height = app.view.height;
        backgroundimg.width = app.view.width;
        backgroundimg.x = 0;
        backgroundimg.y = 0;
        app.stage.addChild(backgroundimg);

        let sw = app.view.width, sh = app.view.height;

        let txt = new PIXI.Text("", { fontFamily: 'Arial', fontSize: 24, fill: 0x000000, align: 'center' });
        app.stage.addChild(txt);
        txt = new PIXI.Text("RED=30", { fontFamily: 'Arial', fontSize: 24, fill: 0xFF0000, stroke: 'black', strokeThickness: 1, align: 'center' });
        txt.y = 200;
        app.stage.addChild(txt);
        txt = new PIXI.Text("PINK=20", { fontFamily: 'Arial', fontSize: 24, fill: 0xFFC0CB, stroke: 'black', strokeThickness: 1, align: 'center' });
        txt.y = 225;
        app.stage.addChild(txt);
        txt = new PIXI.Text("YELLOW=10", { fontFamily: 'Arial', fontSize: 24, fill: 0xFFFF00, stroke: 'black', strokeThickness: 1, align: 'center' });
        txt.y = 255;
        app.stage.addChild(txt);

        scorebox = new CScore(app, sw, sh);

        yellow = new Board(app, sw, sh, "yellow", 100, 10, scorebox);
        pink = new Board(app, sw, sh, "pink", 80, 20, scorebox);
        red = new Board(app, sw, sh, "red", 60, 30, scorebox);


        uterus = new PIXI.Sprite.from("images/uterus.png");
        uterus.anchor.set(0.5);
        uterus.x = sw / 2;
        uterus.y = sh * 1 / 4;
        uterus.height = 100;
        uterus.width = uterus.height;
        app.stage.addChild(uterus);

        txt = new PIXI.Text(".", { fontFamily: 'Arial', fontSize: 24, fill: 0x000000, stroke: 'black', strokeThickness: 1, align: 'center' });
        app.stage.addChild(txt);
        txt.anchor.set(0.5);
        txt.x = uterus.x;
        txt.y = uterus.y;
        semicircle = new this.PIXI.Graphics();
        semicircle.beginFill(0x00FF00);
        semicircle.lineStyle(2, 0x00FF00);
        semicircle.arc(0, 0, 100, Math.PI, 0); // cx, cy, radius, startAngle, endAngle
        semicircle.position = {
            x: sw / 2,
            y: sh * 7 / 8
        };
        app.stage.addChild(semicircle);

        circle = new this.PIXI.Graphics();
        circle.beginFill(0xFF0000);
        circle.lineStyle(2, 0xFF0000);
        circle.drawCircle(sw / 2, sh * 13 / 16, 20);
        //circle.on('pointerdown')
        app.stage.addChild(circle);

        var arrowContainer = new PIXI.Container();
        app.stage.addChild(arrowContainer);

        arrowContainer.x = sw / 2;
        arrowContainer.y = sh * 13 / 16;
        arrowContainer.pivot.x = arrowContainer.width / 2;
        arrowContainer.pivot.y = arrowContainer.height / 2;

        var points = [new PIXI.Point(0, -15), new PIXI.Point(0, 15), new PIXI.Point(-150, 0)];
        arrow = new this.PIXI.Graphics();
        arrow.beginFill(0xFF0000);
        arrow.lineStyle(2, 0xFF0000);
        arrow.drawPolygon(new PIXI.Polygon(points));
        arrowContainer.addChild(arrow);
        arrowContainer.angle = 90;
        arrowContainer.interactive = true;

        var k = 1;
        let rotateTicker = () => {
            var angle = arrowContainer.angle;
            if (arrowContainer.angle < 0 || arrowContainer.angle > 180) { k = -k; }
            arrowContainer.angle += k;
        }

        var speed = 5; //1-20
        var counter = 0;
        var flyTicker = () => {
            if (counter == 50) {
                app.ticker.remove(flyTicker);
                counter = 0;
                var centerx = sw / 2, centery = (sh * 1 / 4);//+7
                var arrx = arrowContainer.x, arry = arrowContainer.y;

                txt = new PIXI.Text(".", { fontFamily: 'Arial', fontSize: 24, fill: 0x000000, stroke: 'black', strokeThickness: 1, align: 'center' });
                app.stage.addChild(txt);
                var conheigh = arrowContainer.width;
                txt.anchor.set(0.5);
                txt.y = arrowContainer.y;//-25
                txt.x = arrowContainer.x;//-5
                for (var i = 0; i < arrowContainer.width + 15; i++) {
                    txt.x = txt.x - Math.cos(arrowContainer.rotation);
                    txt.y = txt.y - Math.sin(arrowContainer.rotation);
                }
                var txtx = txt.x, txty = txt.y;//+ 5+ 25
                var r2 = ((txtx - centerx) * (txtx - centerx)) + ((txty - centery)) * ((txty - centery));
                //txt.y = arrowContainer.y - 15;//(arrowContainer.width - 15) *
                //txt.x = arrowContainer.x - (Math.cos(arrowContainer.rotation));
                txt = new PIXI.Text("", { fontFamily: 'Arial', fontSize: 24, fill: 0x000000, align: 'center' });
                app.stage.addChild(txt);
                if (r2 <= Math.pow(60, 2)) {
                    hitboard(scorebox, 30, txt);
                    txt1.text = "merah";
                }
                else if (r2 <= Math.pow(80, 2)) {
                    hitboard(scorebox, 20, txt);
                    txt1.text = "pink";//pink
                }
                else if (r2 <= Math.pow(100, 2)) {
                    hitboard(scorebox, 10, txt);
                    txt1.text = "kuning";//kuning
                }
            }

            arrowContainer.x = arrowContainer.x - Math.cos(arrowContainer.rotation) * speed;
            arrowContainer.y = arrowContainer.y - Math.sin(arrowContainer.rotation) * speed;
            counter++;


        }

        //app.ticker.add(rotateTicker);

        var gaugeContainer = new PIXI.Container();
        app.stage.addChild(gaugeContainer);

        let txt1 = new PIXI.Text("SPEED=0", { fontFamily: 'Arial', fontSize: 24, fill: 0xFFFF00, stroke: 'black', strokeThickness: 1, align: 'center' });
        txt1.y = 400;
        app.stage.addChild(txt1);

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
                Arrowangle = arrowContainer.angle;

                app.ticker.add(flyTicker);
            }
        });
    }
}
function hitboard(scorebox, score, txt) {
    let fullstar = new PIXI.Texture.from("images/star.png");
    let scrbx = scorebox;
    let width = scrbx.scoreline.width;
    let sw = app.view.width, sh = app.view.height;
    if (width < sw * 7 / 8) {
        scrbx.scoreline.clear();
        width += score;
        if (width > sw * 7 / 8) {
            width = sw * 7 / 8;
        }
        scrbx.drawScoreline(sw, sh, width);
        //scorebox.drawRect(sw/20+10,sh/20+5,width,20);
        txt.text = scrbx.star1.s.x;
        if (scrbx.scoreline.width >= scrbx.star1.s.x && Board.count == 0) {
            scrbx.star1.s.texture = fullstar;
            displayBox(app);
            Board.count++;
        }
        if (scrbx.scoreline.width >= scrbx.star2.s.x && Board.count == 1) {
            scrbx.star2.s.texture = fullstar;
            displayBox(app);
            Board.count++;
        }
    } else if (Board.count == 2) {
        scrbx.star3.s.texture = fullstar;
        displayBox(app);
        Board.count++;
    }
}
function stopArrow(rotateTicker) {
    rotateTicker.stop();
}

function displayBox(app) {
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
    buttonok.on('pointerdown', onbuttonokdown);

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
    blurbg.beginFill(0x000000);
    blurbg.drawRect(0, 0, app.view.width, app.view.height);

    buttons.addChild(blurbg);
    buttons.addChild(buttonEndTurn);
    buttons.addChild(text);
    buttons.addChild(buttonok);
    app.stage.addChild(buttons);
}

function onbuttonokdown() {

    app.stage.removeChild(buttons);
}