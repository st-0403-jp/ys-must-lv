(function () {
    var task = '13-02';
    console.log(task);

    var $taskWrap = $('#task_' + task);
    var $inputSearch = $taskWrap.find('#zodiacSearch');
    var $btnSearch = $taskWrap.find('#zodiacSearchBtn');
    var $zodiacTable = $taskWrap.find('#zodiacTable');
    var $addZodiacTable = $taskWrap.find('#addZodiacTable');
    var $btnAdd = $taskWrap.find('#zodiacAddBtn');

    var searchText = '';
    var checkText = '';
    var exportTr = [];
    var isChecked = false;

    var $tr = $zodiacTable.find('tbody').find('tr');
    var $td = {};
    $btnSearch.on('click', function () {
        exportTr = [];
        searchText = $inputSearch.val();
        $.each($tr, function (trIdx, trEl) {
            $td = $(trEl).find('td');
            $.each($td, function (tdIdx, tdEl) {
                checkText = $(tdEl).text();
                if (!isChecked && checkText.search(searchText) > -1) {
                    exportTr.push(trEl);
                    isChecked = true;
                }
                if ($td.length === tdIdx + 1) {
                    isChecked = false;
                }
            });
        });
        $zodiacTable.find('tbody').empty();
        $.each(exportTr, function (exIdx, exEl) {
            $zodiacTable.find('tbody').append(exEl);
        });
    });

    var addId = '';
    var addJtext = '';
    var addLtext = '';
    var addTr = '';
    $btnAdd.on('click', function () {
        addId = $zodiacTable.find('tbody').find('tr').length + 2;
        addJtext = $addZodiacTable.find('#addJapanese').val();
        addLtext = $addZodiacTable.find('#addLatin').val();
        addTr = '<tr>';
        addTr += '<td>' + addId + '</td>';
        addTr += '<td>' + addJtext + '</td>';
        addTr += '<td>' + addLtext + '</td>';
        addTr += '</tr>';
        $zodiacTable.find('tbody').append(addTr);
        $tr.push(addTr);
    });

})();