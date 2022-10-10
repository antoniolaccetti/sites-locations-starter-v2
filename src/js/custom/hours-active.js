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

    function getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        }
        else
        {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
            end = dc.length;
            }
        }
        // because unescape has been deprecated, replaced with decodeURI
        //return unescape(dc.substring(begin + prefix.length, end));
        return decodeURI(dc.substring(begin + prefix.length, end));
    } 
    
    var myCookie = getCookie("_hjFirstSeen");
    
    if (myCookie == null) {
        // do cookie doesn't exist stuff;
    }
    else {
        (function(w,d,y){
            w['YextAnalyticsObject']=y;
            w[y]=w[y]||function(){
            (w[y].q=w[y].q||[]).push(arguments)
            };
            w[y]('create', '3688791', '31913', isStaging());
        })(window, document, 'ya');
        {{#if uid}}
            ya('set', { id: '{{uid}}' })
        {{/if}}
        ya('pageview');
    }  
    


});

