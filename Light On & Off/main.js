var colorInterface = document.querySelector(".color__interface-icon");
var wrapper = document.querySelector("#wrapper");

colorInterface.addEventListener("click", function () {
    if (wrapper.classList.contains("off__light") ) {
        wrapper.classList.remove("off__light");
        wrapper.classList.add("on__light");
        wrapper.classList.add("white-text");
        wrapper.classList.remove("black-text");
    } else {
        wrapper.classList.remove("on__light");
        wrapper.classList.add("off__light");
    }


});




