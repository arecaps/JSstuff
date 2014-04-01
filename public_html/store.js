$(function () {
    /*global $, pcs */
    pcs.wrap("theTable");
    $("#elec").click(function () {
        var pix;
        $.get("electronics.json", function (pictures) {
            $.each(pictures, function (i, picture) {
                pix = '<img class="pic" src="pix.pix/' + picture + '"/>';
                $('body').append(pix);
            });
        });
    });
    $("#dog").click(function () {
        var url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json&jsoncallback=?";
        $.getJSON(url, function (thePictures) {
            var pictures = thePictures.items;
            $.each(pictures, function (i, picture) {
                if (i < 11) {
                    $('body').append('<img class="pic" src="' + picture.media.m + '"/>');
                }
            });
        });
    });
    $("#car").click(function () {
        var picture;
        $("#tableDiv").css("display", "inline-block");
        $("#bigDiv").css("display", "none");
        $.get("cars.json", function (data) {
            $.each(data, function (i, pic) {
                picture = '<img src="' + pic + '"/>';
                $('body').append(picture);
            });
        });
    });
    $("#hse").click(function () {
        $("#tableDiv").css("display", "inline-block");
        $("#bigDiv").css("display", "none");
        var j,
            headers;
        $.getJSON("REtransactions.json", function (data) {
            $.each(data, function (i, line) {
                if (i === 0) {
                    for (j = 0; j < line.length; j++) {
                        headers = "<th>" + line[j] + "</th>";
                        $("#header").append(headers);
                    }
                } else {
                    pcs.row(line);
                }
            });
        });
    });
});