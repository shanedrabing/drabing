function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
  
$(".doorframe")
    .one("click", function() {
        $("#player")[0].play();
        $(".doorL")[0].setAttribute("id", "opened");
        $(".doorR")[0].setAttribute("id", "opened");
        $(".doorframe")[0].setAttribute("id", "opened");
        $("body")[0].setAttribute("id", "opened");

        sleep(1).then(function() {
            $(".container a")[0].setAttribute("href", "home.html");
        });
    });
