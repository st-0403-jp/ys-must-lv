(function () {
    var task = '02-01';
    console.log(task);
    var clockEl = $('#task_' + task).find('.clock');
    var hourEl = clockEl.find('.hour');
    var minutesEl = clockEl.find('.minutes');
    var secondEl = clockEl.find('.second');

    var now = new Date();

    var toHour = now.getHours();
    var toMin = now.getMinutes();
    var toSec = now.getSeconds();

    setInterval(function () {
        now = new Date();
        toHour = now.getHours();
        toMin = now.getMinutes();
        toSec = now.getSeconds();
        hourEl.text(toHour);
        minutesEl.text(toMin);
        secondEl.text(toSec);
    }, 1000);
})();
