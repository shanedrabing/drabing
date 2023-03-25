function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
  
$(".spinner")
    .one("click", function() {
        $("#player")[0].play();
        $(".spinner")[0].setAttribute("id", "opened");
        $("body")[0].setAttribute("id", "opened");

        // sleep(1).then(function() {
        //     $(".container a")[0].setAttribute("href", "home.html");
        // });
    });
