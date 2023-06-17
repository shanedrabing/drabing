opened = function () {
    $("#player")[0].play();
    $(".frameL")[0].setAttribute("id", "opened");
    $(".frameB")[0].setAttribute("id", "opened");
    $(".frameT")[0].setAttribute("id", "opened");
    $(".frameR")[0].setAttribute("id", "opened");
}

$(".frameL").one("click", opened);
$(".frameB").one("click", opened);
$(".frameT").one("click", opened);
$(".frameR").one("click", opened);
