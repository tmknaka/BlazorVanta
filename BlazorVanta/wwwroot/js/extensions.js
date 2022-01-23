window.blazorExtensions = {
    Set: function()
    {
        VANTA.BIRDS({
            el: "#your-element-selector",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00
        });
    },

    Clock: function()
    {
        t = 0;
        var elem = document.getElementById("myid");

        //function myfunc() {
        //    var date = new Date();
        //    var hours = date.getHours();
        //    var minutes = date.getMinutes();
        //    var seconds = date.getSeconds();
        //    elem.innerHTML = hours + "時" + minutes + "分" + seconds + "秒";
        //}

        //t = setInterval("myfunc()", 500);
    }
}