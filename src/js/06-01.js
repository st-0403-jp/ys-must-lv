(function () {
    var task = '06-01';
    console.log(task);
    var $mainWrap = $('#task_' + task);
    var $tabList = $('.list_tab').find('li');
    var $tabPanel = $('.list_tab-panel').find('li');
    var setStyle = function () {
        $tabPanel.show();
        $tabPanel.not('.current').hide();
    };
    var setHref = function () {
        var tabAnchor = '';
        var tabHref = '';
        $.each($tabList, function (index, tabList) {
            tabAnchor = $(tabList).children('a');
            tabHref = tabAnchor.attr('href');
            tabAnchor.attr('href', 'tab-panel_' + tabHref);
        });
    };
    var eventBind = function () {
        var targetId = '';
        setStyle();
        setHref();
        $tabList.children('a').on('click', function (e) {
            e.preventDefault();
            targetId = $(e.target).attr('href');
            $tabPanel.removeClass('current');
            $('#' + targetId).addClass('current');
            setStyle();
        });
    };

    eventBind();
})();
