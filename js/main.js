window.addEventListener("load", function() {
    var hour = document.getElementById('hour')
    var min = document.getElementById('min')
    var sec = document.getElementById('sec')

    var clock = function() {
        var time = new Date()
        var h = time.getHours()
        var m = time.getMinutes()
        var s = time.getSeconds()
        // console.log("当前时间 " + h +":" + m + ":" + s);

        hour.style.transform = "rotate(" + (h * 30 + m / 60 * 30 + s / 60 / 60 * 30) + "deg)";
        min.style.transform = "rotate(" + (m * 6 + s / 60 * 6) + "deg)";
        sec.style.transform = "rotate(" + (s * 6) + "deg)";
    }

    clock();
    this.setInterval(clock, 1000);
});