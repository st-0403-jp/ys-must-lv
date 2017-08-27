(function () {
    var task = '01-03';
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
        $(e.target).animate({
            'width': changeStyle.w + 'px',
            'height': changeStyle.h + 'px',
            'line-height': changeStyle.h + 'px'
        }, 1000, 'swing', function () { this.innerText = 'アニメーション完了'; });
    }).on('mouseout', function (e) {
        e.stopPropagation();
        $(e.target).animate({
            'width': originStyle.w + 'px',
            'height': originStyle.h + 'px',
            'line-height': originStyle.h + 'px'
        }, 1000, 'swing', function () { this.innerText = 'JavaScript版'; });
    });
})();