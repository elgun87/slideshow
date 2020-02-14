var images = ["./images/bootstrap.png", "./images/github-logo.jpg", "./images/logo_JavaScript.png"];
var words = ["Hello","Enjoy the SLide Show","Bye-Bye"]
var count = 0;
var showImage;

function displayImage() {

    $('#display').html("<img src=" + images[count] + " width='300px' height='200px'>")
}


function nextImage() {
    count ++;
    setTimeout(displayImage,1000);
    $('#display').html("<img src='./images/loading.gif' width='100px' height='100px'/>");
    if(count === images.length){
        count = 0;
    }
}

function startSlide() {
    clearInterval(showImage);
    showImage = setInterval(function () {
        nextImage();
    }, 3000)
}

function stopSlide() {
    clearInterval(showImage);
}


$('#start').on('click', function () {
    startSlide();
})
$('#stop').on('click', function () {
    stopSlide();
})

