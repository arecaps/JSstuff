var pcs = (function () {

    function addClickHandler(elem, handler) {
        if (document.addEventListener) {
            elem.addEventListener("click", handler);
        } else if (document.attachEvent) {
            elem.attachEvent("onclick", handler);
        }
    }
    return {
        clearPop: function (div) {
            document.body.removeChild(div);
        },
        pop: function (message, text) {
            var div = document.createElement("div"),
                buttondiv = document.createElement("div"),
                button = document.createElement("button");
            div.innerHTML = message
                    + "<h1>Yaa!<h1>";
            div.style.padding = "25px";
            div.style.border = "2px solid black";
            div.style.borderRadius = "10px";
            div.style.position = "absolute";
            div.style.top = "50%";
            div.style.left = "50%";
            div.style.width = "225px";
            div.style.height = "175px";
            div.style.marginLeft = "-115px";
            div.style.marginTop = "-88px";
            buttondiv.style.position = "absolute";
            buttondiv.style.bottom = "5px";
            buttondiv.style.width = "inherit";
            buttondiv.style.textAlign = "center";
            button.innerHTML = text;
            document.body.appendChild(div);
            div.appendChild(buttondiv);
            buttondiv.appendChild(button);

            addClickHandler(button, pcs.clearPop(div));
        }
    };
}());

