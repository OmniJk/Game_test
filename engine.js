const Engine = function (time_step, update_func, render_func) {
    this.accumulated_time = 0;
    this.anim_frame_request = undefined;
    this.time = undefined;
    this.time_step = time_step;

    this.updated = false;

    this.update = update_func;
    this.render = render_func;

    this.loop = function (time_stamp) {

        this.accumulated_time += time_stamp - this.time;
        this.time += time_stamp;

        // To prevent memory leaks / CPU fuckery
        if (this.accumulated_time >= this.time_step * 2) {
            this.accumulated_time = this.time_step;
        }
        // If accumulated_time is greater than time_step, subtract amount by time_step
        // and call update function.
        while (this.accumulated_time >= this.time_step) {
            this.accumulated_time -= this.time_step;
            this.update(time_step);
            this.updated = true;
        }

        if (this.updated) {
            this.updated = false;
            this.render(time_stamp);
        }

        this.anim_frame_request = window.requestAnimationFrame(this.handleRun);

    }

    this.handleRun = (time_step) => {
        this.loop(time_step);
    }
}

Engine.prototype = {
    constructor: Engine,
    start: function () {
        this.accumulate_time = this.time_step;
        this.time = window.performance.now();
        this.anim_frame_request = window.requestAnimationFrame(this.handleRun);
    },
    stop: function () {
        window.cancelAnimationFrame(this.anim_frame_request);
    }
}