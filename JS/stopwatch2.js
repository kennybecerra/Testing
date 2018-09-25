function Stopwatch() {

    this.tracking = false;
    this.timeStart = 0;
    this.timeStop = 0;
    
    //this.duration = 0;
    this.duration = 0;

    this.calcDuration = function() {
        if ((Number.isInteger(this.timeStart) && this.timeStart > 0)  && Number.isInteger(this.timeStop) && this.timeStop > this.timeStart) {
            this.duration += (this.timeStop - this.timeStart)/1000;
        }
        else {
            throw new Error("Something went wrong with obtaining date stamps");
        }
    }

}

Stopwatch.prototype.start = function() {
    if (!this.tracking) {
        this.tracking = !this.tracking;
        this.timeStart  =  Date.now();
    }
    else {
        throw new Error("Cannot call start twice consecutively");
    }
};

Stopwatch.prototype.stop = function() {
    if(this.tracking) {
        this.timeStop = Date.now()
        this.tracking = !this.tracking;
        this.calcDuration();
    }
    else {
        throw new Error("Cannot call stop twice consecutively");
    }
};

Stopwatch.prototype.reset = function() {
    if (this.tracking) {
        this.tracking = !this.tracking;          
    }
    this.timeStart = 0;
    this.timeStop = 0;
    this.duration = 0;
};

const sw = new Stopwatch();
