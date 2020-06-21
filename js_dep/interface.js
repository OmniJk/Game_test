function rectCollision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y) {
        return true;
    } else {
        return false;
    }
}


function HIcan(w, h, _scale) {
    var can = document.createElement('canvas')

    _scale = (!_scale) || window.devicePixelRatio / (can.getContext('2d').backingStorePixelRatio || 1);
    can.width = w * _scale;
    can.height = h * _scale;
    can.style.width = w + "px";
    can.style.height = h + "px";
    can.getContext("2d").scale(_scale, _scale);

    document.body.appendChild(can);

    return can;
}


// var PIXEL_RATIO = (function () {
//     var ctx = document.createElement("canvas").getContext("2d"),
//         dpr = window.devicePixelRatio || 1,
//         bsr = ctx.webkitBackingStorePixelRatio ||
//         ctx.mozBackingStorePixelRatio ||
//         ctx.msBackingStorePixelRatio ||
//         ctx.oBackingStorePixelRatio ||
//         ctx.backingStorePixelRatio || 1;


//     console.log(dpr / bsr)
//     return dpr / bsr;
// })();


// createHiDPICanvas = function (w, h, ratio) {
//     if (!ratio) {
//         ratio = PIXEL_RATIO;
//     }
//     var can = document.createElement("canvas");
//     can.width = w * ratio;
//     can.height = h * ratio;
//     can.style.width = w + "px";
//     can.style.height = h + "px";
//     can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
//     return can;
// }