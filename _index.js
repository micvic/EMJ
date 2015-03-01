var lFace = [1, 2, 3, 4];
var rFace = [3, 4, 1, 2];
var fi = 0;


$(document).ready(function () {
    var lVal = 1;
    var rVal = 1;

    var scrollPos;
    var changed = 1;

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700 && changed != 2) {
            changed = 2;
            changeFaces();
        }

        if ($(this).scrollTop() < 700 && changed == 2) {
            changed = 1;
            changeFaces();
        }
    });

    $("#dynamicWords").mousedown(function () {
        changeFaces();
    });
});


function changeFaces() {
    fi++;
    if (fi > 3) { fi -= 4;}
    $("#lFace1").css({ "opacity": "0.0" });
    $("#lFace2").css({ "opacity": "0.0" });
    $("#lFace3").css({ "opacity": "0.0" });
    $("#lFace4").css({ "opacity": "0.0" });
    $("#rFace1").css({ "opacity": "0.0" });
    $("#rFace2").css({ "opacity": "0.0" });
    $("#rFace3").css({ "opacity": "0.0" });
    $("#rFace4").css({ "opacity": "0.0" });

    //lVal = Math.floor(Math.random() * 3) + 1;
    rVal = Math.floor(Math.random() * 3) + 1;
    lVal = lFace[fi];
    rVal = rFace[fi];

    $("#lFace" + lVal).css({ "opacity": "1.0" });
    $("#rFace" + rVal).css({ "opacity": "1.0" });
}