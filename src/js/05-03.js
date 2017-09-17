(function () {
    var task = '05-03';
    console.log(task);
    var $zipInputEl = $('#zipTextInput');
    var $zipSerachBtn = $('#zipSearchBtn');

    var zipVal = '';
    $zipSerachBtn.on('click', function () {
        zipVal = $zipInputEl.val();
        if (zipVal.length !== 7) {
            alert('半角数字7桁で入力してください');
            return;
        }
        var reqParam = {
            type: 'GET',
            url: 'http://api.zipaddress.net',
            dataType: 'jsonp',
            data: {
                zipcode: zipVal
            }
        }
        $.ajax(reqParam).done(function (data) {
            var strData = JSON.stringify(data);
            strData = strData.replace(/[{}]/g, '');
            var strDataArr = strData.split(',');
            strDataArr.forEach(function (str, index) {
                if (index !== strDataArr.length - 1) {
                    strDataArr[index] = str + ',<br>';
                }
            });
            strDataArrJoin = strDataArr.join('');
            $('#zipResult').html(strDataArrJoin);
        });
    });
})();
