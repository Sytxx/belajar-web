function saklar() {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggle4 = document.getElementById("default-toggle4");
    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");
    let toggle7 = document.getElementById("default-toggle7");
    let toggle8 = document.getElementById("default-toggle8");
    let toggle9 = document.getElementById("default-toggle9");
    let toggle10 = document.getElementById("default-toggle10");

    let lampuruangtamu1 = document.getElementById("lampu1");
    let lampuruangtamu2 = document.getElementById("lampu2");
    let lampuruangtamu3 = document.getElementById("lampu3");
    let lampuruangtamu4 = document.getElementById("lampu4");

    let lampuruangkeluarga1 = document.getElementById("lampu5");
    let lampuruangkeluarga2 = document.getElementById("lampu6");

    let lampuruangmakan1 = document.getElementById("lampu7");
    let lampuruangmakan2 = document.getElementById("lampu8");

    let lampuruangtidur1 = document.getElementById("lampu9");
    let lampuruangtidur2 = document.getElementById("lampu10");

    if (toggle1.checked) {
        lampuruangtamu1.src = "assets/images/on.gif";
    } else {
        lampuruangtamu1.src = "assets/images/off.gif"
    }

    if (toggle2.checked) {
        lampuruangtamu2.src = "assets/images/on.gif";
    } else {
        lampuruangtamu2.src = "assets/images/off.gif"
    }

    if (toggle3.checked) {
        lampuruangtamu3.src = "assets/images/on.gif";
    } else {
        lampuruangtamu3.src = "assets/images/off.gif"
    }

    if (toggle4.checked) {
        lampuruangtamu4.src = "assets/images/on.gif";
    } else {
        lampuruangtamu4.src = "assets/images/off.gif"
    }

    if (toggle5.checked) {
        lampuruangkeluarga1.src = "assets/images/on.gif";
    } else {
        lampuruangkeluarga1.src = "assets/images/off.gif"
    }

    if (toggle6.checked) {
        lampuruangkeluarga2.src = "assets/images/on.gif";
    } else {
        lampuruangkeluarga2.src = "assets/images/off.gif"
    }

    if (toggle7.checked) {
        lampuruangmakan1.src = "assets/images/on.gif";
    } else {
        lampuruangmakan1.src = "assets/images/off.gif"
    }

    if (toggle8.checked) {
        lampuruangmakan2.src = "assets/images/on.gif";
    } else {
        lampuruangmakan2.src = "assets/images/off.gif"
    }

    if (toggle9.checked) {
        lampuruangtidur1.src = "assets/images/on.gif";
    } else {
        lampuruangtidur1.src = "assets/images/off.gif"
    }

    if (toggle10.checked) {
        lampuruangtidur2.src = "assets/images/on.gif";
    } else {
        lampuruangtidur2.src = "assets/images/off.gif"
    }

}