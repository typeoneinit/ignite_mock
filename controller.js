var controller = {  
    view: null,
    step: 0,
    MAX_STEPS: 7,
    interval: 100,
    timer: null,

    init: function(view) {
        this.view = view
        this.timer = setInterval(this.stepHandler.bind(this), this.interval)
    },

    stepHandler: function() {
        this.step += 1
        switch(true) {
            case this.step == 0:
                console.log("reset")
                break;
            case this.step == 10:
                view.requireCarName()
                break; 
            case this.step == 20:
                view.requestGPSAuthrization()
                break;
            case this.step == 30:
                view.showReady({rawInput: "abc", analyzedSerial:"def"} , true)
                break;
            case this.step == 40:
                view.showRunningPanel()
                break;
            case this.step >= 50 && this.step <60:
                var f = (this.step - 50) / 10.0
                view.onSpeedChanged(f, (80 * (1.13+f)).toFixed(2))
                view.updateSpeedSummary(f + "s", (50 * (1 + f))  + "%", (80 * (1.13+f)).toFixed(2) , "88-95")
                break;
            case this.step == 60:   
                view.clearLineChart()
                break;
            case this.step >= 70 && this.step < 80:
                var f = (this.step - 70) / 10.0
                view.onSpeedChanged(f, (80 * (1.13+f)).toFixed(2))
                view.updateSpeedSummary(f + "s", (50 * (1 + f))  + "%", (80 * (1.13+f)).toFixed(2) , "88-95")
                break;
            case this.step == 90:
                var r = {
                    elapsedTime: "3.2",  //完成時間
                    bestAcc: "88-99",  //最佳加速區間
                    straghtRoutePercentage: "", //直線百分比
                    bestAccSection: "88-99", //最佳加速區間
                    yMin: 0, 
                    yMax: 100,
                    timePR: 88,  //長條圖第1欄
                    accPR: 77,  //長條圖第2欄
                    straightRoutePR: 66,  //長條圖第3欄
                    bestAccSectionPR: 99  //長條圖第4欄
                  }

                view.showResult(r)
                break;
        }
    }
}