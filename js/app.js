init();
var feimage = 'images/Female2.png';
var fe2image = 'images/Female1.png';
var maimage = 'images/Male1.png';
var ma2image = 'images/Male.png';
var queimage = 'images/question.png';
var que2image = 'images/question2.png';
var okimage = 'images/ok.png';
var texturefe = PIXI.Texture.fromImage(feimage);
var texturefe2 = PIXI.Texture.fromImage(fe2image);
var texturema = PIXI.Texture.fromImage(maimage);
var texturema2 = PIXI.Texture.fromImage(ma2image);
var textureque = PIXI.Texture.fromImage(queimage);
var textureque2 = PIXI.Texture.fromImage(que2image);
var textureok = PIXI.Texture.fromImage(okimage);
let app;
var buttons;
let buttonfemale, buttonmale, textup;
function init() {
    //let app;

    let buttonquestion, backgroundimg;

    window.onload = function () {
        app = new PIXI.Application(
            {
                width: 414,
                height: 736,
                backgroundcolor: 0xAAAAAA
            }
        );
        document.body.appendChild(app.view);

        backgroundimg = new PIXI.Sprite.from("images/bg1.jpg");
        backgroundimg.anchor.set(0);
        backgroundimg.height = app.view.height;
        backgroundimg.width = app.view.width;
        backgroundimg.x = 0;
        backgroundimg.y = 0;
        app.stage.addChild(backgroundimg);

        textup = new PIXI.Sprite.from("images/textup.png");
        textup.anchor.set(0.5);
        textup.height = 150;
        textup.width = 400;
        textup.x = app.view.width / 2;
        textup.y = app.view.height / 4;
        app.stage.addChild(textup);

        textup2 = new PIXI.Sprite.from("images/textup.png");
        textup2.position = "absolute";
        textup2.anchor.set(0.5);
        textup2.height = 150;
        textup2.width = 400;
        textup2.x = 400;
        textup2.y = 100;
        textup2.speed = 10;
        app.ticker.add(delta => gameLoop(delta));
        app.ticker.add(delta => checkLoop(delta));
        app.stage.addChild(textup2);


        buttonfemale = new PIXI.Sprite.from(texturefe);
        buttonfemale.buttonMode = true;
        buttonfemale.anchor.set(0.5);
        buttonfemale.height = 150;
        buttonfemale.width = 150;
        buttonfemale.x = app.view.width / 2;
        buttonfemale.y = app.view.height / 2;
        buttonfemale.myCustomProperty = this.feimage;

        buttonfemale.interactive = true;
        buttonfemale.buttonMode = true;
        buttonfemale.on('pointerdown', function (e) { onbuttonfedown(e); }).on("pointerover", function (e) { onbuttonover(e); }).on("pointerout", onbuttonout);
        app.stage.addChild(buttonfemale);

        buttonmale = new PIXI.Sprite.from(texturema);
        buttonmale.buttonMode = true;
        buttonmale.anchor.set(0.5);
        buttonfemale.height = 150;
        buttonfemale.width = 150;
        buttonmale.x = app.view.width / 2;
        buttonmale.y = app.view.height * 3 / 4;
        buttonmale.myCustomProperty = this.maimage;
        buttonmale.interactive = true;
        buttonmale.buttonMode = true;
        buttonmale.on('pointerdown', function (e) { onbuttonfedown(e); }).on("pointerover", function (e) { onbuttonover(e); }).on("pointerout", onbuttonout);
        app.stage.addChild(buttonmale);

        buttonquestion = new PIXI.Sprite.from(this.textureque);
        buttonquestion.buttonMode = true;
        buttonquestion.anchor.set(1);
        buttonquestion.height = 80;
        buttonquestion.width = 80;
        buttonquestion.x = app.view.width;
        buttonquestion.y = app.view.height;
        buttonquestion.myCustomProperty = this.queimage;

        buttonquestion.interactive = true;
        buttonquestion.buttonMode = true;
        buttonquestion.on('pointerdown', onbuttonquestiondown).on("pointerover", function (e) { onbuttonover(e); }).on("pointerout", onbuttonout);
        app.stage.addChild(buttonquestion);
    }
    //var textureButton = PIXI.Texture.fromImage('https://dl.dropboxusercontent.com/s/mi2cibdajml8qj9/arrow_wait.png?dl=0');
}
function onbuttonfedown(bt) {
    //console.log(bt);
    this.isdown = true;
    if (bt.target.myCustomProperty == feimage) {
        bt.target._texture = texturefe2;
    }
    else if (bt.target.myCustomProperty == maimage) {
        bt.target._texture = texturema2;
    }
    window.location.href = "game.html";
}
function onbuttonover(bt) {
    this.isOver = true;

    if (this.isdown) {
        return;
    }
    if (bt.target.myCustomProperty == feimage) {
        bt.target._texture = texturefe2;
    }
    else if (bt.target.myCustomProperty == maimage) {
        bt.target._texture = texturema2;
    }
    else {
        bt.target._texture = textureque2;
    }
}

function onbuttonout() {
    this.isOver = false;
    if (this.myCustomProperty == feimage) {
        this.texture = texturefe;
    }
    else if (this.myCustomProperty == maimage) {
        this.texture = texturema;
    }
    else {
        this.texture = textureque;
    }
}
function a() {
    let buttonok;

    var h1 = app.view.height / 3;
    var w1 = 30, w2 = app.view.width - (2 * w1);
    buttons = new PIXI.Container();
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

    var buttonEndTurn = new PIXI.Graphics(); s
    buttonEndTurn.beginFill(0xFF2342);
    buttonEndTurn.drawRect(w1, h1, w2, h1);
    buttonEndTurn.endFill();

    var text = new PIXI.Text("Instruction:");
    text.font = "50px Arial";
    text.fill = "0XFFFFFF";
    text.anchor.set(0.5);
    text.x = (w1 + w2) / 2;
    text.y = h1 + text.height;


    buttons.addChild(buttonEndTurn);
    buttons.addChild(text);
    buttons.addChild(buttonok);

    app.stage.addChild(buttons);
}
function onbuttonquestiondown() {
    //console.log(bt);
    a();
}
function onremovebuttonfema() {
    app.stage.removeChild(buttonfemale);
    app.stage.removeChild(buttonmale);
}
function onbuttonokdown() {
    app.stage.removeChild(buttons);
    app.stage.addChild(buttonfemale);
    app.stage.addChild(buttonmale);
}
function gameLoop(delta) {

    //Move the cat 1 pixel 
    textup2.x -= 1;
    textup2.y += 1;
}
function checkLoop(delta) {

    //Move the cat 1 pixel 
    if (textup2.y == app.view.height / 2) {
        app.ticker.stop();
    }
}