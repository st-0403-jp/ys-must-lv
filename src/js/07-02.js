(function () {
    var task = '07-02';
    console.log(task);
    var $taskWrap = $('#task_' + task);
    var $inputDepart = $taskWrap.find('#departLocation');
    var $inputReach = $taskWrap.find('#reachLocation');
    var $searchBtn = $taskWrap.find('#routeSearch');

    var mapEl = document.getElementById('map');
    var routeEl = document.getElementById('route');
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
    var searchMap = function (address) {
        new google.maps.Geocoder().geocode({
            address: address,
            region: 'jp'
        }, function (results) {
            createMap(getLocation(results));
        });
    };
    var routeObj = {
        depart: '',
        reach: ''
    };
    var mapGeo = function (address, method, d) {
        new google.maps.Geocoder().geocode({
            address: address,
            region: 'jp'
        }, function (results) {
            routeObj[method] = getLocation(results);
            if (d) {
                d.resolve();
            }
        });
    };

    searchMap('皇居');
    $searchBtn.on('click', function () {
        var depart = $inputDepart.val();
        var reach = $inputReach.val();

        var $deferred1 = new $.Deferred();
        var $deferred2 = new $.Deferred();
        mapGeo(depart, 'depart', $deferred1);
        mapGeo(reach, 'reach', $deferred2);
        $.when(
            $deferred1.promise(),
            $deferred2.promise()
        ).done(function () {
            var directionsService = new google.maps.DirectionsService();
            var request = {
                origin: routeObj.depart,
                destination: routeObj.reach,
                travelMode: google.maps.DirectionsTravelMode.DRIVING
            };
            directionsService.route(request, function (results) {
                var directionsDisplay = new google.maps.DirectionsRenderer();
                directionsDisplay.setDirections(results);
                directionsDisplay.setMap(createMap(routeObj.depart));
                directionsDisplay.setPanel(routeEl);
            });
        });
    });
})();
