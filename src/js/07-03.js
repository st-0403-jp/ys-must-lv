(function () {
    var task = '07-03';
    console.log(task);

    // 必要DOM
    var $taskWrap = $('#task_' + task);
    var $inputDepart = $taskWrap.find('#departLocation');
    var $inputReach = $taskWrap.find('#reachLocation');
    var $searchBtn = $taskWrap.find('#routeSearch');
    var mapEl = document.getElementById('map');
    
    // 動的変数
    var map_options = {};
    var map = {};
    var marker = {};
    var infowindow = {};
    var RESULT = [];

    // googleMapの機能
    var getLocation = function () {
        return new google.maps.LatLng(RESULT[0].geometry.location.lat(), RESULT[0].geometry.location.lng()) || {};
    };
    var createMap = function () {
        map_options = {
            zoom: 15,
            center: getLocation(),
            disableDefaultUI: false
        };
        map = new google.maps.Map(mapEl, map_options);
    };
    var createMarker = function () {
        marker = new google.maps.Marker({
            position: getLocation(),
            map: map
        });
    };

    // geocorderの実行関数
    var geocoder = new google.maps.Geocoder();
    var latLngMapGeo = function (latLng, callback) {
        geocoder.geocode({
            latLng: latLng,
            region: 'jp'
        }, function (results) {
            RESULT = results;
            if (callback && typeof callback === 'function') {
                callback();
            }
        });
    };
    var addressInitGeo = function (address, callback) {
        geocoder.geocode({
            address: address,
            region: 'jp'
        }, function (results) {
            RESULT = results;
            if (callback && typeof callback === 'function') {
                callback();
            }
        });
    };

    // 実行
    addressInitGeo('新宿', function () {
        createMap(getLocation());
        createMarker();
        google.maps.event.addListener(map, 'click', function (e) {
            if (marker != null && 'setMap' in marker) {
                marker.setMap(null);
            }
            latLngMapGeo(e.latLng, function () {
                createMarker();
                infowindow = new google.maps.InfoWindow({
                    content: RESULT[0].formatted_address
                });
                infowindow.open(map, marker);
            });
        });
    });
})();
