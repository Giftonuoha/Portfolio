function digitalClock(){
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var seconds = time.getSeconds();
    var section = "AM";

    //Twelve Hours Display Code

    if(hour==0){
        hour = 12
    };

    if(hour>12){
        hour = hour - 12
        section = "PM"
    };

    //Display Two Decimal Places Each

    hour = (hour<10)? "0" + hour : hour;
    minute = (minute<10)? "0" + minute : minute;
    seconds = (seconds<10)? "0" + seconds : seconds;

    document.getElementById("DigitalClock").innerHTML = hour + ":" + minute + ":" + seconds + " " + section;

    setTimeout(digitalClock,1000);

}
digitalClock();