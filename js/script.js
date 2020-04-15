// declaraction of document.ready() function.
(function() {
    var ie = !!(window.attachEvent && !window.opera);
    var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
    var fn = [];
    var run = function() {
        for (var i = 0; i < fn.length; i++) fn[i]();
    };
    var d = document;
    d.ready = function(f) {
        if (!ie && !wk && d.addEventListener)
            return d.addEventListener('DOMContentLoaded', f, false);
        if (fn.push(f) > 1) return;
        if (ie)
            (function() {
                try {
                    d.documentElement.doScroll('left');
                    run();
                } catch (err) {
                    setTimeout(arguments.callee, 0);
                }
            })();
        else if (wk)
            var t = setInterval(function() {
                if (/^(loaded|complete)$/.test(d.readyState)) clearInterval(t), run();
            }, 0);
    };
})();


document.ready(
    function() {
        var _Blog = window._Blog || {};
        const currentTheme =
            window.localStorage && window.localStorage.getItem('theme');
        const isDark = currentTheme === 'dark';

        if (isDark) {
            document.getElementById('mobile-toggle-theme').innerHTML = '<i class="fas fa-toggle-off fa-lg"style="vertical-align: middle;"></i>'
            document.getElementById('desktop-toggle-theme').innerHTML = '<i class="fas fa-toggle-off fa-2x"style="vertical-align: middle;"></i>'
        } else {
            document.getElementById('mobile-toggle-theme').innerHTML = '<i class="fas fa-toggle-off fa-lg"style="vertical-align: middle;"></i>'
            document.getElementById('desktop-toggle-theme').innerHTML = '<i class="fas fa-toggle-off fa-2x"style="vertical-align: middle;"></i>'
        }

        _Blog.toggleTheme = function() {
            if (isDark) {
                document.getElementsByTagName('body')[0].classList.add('dark-theme');
                document.getElementById('mobile-toggle-theme').innerHTML = '<i class="fas fa-toggle-off fa-lg"style="vertical-align: middle;"></i>'
                document.getElementById('desktop-toggle-theme').innerHTML = '<i class="fas fa-toggle-off fa-2x"style="vertical-align: middle;"></i>'
            } else {
                document.getElementsByTagName('body')[0].classList.remove('dark-theme');
                document.getElementById('mobile-toggle-theme').innerHTML = '<i class="fas fa-toggle-on fa-lg"style="vertical-align: middle;"></i>'
                document.getElementById('desktop-toggle-theme').innerHTML = '<i class="fas fa-toggle-on fa-2x"style="vertical-align: middle;"></i>'
            }
            document.getElementById('mobile-toggle-theme').addEventListener('click', () => {
                if (document.getElementsByTagName('body')[0].classList.contains('dark-theme')) {
                    document.getElementsByTagName('body')[0].classList.remove('dark-theme');
                    document.getElementById('mobile-toggle-theme').innerHTML = '<i class="fas fa-toggle-on fa-lg"style="vertical-align: middle;"></i>'
                } else {
                    document.getElementsByTagName('body')[0].classList.add('dark-theme');
                    document.getElementById('mobile-toggle-theme').innerHTML = '<i class="fas fa-toggle-off fa-lg"style="vertical-align: middle;"></i>'
                }
                window.localStorage &&
                    window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light', )
            })
            document.getElementById('desktop-toggle-theme').addEventListener('click', () => {
                if (document.getElementsByTagName('body')[0].classList.contains('dark-theme')) {
                    document.getElementsByTagName('body')[0].classList.remove('dark-theme');
                    document.getElementById('desktop-toggle-theme').innerHTML = '<i class="fas fa-toggle-on fa-2x"style="vertical-align: middle;"></i>'

                } else {
                    document.getElementsByTagName('body')[0].classList.add('dark-theme');
                    document.getElementById('desktop-toggle-theme').innerHTML = '<i class="fas fa-toggle-off fa-2x"style="vertical-align: middle;"></i>'
                }
                window.localStorage &&
                    window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light', )
            })
        };
        _Blog.toggleTheme();
    });