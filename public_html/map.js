$(function () {
    /*global $, google */
    var mapOptions = {
        center: new google.maps.LatLng(31.7750, 35.2315),
        zoom: 11
    },
        map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
    $("#side").resizable({handles: "e"});
    /*$("#side").on("resize", function (event, ui) {
    });*/
    $.getJSON('http://www.geonames.org/wikipediaSearch?q=yeshiva&maxRows=10&username=arecaps&type=json&callback=?', function (data) {
        var i,
            list;
        $.each(data, function (key, values) {
            $.each(values, function (index, value) {
            list = "<li>" + (index+1) + ': ' + value.title + "</li></br>";
            $("#side").append(list);
        });
        });
    });
});

