var errorInternet = document.querySelector("#error");
var successInternet = document.querySelector("#success");

window.addEventListener("offline", function() {
    successInternet.style.bottom = "-70px";
    errorInternet.style.bottom = "20px"
})

window.addEventListener("online", function() {
    errorInternet.style.bottom = "-70px";
    successInternet.style.bottom = "20px"
    
})

successInternet.addEventListener("click", function() {
    successInternet.style.display = "none";
})

errorInternet.addEventListener("click", function() {
    errorInternet.style.display = "none";
})


