init();

function init() {
    let app;
    let yellow, pink, red, uterus;
    let scorebg, scorebox, star1, star2, star3;
    let emptystar, fullstar;
    let semicircle, arrow, circle, backgroundimg;
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

        let sw = app.view.width, sh = app.view.height;

        let txt = new PIXI.Text("", { fontFamily: 'Arial', fontSize: 24, fill: 0x000000, align: 'center' });
        app.stage.addChild(txt);
        txt = new PIXI.Text("RED=30", { fontFamily: 'Arial', fontSize: 24, fill: 0xFF0000, stroke:'black', strokeThickness:1, align: 'center' });
        txt.y=200;
        app.stage.addChild(txt);
        txt = new PIXI.Text("PINK=20", { fontFamily: 'Arial', fontSize: 24, fill: 0xFFC0CB, stroke:'black', strokeThickness:1, align: 'center' });
        txt.y=225;
        app.stage.addChild(txt);
        txt = new PIXI.Text("YELLOW=10", { fontFamily: 'Arial', fontSize: 24, fill: 0xFFFF00, stroke:'black', strokeThickness:1, align: 'center'});
        txt.y=255;
        app.stage.addChild(txt);

        scorebg = new this.PIXI.Graphics();
        scorebg.beginFill(0xFFFFFF);
        scorebg.lineStyle(2, 0xFFFFFF);
        scorebg.drawRect(sw/20,sh/20,sw*18/20,30);
        app.stage.addChild(scorebg);

        scorebox = new this.PIXI.Graphics();
        scorebox.beginFill(0xffc107);
        scorebox.lineStyle(2, 0xFFFF00);
        scorebox.drawRect(sw/20+10,sh/20+5,0.5,20);
        app.stage.addChild(scorebox);

        emptystar = new this.PIXI.Texture.fromImage("images/emptystar.png");
        fullstar = new this.PIXI.Texture.fromImage("images/star.png");

        star1 = new PIXI.Sprite(emptystar);
        star1.anchor.set(0.5, 0.5);
        star1.x = sw / 3;
        star1.y = sh * 1 / 20 + (sh/20/3);
        star1.height = 50;
        star1.width = star1.height;
        app.stage.addChild(star1);

        star2 = new PIXI.Sprite(emptystar);
        star2.anchor.set(0.5);
        star2.x = sw *2/ 3;
        star2.y = sh * 1 / 20 + (sh/20/3);
        star2.height = 50;
        star2.width = star1.height;
        app.stage.addChild(star2);

        star3 = new PIXI.Sprite(emptystar);
        star3.anchor.set(0.5);
        star3.x =sw*18/20;
        star3.y = sh * 1 / 20 + (sh/20/3);
        star3.height = 50;
        star3.width = star1.height;
        app.stage.addChild(star3);

        yellow = new PIXI.Graphics();
        yellow.beginFill(0xFFFF00);
        yellow.lineStyle(2, 0xFFFF00);
        yellow.drawCircle(sw / 2, sh * 1 / 4, 100);
        yellow.interactive=true;
        yellow.click= function(){
            let width=scorebox.width;
            if(width<sw*7/8){
                scorebox.clear();
                scorebox.beginFill(0xffc107);
                scorebox.lineStyle(2, 0xFFFF00);
                width+=10;
                if(width>sw*7/8){
                 width =sw*7/8;
                }
                scorebox.drawRect(sw/20+10,sh/20+5,width,20);
                if(scorebox.width>=star1.x) {
                    star1.texture=fullstar;
                }
                if(scorebox.width>=star2.x) {
                    star2.texture=fullstar;
                }
            }
            else {
                star3.texture=fullstar;
            }
        }; 
        app.stage.addChild(yellow);

        pink = new PIXI.Graphics();
        pink.beginFill(0xFFC0CB);
        pink.lineStyle(2, 0xFFC0CB);
        pink.drawCircle(sw / 2, sh * 1 / 4, 80);
        pink.interactive=true;
        pink.click= function(){
            let width=scorebox.width;
            if(width<sw*7/8){
                scorebox.clear();
                scorebox.beginFill(0xffc107);
                scorebox.lineStyle(2, 0xFFFF00);
                width+=20;
                if(width>sw*7/8){
                 width =sw*7/8;
                }
                scorebox.drawRect(sw/20+10,sh/20+5,width,20);
                if(scorebox.width>=star1.x) {
                    star1.texture=fullstar;
                }
                if(scorebox.width>=star2.x) {
                    star2.texture=fullstar;
                }
            }
            else {
                star3.texture=fullstar;
            }
        }; 
        app.stage.addChild(pink);

        red = new PIXI.Graphics();
        red.beginFill(0xFF0000);
        red.lineStyle(2, 0xFF0000);
        red.drawCircle(sw / 2, sh * 1 / 4, 60);
        red.interactive=true;
        red.click= function(){
            let width=scorebox.width;
            if(width<sw*7/8){
                scorebox.clear();
                scorebox.beginFill(0xffc107);
                scorebox.lineStyle(2, 0xFFFF00);
                width+=30;
                if(width>sw*7/8){
                 width =sw*7/8;
                }
                scorebox.drawRect(sw/20+10,sh/20+5,width,20);
                if(scorebox.width>=star1.x) {
                    star1.texture=fullstar;
                }
                if(scorebox.width>=star2.x) {
                    star2.texture=fullstar;
                }
            }
            else {
                star3.texture=fullstar;
            }
        }; 
        app.stage.addChild(red);

        uterus = new PIXI.Sprite.from("images/uterus.png");
        uterus.anchor.set(0.5);
        uterus.x = sw / 2;
        uterus.y = sh * 1 / 4;
        uterus.height = 100;
        uterus.width = uterus.height;
        app.stage.addChild(uterus);

       
        semicircle = new this.PIXI.Graphics();
        semicircle.beginFill(0x00FF00);
        semicircle.lineStyle(2, 0x00FF00);
        semicircle.arc(0, 0, 100, Math.PI, 0); // cx, cy, radius, startAngle, endAngle
        semicircle.position = { x: sw / 2, y: sh * 7 / 8 };
        app.stage.addChild(semicircle);

        circle = new this.PIXI.Graphics();
        circle.beginFill(0xFF0000);
        circle.lineStyle(2, 0xFF0000);
        circle.drawCircle(sw / 2, sh * 13 / 16, 20);
        app.stage.addChild(circle);

        var container = new PIXI.Container();
        app.stage.addChild(container);

        container.x = sw / 2;
        container.y = sh * 13 / 16;
        container.pivot.x = container.width / 2;
        container.pivot.y = container.height / 2;

        var points = [new PIXI.Point(0, -15), new PIXI.Point(0, 15), new PIXI.Point(-150, 0)];
        arrow = new this.PIXI.Graphics();
        arrow.beginFill(0xFF0000);
        arrow.lineStyle(2, 0xFF0000);
        arrow.drawPolygon(new PIXI.Polygon(points));
        container.addChild(arrow);
        container.angle = 0;

       

        app.ticker.add(function (delta) {
            // rotate the container!
            // use delta to create frame-independent tranform
            var k = 1;
            container.angle += k;
            //txt.text = container.angle;
        });
    }
}