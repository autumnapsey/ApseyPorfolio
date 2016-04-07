function navFunction() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function shoutFunction() {
    var shout, text;
    var shout = document.getElementById("shout").value;
    text = shout.toUpperCase + "!!!";
    document.getElementById("shouted").innerHTML = text;
}

function upperMe() { 
    document.getElementById("output").value = document.getElementById("input").value.toUpperCase(); 