var view = {

    requireCarName: function() {
        console.log("requireCarName" + this.displayParams(arguments))
    },

    requestGPSAuthrization: function() {
        console.log("requestGPSAuthrization" + this.displayParams(arguments))
    },

    showReady: function() {
        console.log("showReady" + this.displayParams(arguments))
    },
 
    showRunningPanel: function() {
        console.log("showRunningPanel" + this.displayParams(arguments))
    },

    onSpeedChanged: function(xPercent, v ) {
        console.log("onSpeedChanged" + this.displayParams(arguments))
    },

    updateSpeedSummary: function(elapsedSeconds, completePercent,  maxSpeed,  bestSection) {
        console.log("updateSpeedSummary" + this.displayParams(arguments))
    },

    clearLineChart: function() {
        console.log("clearLineChart" + this.displayParams(arguments))
    },

    showResult: function(data) {
        console.log("showResult" + this.displayParams(arguments))
    },

    showError: function(err) {
        console.log("showError" + this.displayParams(arguments))
    },

    dismissError: function() {
        console.log("dismissError" + this.displayParams(arguments))
    },

    displayParams: function() {
        if (arguments[0].length > 0) {
            var s = ": ";
            for (i=0;i<arguments[0].length;i++) {
                s += JSON.stringify(arguments[0][i]) + ", ";
            }
            return s;
        }   
        return "";
    }

};

