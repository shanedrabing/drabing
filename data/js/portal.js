function sleep(s) {
    return new Promise((resolve) => setTimeout(resolve, 1000 * s));
}

opened = function () {
    $("#player")[0].play();
    $(".frameL")[0].setAttribute("id", "opened");
    $(".frameB")[0].setAttribute("id", "opened");
    $(".frameT")[0].setAttribute("id", "opened");
    $(".frameR")[0].setAttribute("id", "opened");

    sleep(14).then(function () {
        $(".frameL")[0].remove();
        $(".frameB")[0].remove();
        $(".frameT")[0].remove();
        $(".frameR")[0].remove();
    });
}

$(".frameL").one("click", opened);
$(".frameB").one("click", opened);
$(".frameT").one("click", opened);
$(".frameR").one("click", opened);
