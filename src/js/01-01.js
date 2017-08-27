(function () {
    var task = '01-01';
    console.log(task);
    var target = $('#task_' + task).find('.square:last-child');
    var originStyle = target.css('background-color');
    var changeStyle = 'red';
    target.on('mouseover', function (e) {
        e.stopPropagation();
        e.target.style.backgroundColor = changeStyle;
    }).on('mouseout', function (e) {
        e.stopPropagation();
        e.target.style.backgroundColor = originStyle;
    });
})();
