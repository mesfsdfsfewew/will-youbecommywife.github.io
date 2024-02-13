function No() {
    let voprosDiv = document.getElementById("vopros");
    let scrimerDiv = document.getElementById("scrimer");
    let body = document.body; // Исправлено

    body.style.backgroundImage = "url('скример.jpg')";
    
    let audio = new Audio('gdfgdgf.mp3');
    audio.play();

    let voprosDisplay = window.getComputedStyle(voprosDiv, null).getPropertyValue("display");

    if (voprosDisplay === "block") {
        voprosDiv.style.display = "none";
        scrimerDiv.style.display = "block";
    } else {
        voprosDiv.style.display = "block";
        scrimerDiv.style.display = "none";
    }
}

function Xz(){
    let voprosDiv = document.getElementById("vopros");
    let xzDiv = document.getElementById("xz");

    let voprosDisplay = window.getComputedStyle(voprosDiv, null).getPropertyValue("display");

    if (voprosDisplay === "block") {
        voprosDiv.style.display = "none";
        xzDiv.style.display = "block";
    } else {
        voprosDiv.style.display = "block";
        xzDiv.style.display = "none";
    }
}

function Yes(){
    let voprosDiv = document.getElementById("vopros");
    let daDiv = document.getElementById("da");

    let voprosDisplay = window.getComputedStyle(voprosDiv, null).getPropertyValue("display");

    if (voprosDisplay === "block") {
        voprosDiv.style.display = "none";
        daDiv.style.display = "block";
    } else {
        voprosDiv.style.display = "block";
        daDiv.style.display = "none";
    }
}