function check(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var checkname = document.getElementById("checkname");
    var checkpass = document.getElementById("checkpass");

    if(username.value != "thanh")
        checkname.innerHTML = "Incorrect Username, try again ?";
    else{
        checkname.innerHTML = "";
        if(password.value != "123")
            checkpass.innerHTML = "Incorrect Password, try again ?";
        else{
            checkpass.innerHTML = "";
            document.location.href="list.html";
        }
    }  
    return false;
}

