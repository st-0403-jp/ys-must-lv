(function () {
    var task = '03-01';
    console.log(task);
    var slidegalleryWrap = $('#task_' + task).find('.slidegallery');
    var slidegalleryList = slidegalleryWrap.children('span');
    var slideMargin = 0;
    var slideRange = -800;
    var maxCount = slidegalleryList.length;
    var count = 0;
    setInterval(function () {
        slidegalleryWrap.animate({
            'margin-left': slideMargin + 'px'
        }, 'fast', 'swing');
        slideMargin = slideMargin + slideRange;
        count++;
        if (count === maxCount) {
            count = 0;
            slideMargin = 0;
        }
    }, 3500);
})();
