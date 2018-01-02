(function () {
    var task = '15-01';
    console.log(task);

    var $taskWrap = $('#task_' + task);
    var $wrapStatusBar = $taskWrap.find('#statusBar');
    var $status = $wrapStatusBar.find('.status');
    var $statusText = $wrapStatusBar.find('.status-text');
    var $wrapStatusBtn = $taskWrap.find('#statusBtn');
    var $btnMinus = $wrapStatusBtn.find('.status-btn-minus');
    var $btnPlus = $wrapStatusBtn.find('.status-btn-plus');

    var statusVal = 0;
    
    var setStatus = function () {
        $status.css({
            'left': statusVal + '%'
        });
        if (statusVal <= 20) {
            $wrapStatusBar.css('background-color', 'red');
        } else if (21 <= statusVal && statusVal <= 50) {
            $wrapStatusBar.css('background-color', 'yellow');
        } else if (51 <= statusVal) {
            $wrapStatusBar.css('background-color', 'green');
        }
        $statusText.text(statusVal);
    };
    setStatus();

    var interval = null;
    $btnMinus.on('mousedown', function () {
        if (statusVal === 0) {
            return;
        }
        interval = setInterval(function () {
            if (statusVal <= 0) {
                statusVal = 0;
                return;
            }
            statusVal--;
            setStatus();
        }, 50);
    });

    $btnMinus.on('mouseup', function () {
        if (interval == null) {
            return;
        }
        clearInterval(interval);
        interval = null;
    });

    $btnPlus.on('mousedown', function () {
        if (statusVal === 100) {
            return;
        }
        interval = setInterval(function () {
            if (statusVal >= 100) {
                statusVal = 100;
                return;
            }
            statusVal++;
            setStatus();
        }, 50);
    });

    $btnPlus.on('mouseup', function () {
        if (interval == null) {
            return;
        }
        clearInterval(interval);
        interval = null;
    });

})();
