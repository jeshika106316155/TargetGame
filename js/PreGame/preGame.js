init();
let app;
let sex;
var buttons;
function init() {
    window.onload = function () {
        app = new PIXI.Application(
            {
                width: 414,
                height: 668,
                backgroundcolor: 0xAAAAAA
            }
        );
        const sound = new Howl({
            src: ['sound/Palin-Around-Paris.mp3'],
            autoplay: true,
            loop: true,
            volume: 0.5
        });
        document.body.appendChild(app.view);
        homecontainer = new PIXI.Container();
        app.stage.addChild(homecontainer);

        let backgroundimg = renderImage(this.background, this.background.src)
        homecontainer.addChild(backgroundimg);

        for (var i = 0; i < 2; i++) {
            let button = renderImage(this.buttonPre[i], this.buttonPre[i].src[0])
            button.myCustomProperty = this.buttonPre[i].src[0];
            button.interactive = true;
            button.on('pointerdown', function (e) { onbuttonfedown(e); }).on("pointerover", function (e) { onbuttonover(e); }).on("pointerout", onbuttonout);
            homecontainer.addChild(button);
        }
    }
}
function onbuttonfedown(bt) {
    if (bt.target.myCustomProperty == this.buttonPre[0].src[1]) { sex = "female"; }
    else if (bt.target.myCustomProperty == this.buttonPre[1].src[1]) { sex = "male"; }
    instructionlayer()
}
function renderImage(imgPreinit, imgsrc) {
    var img = new PIXI.Sprite.from(imgsrc);
    img.height = imgPreinit.height;
    img.width = imgPreinit.width;
    img.x = imgPreinit.x;
    img.y = imgPreinit.y;
    return img;
}
function instructionlayer() {
    intructionimg = renderImage(buttonPre[2], this.buttonPre[2].src);
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
    if (bt.target.myCustomProperty == this.buttonPre[0].src[0]) {
        bt.target._texture = PIXI.Texture.fromImage(this.buttonPre[0].src[1]);
        bt.target.myCustomProperty = this.buttonPre[0].src[1];
    }
    else if (bt.target.myCustomProperty == this.buttonPre[1].src[0]) {
        bt.target._texture = PIXI.Texture.fromImage(this.buttonPre[1].src[1]);
        bt.target.myCustomProperty = this.buttonPre[1].src[1];
    }
}

function onbuttonout() {
    if (this.myCustomProperty == buttonPre[0].src[1]) {
        this.texture = PIXI.Texture.fromImage(buttonPre[0].src[0]);
        this.myCustomProperty = buttonPre[0].src[0];
    }
    else if (this.myCustomProperty == buttonPre[1].src[1]) {
        this.texture = PIXI.Texture.fromImage(buttonPre[1].src[0]);
        this.myCustomProperty = buttonPre[1].src[0];
    }
}