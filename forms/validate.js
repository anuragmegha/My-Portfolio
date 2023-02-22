

var fname = document.getElementById("name");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var message = document.getElementById("message");




var nameError = document.getElementById("name-err");
var emailError = document.getElementById("email-err");
var subjectError = document.getElementById("subject-err");
var messageError = document.getElementById("message-err");



function validateName(){
    if(!fname.value.match((/^[a-zA-Z]+ [a-zA-Z]+$/))){
        nameError.innerHTML="Please enter a valid Name";
        return false;
    }
    else{
        nameError.innerHTML="";
        return true;
    }
}

function validateEmail(){
    if(!email.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){

        emailError.innerHTML="Please enter a valid Email";
        return false;
    }
    else{
        emailError.innerHTML="";
        return true;
    }
}

function validateSubject(){
    if(subject.value.length>20){
        subjectError.innerHTML="Maximum limit";
        return false;
    }
    else{
        subjectError.innerHTML="";
        return true;
    }
}

function validateMessage(){
    if(message.value.length>50){
        messageError.innerHTML="Maximum limit";
        return false;
    }
     else{
        messageError.innerHTML="";
        return true;
    }
}