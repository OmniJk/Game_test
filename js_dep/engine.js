const Engine = function (time_step, update_func, render_func) {
    this.accumulated_time = 0;
    this.anim_frame_request = undefined;
    this.time = undefined;
    this.time_step = time_step;

    this.updated = false;

    this.update = update_func;
    this.render = render_func;

    // Accumulated Prev / Time Stamp / This.Time / Accumlated Post
    this.log_info = [0, 0, 0, 0]

    this.loop = function (time_stamp) {

        // console.log(this.accumulated_time)
        // console.log(time_stamp)
        // console.log(this.time)

        this.accumulated_time += time_stamp - this.time;
        this.time += time_stamp;



        // To prevent memory leaks / CPU fuckery
        if (this.accumulated_time >= this.time_step * 3) {
            this.accumulated_time = this.time_step;
        }
        // If accumulated_time is greater than time_step, subtract amount by time_step
        // and call update function.
        while (this.accumulated_time >= this.time_step) {
            this.accumulated_time -= this.time_step;
            this.update(time_step);
            this.updated = true;
            console.log('k')
        }

        if (this.updated) {
            console.log('y')
            this.updated = false;
            this.render(time_stamp);
        }
        // console.log('Engine Loop')

        this.anim_frame_request = window.requestAnimationFrame(this.handleRun);

    }

    this.handleRun = (time_step) => {
        // console.log('Running Loop')
        this.loop(time_step);
    }
}

Engine.prototype = {
    constructor: Engine,
    start: function () {
        console.log('Starting engine')
        this.accumulated_time = this.time_step;
        this.time = window.performance.now();
        this.anim_frame_request = window.requestAnimationFrame(this.handleRun);
    },
    stop: function () {
        window.cancelAnimationFrame(this.anim_frame_request);
    }
}