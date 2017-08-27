(function () {
    var task = '01-02';
    console.log(task);
    var target = $('#task_' + task).find('.square:last-child');
    var originStyle = {
        w: target.width(),
        h: target.height()
    };
    var changeStyle = {
        w: 400,
        h: 400
    };
    target.on('mouseover', function (e) {
        e.stopPropagation();
        $(e.target).css({
            'width': changeStyle.w + 'px',
            'height': changeStyle.h + 'px',
            'line-height': changeStyle.h + 'px'
        });
    }).on('mouseout', function (e) {
        e.stopPropagation();
        $(e.target).css({
            'width': originStyle.w + 'px',
            'height': originStyle.h + 'px',
            'line-height': originStyle.h + 'px'
        });
    });
})();