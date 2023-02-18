$(".doorframe")
    .one("mouseenter", function () {
        $("#player")[0].play();
        $(".doorL")[0].setAttribute("id", "opened");
        $(".doorR")[0].setAttribute("id", "opened");
    });
