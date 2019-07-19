var hour=0;
var min=0;
var sec=0;
var queryString; 

function startTime(){
    window.setInterval(run, 1000);
}

function run() {
    document.getElementById("clock").innerHTML = checkTime(hour) + ":" + checkTime(min) + ":" + checkTime(sec);

    sec++;
    if (sec == 60){
        sec = 0; 
        min++; 
    }
    else { 
        min = min; 
    }
    if (min == 60){
        min = 0; 
        hour++; 
    }
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    };  
    return i;
}    

function toResult(){
    queryString = "?" + sec + "&" + min + "&" + hour;
    document.location.href = "result.html" + queryString;
    window.clearInterval(run);
}



  