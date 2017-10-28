(function () {
    var task = '09-01';
    console.log(task);

    var $taskWrap = $('#task_' + task);
    var $inputZip = $taskWrap.find('#zipExp');
    var $inputMail = $taskWrap.find('#mailExp');

    var val = '';
    $inputZip.on('keyup', function (e) {
        console.log($(e.target).val());
        val = $(e.target).val();
        if (val.search(/\D/g) > -1) {
            console.log('no');
        } else {
            console.log('ok');
        }
    });
    $inputMail.on('keyup', function (e) {
        console.log($(e.target).val());
        val = $(e.target).val();
        if (val.search(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+\.+([a-zA-Z0-9\._-]+)+$/) > -1) {
            console.log('ok');
        } else {
            console.log('no');
        }
    });
})();