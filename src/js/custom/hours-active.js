$(document).ready(function() {
    var d = new Date(); //vedo che giorno �
    var dy = d.getDay(); // 0 = domenica, 1 = luned� etc..
    var counter = 1;

    if (dy == 0) {
        let x = $(".day-list-inner")[6];
        $(x).addClass("giorno_attivo")
    } else {
        $(".day-list-inner").each(function () {
            if (counter == dy) {
                $(this).addClass("giorno_attivo");
            }
            counter++;
        })
    }
});
