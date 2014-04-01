var pcs = (function () {
    var table;
    return {
        wrap: function (id) {
            table = document.getElementById(id);
        },
        row: function (values) {
            var row = table.insertRow(table.rows.length),
                cells = table.rows[0].cells.length,
                i;
            for (i = 0; i < cells; i++) {
                var addText = row.insertCell(i);
                addText.innerHTML = values[i];
            }
        }
    };
}());

