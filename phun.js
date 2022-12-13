function arrayTest1(){
    var myClasses = ["CSC101", "DBM100", "ENG101", "MAT174"];
    //console.log(myClasses[1]);
    console.log(myClasses.length);
    for(var i = 0; i < myClasses.length; i++){
        console.log(myClasses[i]);
    }

}

function stackPhun(){
    let myStack= [];
    myStack.push("first item");
    myStack.push("second item");
    myStack.push("third item");
    console.log(myStack);
    for(var i = 0; i < myStack.length; i++){
        console.log(myStack[i]);
    }
    myStack.pop();
    console.log(myStack);
}