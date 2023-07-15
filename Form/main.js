var showPass = document.querySelector(".hidden__password");
console.log(showPass);
var hiddenPass = document.querySelector(".show__password");
console.log(hiddenPass);
var checkType = document.querySelector(".check__type");
console.log(checkType);
var checkFormValidate = document.querySelector("#check__form");
console.log(checkFormValidate);
var noti = document.querySelector(".notification__error");
console.log(noti );

showPass.addEventListener("click", function () {
    hiddenPass.classList.add("hidden__password");
    hiddenPass.classList.remove("show__password");
    showPass.classList.add("show__password");
    if (checkType.type = "password") {
        checkType.type = "text";
    }

})

hiddenPass.addEventListener("click", function () {
    showPass.classList.add("hidden__password");
    hiddenPass.classList.add("show__password");
    showPass.classList.remove("show__password");
    if (checkType.type = "text") {
        checkType.type = "password";

    }
})

var checkPassNumber = /\d/;
var checkPassCapitalize = /[A-Z]/;

function checkForm() {
    if (checkFormValidate.value == "") {
        checkType.style.border = "1px solid #ccc";
        return false;
    }

    else if (checkFormValidate.value.length >= 1 && checkFormValidate.value.length <= 5) {
        checkType.style.border = "1px solid red";
        noti.innerHTML = `Mật khẩu phải lớn hơn năm kí tự!`
        return false;
    }

    else if (!checkPassNumber.test(checkFormValidate.value)) {
        noti.innerHTML = `Mật khẩu phải có một số!`
        return false;
    }

    else if (!checkPassCapitalize.test(checkFormValidate.value)) {
        noti.innerHTML = `Mật khẩu phải có một kí tự!`
        return false;
    }

    else {
        checkType.style.border = "1px solid green";
        noti.style.display = "none";
    }

    return true;
}


