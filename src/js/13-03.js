(function () {
    var task = '13-03';
    console.log(task);

    var $taskWrap = $('#task_' + task);
    var $inputSearch = $taskWrap.find('#zodiacSearch');
    var $btnSearch = $taskWrap.find('#zodiacSearchBtn');
    var $zodiacTable = $taskWrap.find('#zodiacTable');
    var $operationTable = $taskWrap.find('#operationTable');
    var $editId = $operationTable.find('#editId');
    var $editJ = $operationTable.find('#editJapanese');
    var $editL = $operationTable.find('#editLatin');
    var $btnEdit = $taskWrap.find('#zodiacEditBtn');

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

    var clickId = '';
    var zodiacTblTdList = [];
    $zodiacTable.find('tr').on('click', function (e) {
        $.each($(e.currentTarget).find('td'), function (idx, td) {
            zodiacTblTdList.push($(td).text());
        });
        $editId.val(zodiacTblTdList[0]);
        $editJ.val(zodiacTblTdList[1]);
        $editL.val(zodiacTblTdList[2]);
        clickId = zodiacTblTdList[0];
        zodiacTblTdList = [];
    });

    var editId = '';
    var editJ = '';
    var editL = '';
    var currentTdId = '';
    $btnEdit.on('click', function () {
        editId = $editId.val();
        editJ = $editJ.val();
        editL = $editL.val();
        $.each($zodiacTable.find('tr'), function (trIdx, tr) {
            $.each($(tr).find('td'), function (tdIdx, td) {
                if (tdIdx === 0) {
                    currentTdId = $(td).text();
                }
                if (clickId === currentTdId) {
                    if (tdIdx === 0) {
                        $(td).text(editId);
                        return;
                    }
                    if (tdIdx === 1) {
                        $(td).text(editJ);
                        return;
                    }
                    if (tdIdx === 2) {
                        $(td).text(editL);
                        return;
                    }
                }
            });
        });
        $editId.val('');
        $editJ.val('');
        $editL.val('');
    });

})();
