function changeProductList(type, element) {


    document.getElementById(type).style.display = 'block'
    switch (type) {
        case 'red':
            document.getElementById('black').style.display = 'none'
            document.getElementById('blue').style.display = 'none'
            document.getElementById('orange').style.display = 'none'
            document.getElementById('yellow').style.display = 'none'
            break;
        case 'black':
            document.getElementById('red').style.display = 'none'
            document.getElementById('blue').style.display = 'none'
            document.getElementById('orange').style.display = 'none'
            document.getElementById('yellow').style.display = 'none'
            break;
        case 'blue':
            document.getElementById('black').style.display = 'none'
            document.getElementById('red').style.display = 'none'
            document.getElementById('orange').style.display = 'none'
            document.getElementById('yellow').style.display = 'none'
            break;
        case 'yellow':
            document.getElementById('black').style.display = 'none'
            document.getElementById('red').style.display = 'none'
            document.getElementById('orange').style.display = 'none'
            document.getElementById('blue').style.display = 'none'
            document.getElementById('xam').style.display = 'none'
            break;
        case 'orange':
            document.getElementById('black').style.display = 'none'
            document.getElementById('red').style.display = 'none'
            document.getElementById('yellow').style.display = 'none'
            document.getElementById('blue').style.display = 'none'
            document.getElementById('xam').style.display = 'none'
            break;
        case 'xam':
            document.getElementById('black').style.display = 'none'
            document.getElementById('red').style.display = 'none'
            document.getElementById('yellow').style.display = 'none'
            document.getElementById('blue').style.display = 'none'
            document.getElementById('orange').style.display = 'none'
    }
}

function changeColor(type, element) {
    let tabs = document.getElementsByClassName('nav-link')
    console.log(tabs);
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.background = '#Fff'
    }
    element.style.background = '#A9A9A9'
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

function openNavs() {
    document.getElementById("mySidenavs").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNavs() {
    document.getElementById("mySidenavs").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.style.backgroundColor = "white";
}

function openNavss() {
    document.getElementById("mySidenavss").style.width = "100%";
}

function closeNavss() {
    document.getElementById("mySidenavss").style.width = "0";
}
