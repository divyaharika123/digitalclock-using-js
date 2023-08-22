var digitalclockdiv = document.getElementById("digitalclockdiv");
var dateid = document.getElementById("dateid");
var dayid = document.getElementById("dayid");
var myinterval = setInterval(() => {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var date = new Date().getDate();
    var day = new Date().getDay();
    var mytime = "AM";

    if (hours == 0) {
        hours = 12;
    }
    else if (hours == 12) {
        mytime = "PM";
    }
    else if (hours > 12) {
        hours = hours - 1;
        mytime = "PM";
    }
    digitalclockdiv.innerHTML = hours + "h: " + minutes + "m: " + seconds + "s " + mytime + " " ;
    dateid.innerHTML="DATE:"+ date;
    dayid.innerHTML="DAY:"+ day;
   


}, 1000);