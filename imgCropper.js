$(document).ready(function() {
	changeImages();
});

function changeImages_pureJS() {
	for(i=0; i<document.images.length; i++) {
		var img = document.images[i];
		var h = img.height, w = img.width;
		var marginTop ="-"+(h/2)+"px",  marginLeft = "-"+(w/2)+"px";
		img.style.marginLeft = marginLeft;
	  img.style.marginTop = marginTop;
	}

}
function changeImages() {
	$('.cropped img').each(function() {
    var h = $(this).height, w = $(this).width;
    var marginTop ="-"+(h/2)+"px",  marginLeft = "-"+(w/2)+"px";
    this.style.marginLeft = marginLeft;
    this.style.marginTop = marginTop;
	});
}
