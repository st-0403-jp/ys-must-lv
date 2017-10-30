(function () {
    var task = '09-03';
    console.log(task);

    var $taskWrap = $('#task_' + task);
    var $inputJapaneseDate = $taskWrap.find('#japaneseDate');
    var $inputYyyymmddDate = $taskWrap.find('#yyyymmddDate');
    var $btnDateFormatChange = $taskWrap.find('#dateFormatChangeBtn');

    var DATE = new Date();
    var toYear = DATE.getFullYear();
    var toMonth = DATE.getMonth() + 1;
    var toDate = DATE.getDate();
    var displayYMD = toYear + '年' + toMonth + '月' + toDate + '日';
    $inputJapaneseDate.val(displayYMD);

    var beforeDateFormat = '';
    var afterDateFormat = '';
    var year, month, date;
    $btnDateFormatChange.on('click', function () {
        beforeDateFormat = $inputJapaneseDate.val();
        year = beforeDateFormat.split('年')[0];
        month = beforeDateFormat.split('年')[1].split('月')[0];
        date = beforeDateFormat.split('年')[1].split('月')[1].split('日')[0];
        afterDateFormat = year + '/' + month + '/' + date;
        $inputYyyymmddDate.val(afterDateFormat);
    });

})();