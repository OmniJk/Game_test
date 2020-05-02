const Display = function (_canvas) {

    this.buffer = document.createElement("canvas").getContext('2d')
    this.context = _canvas.getContext('2d')

    this.resize = function (evt) {

    }

    this.render = function () {
        this.context.drawImage(this.buffer, 0, 0)
    }

    this.fill = function (_color) {
        this.context.fillStyle = _color;
        this.context.fillRect(0, 0, _canvas.width, _canvas.height)
    }

    this.drawFPS = function () {
        var current = Date.now();
        frameC++

        if (current - elapsed >= 100) {
            console.log('ok')
            avgFPS = frameC / (current - start)
            elapsed = current
        }

        this.context.fillStyle = 'white  '
        this.context.font = '16px Impact'
        this.context.fillText(parseInt(avgFPS * 1000), 5, 20)
        this.context.strokeStyle = 'black'
        this.context.strokeText(parseInt(avgFPS * 1000), 5, 20);
    }

}