(function () {
    var task = '10-02';
    console.log(task);

    var $taskWrap = $('#task_' + task);
    var $selectBirthYear = $taskWrap.find('#birthYearSelect');
    var $selectBirthMonth = $taskWrap.find('#birthMonthSelect');
    var $selectBirthDate = $taskWrap.find('#birthDateSelect');
    var $btnCheckChineseAstrology = $taskWrap.find('#checkChineseAstrologyBtn');
    var $boxChineseAstrologyBox = $taskWrap.find('#chineseAstrologyBox');

    var chineseAstrologyData = [
        {
            name: '子',
            year: [1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008]
        },
        {
            name: '丑',
            year: [1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009]
        },
        {
            name: '寅',
            year: [1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010]
        },
        {
            name: '卯',
            year: [1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011]
        },
        {
            name: '辰',
            year: [1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012]
        },
        {
            name: '巳',
            year: [1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013]
        },
        {
            name: '午',
            year: [1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014]
        },
        {
            name: '未',
            year: [1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015]
        },
        {
            name: '申',
            year: [1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016]
        },
        {
            name: '酉',
            year: [1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017]
        },
        {
            name: '戌',
            year: [1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018]
        },
        {
            name: '亥',
            year: [1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019]
        }
    ];

    var selectYear = '';
    var selectMonth = '';
    var selectDate = '';
    var selectD = {};
    var isChineseAstrology = false;
    var chineseAstrologyName = '';
    $btnCheckChineseAstrology.on('click', function () {
        selectYear = $selectBirthYear.val();
        chineseAstrologyName = '干支がありません。';
        isChineseAstrology = false;
        chineseAstrologyData.forEach(function (data) {
            if (isChineseAstrology) {
                return;
            }
            isChineseAstrology = data.year.some(function (year) {
                if (Number(selectYear) === year) {
                    chineseAstrologyName = data.name;
                    return true;
                }
            });
        });
        $boxChineseAstrologyBox.text(chineseAstrologyName);
    });

})();