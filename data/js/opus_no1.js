function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

$("#player")[0].addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);

$(".spinner")
    .one("click", function () {
        $("#player")[0].play();
        $(".spinner")[0].setAttribute("id", "opened");
        $("body")[0].setAttribute("id", "opened");

        // sleep(1).then(function() {
        //     $(".container a")[0].setAttribute("href", "home.html");
        // });
    });
