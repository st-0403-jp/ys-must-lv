(function () {
    var task = '11-01';
    console.log(task);

    var $taskWrap = $('#task_' + task);
    var $nav = $taskWrap.find('nav');

    var windowTop = 0;
    var navTop = $nav.offset().top;
    $(window).on('scroll', function (e) {
        windowTop = $(e.target).scrollTop();
        if (navTop < windowTop) {
            $nav.css({
                'position': 'fixed',
                'top': '0',
                'bottom': 'auto'
            });
        } else {
            $nav.css({
                'position': 'absolute',
                'top': 'auto',
                'bottom': '50px'
            });
        }
    });

})();