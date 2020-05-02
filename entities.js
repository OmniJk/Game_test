 function Tower(_x, _y) {
     this.x = _x;
     this.y = _y;
     this.w = 20;
     this.h = 20
     this.target = points[0] || undefined

     this.shootTick = 60;
     this.sTick = 0;

     this.ang = 0;

     this.update = function () {
         if (this.target) {
             this.ang = angleD(this.target, this)
             if (this.sTick >= this.shootTick) {
                 this.target = points[0];
                 this.ang = angleD(this.target, this)

                 bullets.push(new Bullet(this.x, this.y, this.target))
                 this.sTick = 0;
                 console.log('shooting at angle', this.ang)
             }
         }
         this.sTick++;
     }
 }

 var bullets = [];

 function Bullet(_x, _y, _target) {
     this.x = _x;
     this.y = _y;
     this.w = 5;
     this.h = 5;

     this.update = function () {
         this.angle = angleD(_target, this)
         this.x += Math.cos(this.angle)
         this.y += Math.sin(this.angle)
         ctx.fillText(this.angle, this.x, this.y)
     }
 }

 function Enemy(_x, _y) {
     this.x = _x;
     this.y = _y;
     this.w = 5;
     this.h = 5;

     this.move = function (_point) {

         var movePos = moveTowards(this, _point)
         this.x += movePos.x
         this.y += movePos.y

     }
 }