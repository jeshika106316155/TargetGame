let gameContainer;


var femaleInfo = [{
    img: "Assets/girl_star1.png",
    x: 17,
    y: 404
}, {
    img: "Assets/girl_star2.png",
    x: 292,
    y: 419
}, {
    img: "Assets/girl_star3.png",
    x: 300,
    y: 351
}, {
    img: "Assets/girl_star4.png",
    x: 22,
    y: 437
}, {
    img: "Assets/girl_star5.png",
    x: 283,
    y: 591
}];

var maleInfo = [{
    img: "Assets/boy_star1.png",
    x: 21,
    y: 393
}, {
    img: "Assets/boy_star2.png",
    x: 292,
    y: 419
}, {
    img: "Assets/boy_star3.png",
    x: 22,
    y: 437
}];


var uterus = {
    img: "Assets/uterus.png",
    x: 160,
    y: 199,
    width: 88,
    height: 72
};

var sperm = {
    img: "Assets/sperm.png",
    x: 165,
    y: 198,
    width: 74,
    height: 69
};

function playGame(sex) {
    CBoard.count = 0;
    gameContainer = new PIXI.Container();
    app.stage.addChild(gameContainer);

    let backgroundimg = new PIXI.Sprite.from("Assets/background.png");
    backgroundimg.anchor.set(0);
    backgroundimg.height = app.view.height;
    backgroundimg.width = app.view.width;
    backgroundimg.x = 0;
    backgroundimg.y = 0;
    gameContainer.addChild(backgroundimg);

    let wings = new PIXI.Sprite.from("Assets/wings.png");
    wings.anchor.set(0);
    wings.x = 1;
    wings.y = 109;
    wings.width = 415;
    wings.height = 342;
    gameContainer.addChild(wings);

    let scorebox = new CScore(gameContainer);

    let top_10pt = new CBoard(gameContainer, "10pt_top", 247, 123, 95, 113, 10, scorebox);
    let bot_10pt = new CBoard(gameContainer, "10pt_bot", 67, 236, 102, 111, 10, scorebox);
    let top_20pt = new CBoard(gameContainer, "20pt_top", 67, 125, 98, 108, 20, scorebox);
    let bot_20pt = new CBoard(gameContainer, "20pt_bot", 252, 237, 93, 110, 20, scorebox);
    let top_30pt = new CBoard(gameContainer, "30pt_top", 132, 98, 129, 77, 30, scorebox);
    let bot_30pt = new CBoard(gameContainer, "30pt_bot", 141, 292, 134, 84, 30, scorebox);
    let pt40 = new CBoard(gameContainer, "40pt", 137, 170, 131, 133, 40, scorebox);

    let dartBorder = new PIXI.Sprite.from("Assets/border.png");
    dartBorder.anchor.set(0);
    dartBorder.x = 64;
    dartBorder.y = 90;
    dartBorder.width = 283;
    dartBorder.height = 290;
    gameContainer.addChild(dartBorder);

    let str_bar = new PIXI.Sprite.from("Assets/str_bar_full.png");
    str_bar.anchor.set(0);
    str_bar.x = 32;
    str_bar.y = 511;
    str_bar.width = 381;
    str_bar.height = 143;
    str_bar.interactive = true;
    str_bar.on("pointerdown", function () {
        app.ticker.remove(rotateTicker);
        arrow.angle = indicator.angle;
        gaugeCircle.interactive = true;
    });
    gameContainer.addChild(str_bar);

    let indicator = new PIXI.Sprite.from("Assets/indicator.png");
    indicator.anchor.set(1, 0.5);
    indicator.x = 204;
    indicator.y = 615;
    indicator.width = 48;
    indicator.height = 20;
    indicator.angle = 90;
    gameContainer.addChild(indicator);

    arrow = new CArrow(gameContainer, "blue")

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
            gameContainer.removeChild(arrow);
            if (displayed == false) {
                initArrow(app, arrow, counter, gaugeCircle, rotateTicker);
            }
        }
        counter++;
    }

    let scoreTxt = new PIXI.Text("SCORE=0", { fontFamily: 'Arial', fontSize: 24, fill: 0x000000, stroke: 'black', strokeThickness: 1, align: 'center' });
    scoreTxt.y = 0;
    gameContainer.addChild(scoreTxt);

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
            //gameContainer.addChild(txt);
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

        } arrow.x = arrow.x - Math.cos(arrow.rotation) * speed;
        arrow.y = arrow.y - Math.sin(arrow.rotation) * speed;
        counter++;
        gaugeCircle.interactive = false;
    }

    app.ticker.add(rotateTicker);

    var gaugeContainer = new PIXI.Container();
    gameContainer.addChild(gaugeContainer);

    let txt1 = new PIXI.Text("SPEED=0", { fontFamily: 'Arial', fontSize: 24, fill: 0xFFFF00, stroke: 'black', strokeThickness: 1, align: 'center' });
    txt1.y = 400;

    let holdCircle = false;
    gaugeCircle = new PIXI.Sprite.from("images/circle.png");
    gaugeCircle.anchor.set(0.5);
    gaugeCircle.x = 150;
    gaugeCircle.y = 626;
    gaugeCircle.height = 30;//13;
    gaugeCircle.width = gaugeCircle.height;
    gameContainer.addChild(gaugeCircle);
    gaugeCircle.interactive = false;
    gaugeCircle.on('pointerdown', function () {
        app.ticker.remove(rotateTicker);
        arrow.angle = indicator.angle;
        holdCircle = true;
    });
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
            gaugeCircle.interactive = false;
            app.ticker.add(flyTicker);
        }
    });

    if (sex == "female") {
        let ut = new PIXI.Sprite.from(uterus.img);
        ut.x = uterus.x;
        ut.y = uterus.y;
        ut.width = uterus.width;
        ut.height = uterus.height;
        gameContainer.addChild(ut);
    }
    else {
        let sp = new PIXI.Sprite.from(sperm.img);
        sp.x = sperm.x;
        sp.y = sperm.y;
        sp.width = sperm.width;
        sp.height = sperm.height;
        gameContainer.addChild(sp);
    }
}
