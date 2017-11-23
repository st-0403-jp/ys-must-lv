(function () {
    var task = '13-04';
    console.log(task);

    var $taskWrap = $('#task_' + task);
    var $inputSearch = $taskWrap.find('#zodiacSearch');
    var $btnSearch = $taskWrap.find('#zodiacSearchBtn');
    var $zodiacTable = $taskWrap.find('#zodiacTable');
    var $btnZodiacRemove = $zodiacTable.find('.zodiacRemoveBtn');

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

    $zodiacTable.find('tr').on('click', function (e) {
        if ($(e.target).data('remove')) {
            $(e.currentTarget).remove();
        }
    });

})();
