(function () {
    var task = '10-01';
    console.log(task);

    var $taskWrap = $('#task_' + task);
    var $selectBirthYear = $taskWrap.find('#birthYearSelect');
    var $selectBirthMonth = $taskWrap.find('#birthMonthSelect');
    var $selectBirthDate = $taskWrap.find('#birthDateSelect');
    var $btnCheckZodiac = $taskWrap.find('#checkZodiacBtn');
    var $boxZodiac = $taskWrap.find('#zodiacBox');

    var zodiacData = [
        {
            name: '牡羊座',
            sterm: [3, 21],
            eterm: [4, 19]
        },
        {
            name: '牡牛座',
            sterm: [4, 20],
            eterm: [5, 20]
        },
        {
            name: '双子座',
            sterm: [5, 21],
            eterm: [6, 21]
        },
        {
            name: '蟹座',
            sterm: [6, 22],
            eterm: [7, 22]
        },
        {
            name: '獅子座',
            sterm: [7, 23],
            eterm: [8 ,22]
        },
        {
            name: '乙女座',
            sterm: [8, 23],
            eterm: [9, 22]
        },
        {
            name: '天秤座',
            sterm: [9, 23],
            eterm: [10, 23]
        },
        {
            name: '蠍座',
            sterm: [10, 24],
            eterm: [11, 22]
        },
        {
            name: '射手座',
            sterm: [11, 23],
            eterm: [12, 21]
        },
        {
            name: '山羊座',
            sterm: [12, 22],
            eterm: [1, 19]
        },
        {
            name: '水瓶座',
            sterm: [1, 20],
            eterm: [2, 18]
        },
        {
            name: '魚座',
            sterm: [2, 19],
            eterm: [3, 20]
        },
    ];

    var selectYear = '';
    var selectMonth = '';
    var selectDate = '';
    var selectD = {};
    var zodiacD1 = {};
    var zodiacD2 = {};
    var zodiacName = '';
    $btnCheckZodiac.on('click', function () {
        selectYear = $selectBirthYear.val();
        selectMonth = $selectBirthMonth.val();
        selectDate = $selectBirthDate.val();
        selectD = new Date(selectYear, selectMonth - 1, selectDate);
        zodiacName = '星座がありません。';
        zodiacData.forEach(function (data) {
            zodiacD1 = new Date(selectYear, data.sterm[0] - 1, data.sterm[1]);
            if (data.name === '山羊座') {
                zodiacD2 = new Date(selectYear + 1, data.eterm[0] - 1, data.eterm[1]);
            } else {
                zodiacD2 = new Date(selectYear, data.eterm[0] - 1, data.eterm[1]);
            }
            if (zodiacD1.getTime() <= selectD.getTime() && selectD.getTime() <= zodiacD2.getTime()) {
                zodiacName = data.name;
            }
        });
        $boxZodiac.text(zodiacName);
    });

})();