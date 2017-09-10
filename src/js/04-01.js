(function () {
    var task = '04-01';
    console.log(task);
    var curtainId = 'js-curtain';
    var modalId = 'modal';
    var $body = $('body');
    var $modalOpenBtn = $('#modalOpenBtn');

    $modalOpenBtn.on('click', function (e) {
        $body.append('<div id=' + curtainId + '></div>');
        curtainStyle(curtainId);
        $body.append(createModal(modalId));
        modalStyle(modalId);
        $('#js-curtain').on('click', function (e) {
            $(e.target).remove();
            $('#' + modalId).remove();
        });
    });

    var curtainStyle = function (curtainIdName) {
        $('#' + curtainIdName).css({
            'position': 'absolute',
            'top': '0',
            'left': '0',
            'width': '100%',
            'height': '100%',
            'background-color': 'rgba(255, 255, 255, 0.9)'
        });
    }

    var createModal = function (idName) {
        var wrapEl = '<div id=' + idName + '></div>';
        return wrapEl;
    }

    var modalStyle = function (modalIdName) {
        $('#' + modalIdName).css({
            'position': 'absolute',
            'top': '0',
            'left': '0',
            'right': '0',
            'bottom': '0',
            'margin': 'auto',
            'width': '500px',
            'height': '500px',
            'background-color': '#555'
        });
    }

})();
