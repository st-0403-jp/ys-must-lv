(function () {
    var task = '14-01';
    console.log(task);

    var $taskWrap = $('#task_' + task);
    var $btnCalendar = $taskWrap.find('#calendarBtn');
    var $inputCalendarText = $taskWrap.find('#calendarText');

    var $body = $('body');
    $body.on('click', '#close', function (e) {
        e.stopPropagation();
        $('.popup').remove();
    });

    var calendarYear = 2017;
    var calendarMonth = 12 - 1;

    var $popupTmp = $('#task_' + task + '_temp-popup-01');
    $btnCalendar.on('click', function () {
        $body.append($popupTmp.html());
        createCalendar(calendarYear, calendarMonth);
    });

    $body.on('click', '#prev-month', function () {
        calendarMonth--;
        createCalendar(calendarYear, calendarMonth);
    });

    $body.on('click', '#next-month', function () {
        calendarMonth++;
        createCalendar(calendarYear, calendarMonth);
    });

    var inputMonth = '';
    $body.on('click', '.date', function (e) {
        inputMonth = calendarMonth + 1 + '';
        $inputCalendarText.val(calendarYear + '/' + inputMonth + '/' + $(e.target).text());
    });

    var createCalendar = function (year, month) {
        var $popupCalendar = $('#popupCalendar');
        var $yearMonth = $popupCalendar.find('#year-month');
        var $tbody = $popupCalendar.find('tbody');

        var nowDate = new Date(year, month);
        var toYear = nowDate.getFullYear();
        var toMonth = nowDate.getMonth() + 1;
        $yearMonth.html(toYear + '年' + toMonth + '月');

        var firstDayByToMonth = nowDate.getDay();
        var tdList = [];
        var maxDate = getMaxDateByMonth(toMonth);
        for (var i = 1; i <= maxDate; i++) {
            if (i === 1) {
                for (var j = 0; j < firstDayByToMonth; j++) {
                    tdList.push('<td> </td>');
                }
            }
            tdList.push('<td class="date">' + i + '</td>');
        }
        var trList = [];
        var tr = '<tr>';
        var n = 1;
        var m = 0;
        var lastTrTdCount = 0;
        var lastFlg = false;
        tdList.forEach(function (td, idx) {
            tr += td;
            if (lastFlg && idx === tdList.length - 1) {
                lastTrTdCount = tr.split('</td>').length - 1;
                if (lastTrTdCount === 1) {
                    tr += '<td> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>';
                } else if (lastTrTdCount === 2) {
                    tr += '<td> </td><td> </td><td> </td><td> </td><td> </td></tr>';
                } else if (lastTrTdCount === 3) {
                    tr += '<td> </td><td> </td><td> </td><td> </td></tr>';
                } else if (lastTrTdCount === 4) {
                    tr += '<td> </td><td> </td><td> </td></tr>';
                } else if (lastTrTdCount === 5) {
                    tr += '<td> </td><td> </td></tr>';
                } else if (lastTrTdCount === 6) {
                    tr += '<td> </td></tr>';
                } else {
                    tr += '</tr>';
                }
                trList.push(tr);
                lastFlg = false;
                return;
            }
            if (idx !== 0 && idx === 7 * n - 1) {
                tr += '</tr>';
                trList.push(tr);
                n++;
                tr = '<tr>';
                if (!lastFlg && idx > tdList.length - 8) {
                    lastFlg = true;
                }
            }
        });
        trList = trList.join('');
        $tbody.html(trList);
        // $.each(trList, function (idx, tr) {
        //     $tbody.html(tr);
        // });
    };

    var getMaxDateByMonth = function (toMonth) {
        var maxDate = 0;
        if (toMonth === 2) {
            maxDate = 28;
        } else if (toMonth === 1 || toMonth === 3 || toMonth === 5 || toMonth === 7 || toMonth === 8 || toMonth === 10 || toMonth === 12) {
            maxDate = 31;
        } else if (toMonth === 4 || toMonth === 6 || toMonth === 9 || toMonth === 11) {
            maxDate = 30;
        }
        return maxDate;
    }

})();
