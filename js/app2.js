init();

function init() {
    let app;
    let yellow, pink, red, uterus;
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

        yellow = new PIXI.Graphics();
        yellow.beginFill(0xFFFF00);
        yellow.lineStyle(2, 0xFFFF00);
        yellow.drawCircle(sw / 2, sh * 1 / 4, 100);
        app.stage.addChild(yellow);

        pink = new PIXI.Graphics();
        pink.beginFill(0xFFC0CB);
        pink.lineStyle(2, 0xFFC0CB);
        pink.drawCircle(sw / 2, sh * 1 / 4, 80);
        app.stage.addChild(pink);

        red = new PIXI.Graphics();
        red.beginFill(0xFF0000);
        red.lineStyle(2, 0xFF0000);
        red.drawCircle(sw / 2, sh * 1 / 4, 60);
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

        let txt = new PIXI.Text('This is a PixiJS text', { fontFamily: 'Arial', fontSize: 24, fill: 0xffffff, align: 'center' });
        app.stage.addChild(txt);

        app.ticker.add(function (delta) {
            // rotate the container!
            // use delta to create frame-independent tranform
            var k = 1;
            container.angle += k;
            txt.text = container.angle;
        });

    }
}