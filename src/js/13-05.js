(function () {
    var task = '13-05';
    console.log(task);

    var $taskWrap = $('#task_' + task);
    var $inputSearch = $taskWrap.find('#zodiacSearch');
    var $btnSearch = $taskWrap.find('#zodiacSearchBtn');
    var $zodiacTable = $taskWrap.find('#zodiacTable');
    var $selectSort = $taskWrap.find('#zodiacSortSelect');

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

    var sortArr = [];
    var options = {};
    $selectSort.on('change', function (e) {
        console.log($(e.target).find('option'));
        options = $(e.target).find('option');
        sortArr = [];
        $.each(options, function (idx, option) {
            if ($(option).prop('selected')) {
                if (idx === 0) {
                    createZodiacTable();
                } else if (idx === 1) {
                    createZodiacTable();
                    $.each($taskWrap.find('#zodiacTable').find('tr'), function (trIdx, tr) {
                        if (trIdx === 0) {
                            return;
                        }
                        sortArr.unshift(tr);
                    });
                    $taskWrap.find('#zodiacTable').find('tbody').empty();
                    $.each(sortArr, function (trIdx, sortTr) {
                        $taskWrap.find('#zodiacTable').find('tbody').append(sortTr);
                    });
                } else if (idx === 2) {
                    createZodiacTable();
                    $.each($taskWrap.find('#zodiacTable').find('tr'), function (trIdx, tr) {
                        if (trIdx === 0) {
                            return;
                        }
                        sortArr.push(tr);
                    });
                    sortArr.sort(function (aTr, bTr) {
                        var a = '';
                        var b = '';
                        $.each($(aTr).find('td'), function (aTdIdx, aTd) {
                            if (aTdIdx === 1) {
                                a = $(aTd).text();
                            }
                        });
                        $.each($(bTr).find('td'), function (bTdIdx, bTd) {
                            if (bTd === 1) {
                                b = $(bTd).text();
                            }
                        });
                        if (a < b) return -1;
                        if (a > b) return 1;
                        return 0;
                    });
                    $taskWrap.find('#zodiacTable').find('tbody').empty();
                    $.each(sortArr, function (trIdx, sortTr) {
                        $taskWrap.find('#zodiacTable').find('tbody').append(sortTr);
                    });
                } else if (idx === 3) {
                    createZodiacTable();
                    $.each($taskWrap.find('#zodiacTable').find('tr'), function (trIdx, tr) {
                        if (trIdx === 0) {
                            return;
                        }
                        sortArr.push(tr);
                    });
                    sortArr.sort(function (aTr, bTr) {
                        var a = '';
                        var b = '';
                        $.each($(aTr).find('td'), function (aTdIdx, aTd) {
                            if (aTdIdx === 1) {
                                a = $(aTd).text();
                            }
                        });
                        $.each($(bTr).find('td'), function (bTdIdx, bTd) {
                            if (bTd === 1) {
                                b = $(bTd).text();
                            }
                        });
                        if (a > b) return -1;
                        if (a < b) return 1;
                        return 0;
                    });
                    $taskWrap.find('#zodiacTable').find('tbody').empty();
                    $.each(sortArr, function (trIdx, sortTr) {
                        $taskWrap.find('#zodiacTable').find('tbody').append(sortTr);
                    });
                } else if (idx === 4) {
                    createZodiacTable();
                    $.each($taskWrap.find('#zodiacTable').find('tr'), function (trIdx, tr) {
                        if (trIdx === 0) {
                            return;
                        }
                        sortArr.push(tr);
                    });
                    sortArr.sort(function (aTr, bTr) {
                        var a = '';
                        var b = '';
                        $.each($(aTr).find('td'), function (aTdIdx, aTd) {
                            if (aTdIdx === 2) {
                                a = $(aTd).text();
                            }
                        });
                        $.each($(bTr).find('td'), function (bTdIdx, bTd) {
                            if (bTd === 2) {
                                b = $(bTd).text();
                            }
                        });
                        if (a < b) return -1;
                        if (a > b) return 1;
                        return 0;
                    });
                    $taskWrap.find('#zodiacTable').find('tbody').empty();
                    $.each(sortArr, function (trIdx, sortTr) {
                        $taskWrap.find('#zodiacTable').find('tbody').append(sortTr);
                    });
                } else if (idx === 5) {
                    createZodiacTable();
                    $.each($taskWrap.find('#zodiacTable').find('tr'), function (trIdx, tr) {
                        if (trIdx === 0) {
                            return;
                        }
                        sortArr.push(tr);
                    });
                    sortArr.sort(function (aTr, bTr) {
                        var a = '';
                        var b = '';
                        $.each($(aTr).find('td'), function (aTdIdx, aTd) {
                            if (aTdIdx === 2) {
                                a = $(aTd).text();
                            }
                        });
                        $.each($(bTr).find('td'), function (bTdIdx, bTd) {
                            if (bTd === 2) {
                                b = $(bTd).text();
                            }
                        });
                        if (a > b) return -1;
                        if (a < b) return 1;
                        return 0;
                    });
                    $taskWrap.find('#zodiacTable').find('tbody').empty();
                    $.each(sortArr, function (trIdx, sortTr) {
                        $taskWrap.find('#zodiacTable').find('tbody').append(sortTr);
                    });
                } else {
                    createZodiacTable();
                }
            }
        });
    });

    var newZodiacTbl = {};
    var cloneZodiacTbl = $zodiacTable.html();
    var createZodiacTable = function () {
        newZodiacTbl = $taskWrap.find('#zodiacTable');
        newZodiacTbl.empty();
        newZodiacTbl.html(cloneZodiacTbl);
    }

})();
