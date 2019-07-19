var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");

function displayTime(){
    document.getElementById("clock").innerHTML = checkTime(queries[2])+ ":" + checkTime(queries[1])  + ":" + checkTime(queries[0]);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    };  
    return i;
} 