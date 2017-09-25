(function () {
    var task = '07-01';
    console.log(task);
    var $taskWrap = $('#task_' + task);
    var $inputAddress = $taskWrap.find('#address');
    var $searchBtn = $taskWrap.find('#addressSearch');
    var $deletePinBtn = $taskWrap.find('#deletePin');

    var mapEl = document.getElementById('map');
    var map_location = {};
    var map_options = {};
    var map = {};
    var marker = {};
    var searchMap = function (address) {
        new google.maps.Geocoder().geocode({
            address: address,
            region: 'jp'
        }, function (results, status) {
            map_location = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
            map_options = {
                zoom: 15,
                center: map_location,
                disableDefaultUI: false
            };
            map = new google.maps.Map(mapEl, map_options);
            marker = new google.maps.Marker({
                position: map_location,
                map: map
            });
        });
    };

    searchMap('皇居');
    $searchBtn.on('click', function () {
        var searchAddress = $inputAddress.val();
        if (!searchAddress || searchAddress == null) {
            alert('検索するテキストがありません。');
            return;
        }
        searchMap(searchAddress);
    });
    $deletePinBtn.on('click', function () {
        marker.setMap(null);
    });
})();
