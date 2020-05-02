function Grid(_rows, _cols, _tSize, _spriteSheet) {
    this.rows = _rows;
    this.cols = _cols;
    this.tSize = _tSize;

    this.tileMap = [];

    this.spriteSheet = _spriteSheet;

    this.getTile = function (_c, _r) {
        return this.tileMap[_c * this.rows + _r];
    }

    this.changeTile = function (_c, _r, _val) {
        let index = _c * this.rows + _r;
        this.tileMap[index] = _val;
        console.log(`Set ${_c}/${_r} to value: ${_val}`)
    }

    this.createGrid = function () {
        for (var i = 0; i < this.cols; i++) {
            for (var j = 0; j < this.rows; j++) {
                this.tileMap.push(0)
            }
        }
    }

    this.drawGrid = function (_context) {
        for (var i = 0; i < this.cols; i++) {
            for (var j = 0; j < this.rows; j++) {
                var tileVal = this.getTile(i, j)
                var _x = i * this.tSize;
                var _y = j * this.tSize;
            }
        }
    }
}

function moveTowards(t, p) {
    var dx = Math.atan2(t.x - p.x),
        dy = Math.atan2(t.y - p.y),
        moveX = Math.cos(dx),
        moveY = Math.sin(dy);

    return {
        x: moveX,
        y: moveY
    }
}

function angleD(a, b, _type) {
    var theta = Math.atan2((b.y - a.y) - (b.x - a.x)) * 180 / Math.PI
    return (theta < 0) ? 360 + theta : theta;
}

function distance(p1, p2) {
    var dx = p2.x - p1.x
    var dy = p2.y - p1.y
    return Math.sqrt(dx * dx + dy * dy);
}