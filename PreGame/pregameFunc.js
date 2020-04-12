//import { SLIDE } from './pregame.js';
//import { Slide } from './pregameStructs.js';
init()
let app1;
function init() {
    window.onload = function () {
        app1 = new PIXI.Application(
            {
                width: 414,
                height: 736,
                backgroundcolor: 0xAAAAAA
            }
        );
        document.body.appendChild(app1.view);

        var pregameview = new preGameView(app1);
        pregameview.onInit();
    }
}
// var currentSlide, app1, slides;

class preGameView {
    constructor(app) {
        this.apps = app;
        this.image;
        this.buttons;
    }
    onInit() {
        this.image = this.setimage(SLIDE[0]);
        this.renderimage(this.image);
        this.image = this.setimage(SLIDE[1]);
        this.renderimage(this.image);
        this.image = this.setslideid(SLIDE[2], slideid[0]);
        this.image = this.setimage(SLIDE[2]);
        this.setbutton(this.image);
        this.renderimage(this.image);
        this.image = this.setimage(SLIDE[3]);
        this.setbutton(this.image);
        this.renderimage(this.image);
        this.image = this.setimage(SLIDE[4]);
        this.setbutton(this.image);
        this.renderimage(this.image);
    }
    setslideid(slide, slideidset) {
        slide["bg"] = slideidset["bg"];
        slide["id"] = slideidset["id"];
    }
    setimage(slide) {
        var texture = PIXI.Texture.from(slide["bg"]);
        var image = new PIXI.Sprite.from(texture);
        image.anchor.set(slide["anchor"]);
        image.myCustomProperty = slide["id"];
        image.x = this.getvalue(slide["shap"]["x"]["name"], slide["shap"]["x"]["value"]);
        image.y = this.getvalue(slide["shap"]["y"]["name"], slide["shap"]["y"]["value"]);
        image.height = this.getvalue(slide["size"]["height"]["name"], slide["size"]["height"]["value"]);
        image.width = this.getvalue(slide["size"]["width"]["name"], slide["size"]["width"]["value"]);
        return image;
    }
    getvalue(name, num) {
        var value = 0;
        if (name == "app.view.height") {
            value = this.apps.view.height / num;
        }
        else if (name == "app.view.width") {
            value = this.apps.view.width / num;
        }
        else { value = num; }
        return value;
    }
    setbutton(slide) {
        slide.buttonMode = true;
        slide.interactive = true;
        slide.buttonMode = true;
        slide.on('pointerdown', function (e) { onbuttonfedown(e); }).on("pointerover", function (e) { onbuttonover(e); }).on("pointerout", function (e) { onbuttonover(e); });

    }
    renderimage(slide) {
        this.apps.stage.addChild(slide);
    }
}


//function
/*this.isdown = true;
this.image = this.setimage(SLIDE[4]);
if (bt.target.myCustomProperty == "") {
    bt.target._texture = texturefe2;
}
else if (bt.target.myCustomProperty == maimage) {
    bt.target._texture = texturema2;
}
window.location.href = "game.html";*/

function onbuttonfedown(bt) {
    var pregameview = new preGameView(app1);
    var image;
    if (bt.target.myCustomProperty == "texturefe") {
        pregameview.setslideid(SLIDE[2], slideid[1]);
        image = pregameview.setimage(SLIDE[2]);
    }
    else if (bt.target.myCustomProperty == "texturema") {
        pregameview.setslideid(SLIDE[3], slideid[3]);
        image = pregameview.setimage(SLIDE[3]);
    }
    else if (bt.target.myCustomProperty == "textureque") {
        pregameview.setslideid(SLIDE[4], slideid[5]);
        image = pregameview.setimage(SLIDE[4]);
    }
    bt.target._texture = image.texture;
}
function onbuttonover(bt) {
    var pregameview = new preGameView(app1);
    var image;
    for (var i = 0; i < slideid.length; i++) {
        for (var j = 0; j < slideid[i].length; j++) {
            if (bt.target.myCustomProperty == slideid[i][j]["id"]) {
                if (j == 0) {
                    pregameview.setslideid(SLIDE[i + 2], slideid[i][j + 1]);
                    image = pregameview.setimage(SLIDE[i + 2]);
                }
                else {
                    pregameview.setslideid(SLIDE[i + 2], slideid[i][j - 1]);
                    image = pregameview.setimage(SLIDE[i + 2]);
                }
            }
        }
    }
    bt.target._texture = image.texture;
    // if (bt.target.myCustomProperty == "texturefe") {

    // }
    // else if (bt.target.myCustomProperty == "texturema") {
    //     pregameview.setslideid(SLIDE[3], slideid[3]);
    //     image = pregameview.setimage(SLIDE[3]);
    // }
    // else if (bt.target.myCustomProperty == "textureque") {
    //     pregameview.setslideid(SLIDE[4], slideid[5]);
    //     image = pregameview.setimage(SLIDE[4]);
    // }
    // bt.target._texture = image.texture;
}