(function () {
    var task = '12-01';
    console.log(task);

    var $taskWrap = $('#task_' + task);
    var $nav = $taskWrap.find('nav');
    var $hamburger = $taskWrap.find('#hamburger');

    var isClicked = false;
    $hamburger.on('click', function () {
        if (isClicked) {
            $nav.css({
                'left': '-200px'
            });
            isClicked = false;
        } else {
            $nav.css({
                'left': '0'
            });
            isClicked = true;
        }
    });

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
                'top': navTop + 'px',
                'bottom': '50px'
            });
        }
    });

})();