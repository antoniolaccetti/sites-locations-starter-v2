document.addEventListener("DOMContentLoaded", function (event) {
    var d = new Date(); //vedo che giorno è
    var dy = d.getDay(); // 0 = domenica, 1 = lunedì etc..
    var counter = 1;

    if (dy == 0) {
        let x = $(".day-list-inner")[6];
        $(x).addClass("font-bold")
    } else {
        $(".day-list-inner").each(function () {
            if (counter == dy) {
                $(this).addClass("font-bold");
            }
            counter++;
        })
    }


});