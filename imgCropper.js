//ES 6
function changeImages_es6() {
    var images = document.querySelector('.cropped img');
    images.forEach(function (img) {
        var marginTop = "-" + (img.height / 2) + "px",
            marginLeft = "-" + (img.width / 2) + "px";
        img.style.marginLeft = marginLeft;
        img.style.marginTop = marginTop;
    });
}


//PURE JS
function changeImages_pureJS() {
    for (i = 0; i < document.images.length; i++) {
        var img = document.images[i];
        var marginTop = "-" + (img.height / 2) + "px",
            marginLeft = "-" + (img.width / 2) + "px";
        img.style.marginLeft = marginLeft;
        img.style.marginTop = marginTop;
    }

}

//JQUERY
function changeImages() {
    $('.cropped img').each(function (img) {
        var marginTop = "-" + (img.height / 2) + "px",
            marginLeft = "-" + (img.width / 2) + "px";
        this.style.marginLeft = marginLeft;
        this.style.marginTop = marginTop;
    });
}