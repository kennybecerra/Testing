
/*
var Now = new Date();
var Now2 = Date();
var Now3 = Date.now();

console.log(Now);
console.log(Now2);
console.log(Now3);
*/

function Stopwatch() {

    let tracking = false;
    let timeStart = 0;
    let timeStop = 0;
    
    //this.duration = 0;
    let duration = 0;

    this.start = function() {
        if (!tracking) {
            tracking = !tracking;
            timeStart  =  Date.now();
        }
        else {
            throw new Error("Cannot call start twice consecutively");
        }
        //tracking ? throw new Error() : Start = Date.now();
    };

    this.stop = function() {
        if(tracking) {
            timeStop = Date.now()
            tracking = !tracking;
            calcDuration();
        }
        else {
            throw new Error("Cannot call stop twice consecutively");
        }
    };

    this.reset = function() {
        if (tracking) {
            tracking = !tracking;          
        }
        timeStart = 0;
        timeStop = 0;
        duration = 0;
    }

    function calcDuration() {
        if ((Number.isInteger(timeStart) && timeStart > 0)  && Number.isInteger(timeStop) && timeStop > timeStart) {
            duration += (timeStop - timeStart)/1000;
        }
        else {
            throw new Error("Something went wrong with obtaining date stamps");
        }
    }

    Object.defineProperty(this, "duration", {
        get: function() {
            return duration;
        },
        set: function() {
            throw new Error("Cannot modify duration");
        }
    });
}

const sw = new Stopwatch();