init();
var feimage = 'Assets/girl_button.png';
var fe2image = 'Assets//girl_button_after.png';
var maimage = 'Assets/boy_button.png';
var ma2image = 'Assets/boy_button_after.png';
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
let sex;
function init() {
    //let app;

    let buttonquestion, backgroundimg;

    window.onload = function () {
        app = new PIXI.Application(
            {
                width: 414,
                height: 668,
                backgroundcolor: 0xAAAAAA
            }
        );
        document.body.appendChild(app.view);
        homecontainer = new PIXI.Container();
        app.stage.addChild(homecontainer);

        backgroundimg = new PIXI.Sprite.from("Assets/intro_page.png");
        backgroundimg.anchor.set(0);
        backgroundimg.height = 668;
        backgroundimg.width = 415;
        backgroundimg.x = -1;
        backgroundimg.y = 1;
        homecontainer.addChild(backgroundimg);

        buttonfemale = new PIXI.Sprite.from(texturefe);
        buttonfemale.buttonMode = true;
        buttonfemale.height = 131;
        buttonfemale.width = 187;
        buttonfemale.x = 23;
        buttonfemale.y = 106;
        buttonfemale.myCustomProperty = this.feimage;

        buttonfemale.interactive = true;
        buttonfemale.buttonMode = true;
        buttonfemale.on('pointerdown', function (e) { onbuttonfedown(e); }).on("pointerover", function (e) { onbuttonover(e); }).on("pointerout", onbuttonout);
        homecontainer.addChild(buttonfemale);

        buttonmale = new PIXI.Sprite.from(texturema);
        buttonmale.buttonMode = true;
        buttonmale.x = 226;
        buttonmale.y = 106;
        buttonmale.height = 125;
        buttonmale.width = 165;
        buttonmale.myCustomProperty = this.maimage;
        buttonmale.interactive = true;
        buttonmale.buttonMode = true;
        buttonmale.on('pointerdown', function (e) { onbuttonmadown(e); }).on("pointerover", function (e) { onbuttonover(e); }).on("pointerout", onbuttonout);
        homecontainer.addChild(buttonmale);
    }
}
function onbuttonfedown(bt) {
    sex = "female";
    instructionlayer()
}
function onbuttonmadown(bt) {
    sex = "male";
    instructionlayer()
}
function instructionlayer() {
    intructionimg = new PIXI.Sprite.from("Assets/Description.png");
    intructionimg.height = 668;
    intructionimg.width = 415;
    intructionimg.x = -1;
    intructionimg.y = 1;
    intructionimg.interactive = true;
    intructionimg.on('pointerdown', onintructionimgdown)
    app.stage.addChild(intructionimg);
}
function onintructionimgdown() {
    app.stage.removeChild(intructionimg);
    app.stage.removeChild(homecontainer);
    playGame(sex);
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