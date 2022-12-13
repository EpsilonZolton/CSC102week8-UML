function checkCreds(){
    var fstName = document.getElementById("fName").value;
    var lstName = document.getElementById("lName").value;
    var badgeNumber = document.getElementById("badgeId").value;
    var fullName = fstName + " " + lstName;
    console.log("the full name is " + fullName);
    console.log("the badge number is " + badgeNumber);
    var fullLength = fullName.length;
    console.log("the name length is " + fullLength);


    if(fullLength > 20 || fullLength < 3){
        document.getElementById("loginStatus").innerHTML = "Invalid name entry. Try again";

    }else if(badgeNumber > 999 || badgeNumber < 1){
        document.getElementById("loginStatus").innerHTML = "Invalid badge number. Try again";
    }else{
        alert("Access granted, Welcome to UAT Space " + fullName)
        location.replace("./UATSpace.html");
    }
}