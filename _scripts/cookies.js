/**
 * cookies.js
 *
 * Handle cookie acceptance.
 */
( function() {
    var cookie_name        = '{{SITE_SHORTNAME}}-accepted-cookies';
    var cookie_notice_id   = 'cookie_notice';
    var cookie_button_id   = 'accept_cookies';
    var cookie_expire_days = 60;
    var cookie_html        = 
    '<div id="' + cookie_notice_id + '" class="cookie_notice">' + "\n" +
    '<p>This site uses <a href="http://www.allaboutcookies.org/" rel="external" target="_blank">cookies</a> to improve user experience. By using this site you agree to our use of cookies.</p>' + "\n" +
    '<span><button id="' + cookie_button_id + '" class="btn">Dismiss</button></span>' + "\n" +
    '</div>';


    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else {
            var expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name, "", -1);
    }


    var accepted_cookies = readCookie(cookie_name);
    if (!accepted_cookies) {
        var body_el = document.getElementsByTagName('body')[0];
        body_el.insertAdjacentHTML('afterbegin', cookie_html);
        
        document.getElementById(cookie_button_id).onclick = function(){
            createCookie(cookie_name, 'true', cookie_expire_days);
            document.getElementById(cookie_notice_id).className += "  cookie_notice--close";
            // Without CSS the notice won't disappear, so wait until fade has finished then remove:
            setTimeout(function(){
                var c = document.getElementById(cookie_notice_id);
                c.parentNode.removeChild(c);
            }, 1000);
        };
    }
})();
