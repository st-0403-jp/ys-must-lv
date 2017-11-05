(function () {
    var task = '05-01';
    console.log(task);
    var $zipInputEl = $('#zipTextInput');
    var $zipSerachBtn = $('#zipSearchBtn');
    var $zipResult = $('#zipResult');

    var api_url = 'http://153.126.194.210/ajax.php';
    var zip_api_url = 'http://zip.cgis.biz/xml/zip.php'; // 'http://api.zipaddress.net';

    var zipVal = '';
    var reqUrl = '';
    $zipSerachBtn.on('click', function () {
        zipVal = $zipInputEl.val();
        if (zipVal.length !== 7) {
            alert('半角数字7桁で入力してください');
            return;
        }
        reqUrl = zip_api_url + '?zn=' + zipVal;
        var reqParam = {
            type: 'GET',
            url: api_url + '?url=' + encodeURIComponent(reqUrl),
            dataType: 'xml'
        }
        $.ajax(reqParam).done(function (data) {
            console.log(data);
            var xml_serializer = new XMLSerializer();
			var str = xml_serializer.serializeToString(data);
            $('#zipResult').text(str);
        }).fail(function (err) {
            console.log(err);
        });
    });

})();
