/*global $, google */
$(function () {
    var mapOptions = {
        center: new google.maps.LatLng(31.7750, 35.2315),
        zoom: 8
    },
        map = new google.maps.Map(document.getElementById("map-canvas"),
                mapOptions),
        choice,
        amount,
        bounds,
        ne,
        sw,
        url;
    $("#side").resizable({handles: "e"});
    /*$("#side").on("resize", function (event, ui) {
     });*/
    //alert($(amount).val());
    $("#submit").click(function () {
        $("ul").empty();
        choice = $("#choice").val();
        amount = $("#amount").val(),
        url = 'http://www.geonames.org/wikipediaSearch?q=' + choice + '&maxRows=' + amount + '&username=arecaps&type=json&callback=?';
        getInfo();
    });
    $("#bounds").click(function () {
        $("ul").empty();
        amount = $("#amount").val(),
        bounds = map.getBounds(),
        ne = bounds.getNorthEast(),
        sw = bounds.getSouthWest(),
        url = 'http://api.geonames.org/wikipediaBoundingBoxJSON?north=' + ne.lat() + '&south=' + sw.lat() + '&east=' + ne.lng() + '&west=' + sw.lng() + '&maxRows=' + amount + '&username=arecaps&type=json&callback=?';
            getInfo();
    });
    function getInfo () {
        $.getJSON(url, function (data) {
            $.each(data.geonames, function (key, value) {
                var position = new google.maps.LatLng(value.lat, value.lng),
                    /*icon = {
                     url: position,
                     scaledSize:
                     },*/
                    infowindow = new google.maps.InfoWindow({
                        content: value.summary + ' Read more <a href="http://' + value.wikipediaUrl + '">' + value.wikipediaUrl + "</a>"
                    }),
                    title = value.title,
                    marker = new google.maps.Marker({
                        map: map,
                        position: position,
                        title: title//,
                                //icon: icon
                    }),
                    titleId = title.split(" "),
                    imageId = "#" + titleId[0] + key;
                $("<li><h2>" + value.title + "</h2></li>" + '<img id = "' + titleId[0] + key + '" class = "picts" src ="' + value.thumbnailImg + '"/>').appendTo($("ul")).click(function () {
                    map.panTo(position);
                    $(imageId).toggle();
                });
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);
                });
            });
        });
    };
});