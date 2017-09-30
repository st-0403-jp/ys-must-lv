(function () {
    var task = '07-03';
    console.log(task);
    var $taskWrap = $('#task_' + task);
    var $inputDepart = $taskWrap.find('#departLocation');
    var $inputReach = $taskWrap.find('#reachLocation');
    var $searchBtn = $taskWrap.find('#routeSearch');

    var mapEl = document.getElementById('map');
    
    var map_options = {};
    var map = {};
    var marker = {};
    var getLocation = function (results) {
        return new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()) || {};
    };
    var createMap = function (mapLat) {
        map_options = {
            zoom: 15,
            center: mapLat,
            disableDefaultUI: false
        };
        map = new google.maps.Map(mapEl, map_options);
        marker = new google.maps.Marker({
            position: mapLat,
            map: map
        });
        return map;
    };
    var searchMap = function (LatLng) {
        new google.maps.Geocoder().geocode({
            LatLng: LatLng
        }, function (results) {
            console.log(results);
            //createMap(getLocation(results));
        });
    };
    var routeObj = {
        depart: '',
        reach: ''
    };

    //searchMap('新宿御苑');
})();
