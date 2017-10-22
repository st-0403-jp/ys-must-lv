(function () {
    var task = '08-01';
    console.log(task);

    var $taskWrap = $('#task_' + task);
    var $form = $taskWrap.find('form');
    var $inputUpload = $taskWrap.find('#fileUpload');
    var $uploadBox = $taskWrap.find('#upload-box');
    var $uploadStatus = $taskWrap.find('#upload-status');

    $(document).on('dragenter', function (e) {
        return false;
    }).on('dragover', function (e) {
        return false;
    }).on('drop', function (e) {
        return false;
    });

    var reader = new FileReader();
    reader.onload = function (e) {
        console.log(e.target);
        $uploadStatus.append('<img src="' + e.target.result + '">');
    }

    $uploadBox.on('dragenter', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(e.target).css('border', '2px solid black');
    }).on('dragover', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(e.target).css('background-color', 'yellow');
    }).on('drop', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(e.target).css('border', 'none');
        $(e.target).css('background-color', 'orange');
        var files = e.originalEvent.dataTransfer.files;
        for (var i = 0; i < files.length; i++) {
            var fd = new FormData();
            fd.append('file', files[i]);
            reader.readAsDataURL(files[i]);
        }
    });

    $inputUpload.on('change', function () {
        $inputUpload.on('change', function () {
            var fd = new FormData();
            fd.append('file', $inputUpload.prop("files")[0]);
            console.log($inputUpload.prop("files")[0]);
            // var postData = {
            //     type : "POST",
            //     dataType : "text",
            //     data : fd,
            //     processData : false,
            //     contentType : false
            // };
            // $.ajax(
            //     "ajax/index.php", postData
            // ).done(function( text ){
            //     console.log(text);
            // });
        });
    });
})();