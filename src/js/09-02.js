(function () {
    var task = '09-02';
    console.log(task);

    var $taskWrap = $('#task_' + task);
    var $replace1btn = $taskWrap.find('#replace1btn');
    var $replace2btn = $taskWrap.find('#replace2btn');
    var $inputReplace1Exp = $taskWrap.find('#replace1Exp');
    var $inputReplace2Exp = $taskWrap.find('#replace2Exp');

    var targetVal = '';
    var replaceVal = '';
    $replace1btn.on('click', function () {
        targetVal = $taskWrap.find('#originalExp').val();
        replaceVal = targetVal.replace('J-PHONE', 'Vodafone');
        $inputReplace1Exp.val(replaceVal);
    });

    $replace2btn.on('click', function () {
        targetVal = $inputReplace1Exp.val();
        replaceVal = '';
        if (targetVal) {
            replaceVal = targetVal.replace('Vodafone', 'SoftBank');
        }
        $inputReplace2Exp.val(replaceVal);
    });

})();