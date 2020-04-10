init()
function init() {
    window.onload = function () {
        app = new PIXI.Application(
            {
                width: 414,
                height: 736,
                backgroundcolor: 0xAAAAAA
            }
        );
        document.body.appendChild(app.view);
    }
}
