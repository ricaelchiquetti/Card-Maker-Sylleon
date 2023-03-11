var onChangeText = function (textField, field, pad) {
    let value = $(textField).val();

    if (pad) {
        value = value.padStart(pad, 0);
    }

    $(field).html(value);
}

var getCodeColorByName = function (color) {
    switch (color) {
        case 'red':
            return '#FFC5C5';
        case 'orange':
            return '#FFB164';//DEVE ESTAR ERRADO
        case 'yellow':
            return '#604F31';
        case 'green':
            return '#CDEFDE';
        case 'blue':
            return '#BFE7FA';
        case 'purple':
            return '#703364';
    }
}

var getCodeColorIconByName = function (color) {
    switch (color) {
        case 'red':
            return '#7E0000';
        case 'orange':
            return '#9A3D00';
        case 'yellow':
            return '#FAF8CF';
        case 'green':
            return '#264032';
        case 'blue':
            return '#005C8B';
        case 'purple':
            return '#EFD8E8';
    }
}

var changeCardColor = function () {
    let color = $('#color').val();
    let style = $("#styleCard").val();

    if (color && style) {
        let colorBaseHexa = getCodeColorByName(color),
            colorIconHexa = getCodeColorIconByName(color);

        $("#cardBase").attr("src", 'img/' + style + '/base.svg');
        $("#cardIcon").attr("src", 'img/' + style + '/icon.svg');
        $("#cardLine").attr("src", 'img/' + style + '/line_' + color + '.svg');

        // Achar um modo de alterar a cor da IMG ou pedir para o Neko as img já coloridas.
        // base.find('path').css('fill', colorBaseHexa);
        // base.find('polygon').css('fill', colorBaseHexa);
        // icon.find('path').css('fill', colorIconHexa);
    } else {
        $("#cardLine").attr("src", '');
        $("#cardIcon").attr("src", '');
        $("#cardBase").attr("src", '');
    }
}

$(document).ready(function () {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    $(window).on('load', () => {
        fetch('json/skill.json')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    $('#skill').append($('<option>', {
                        value: item.value,
                        text: item.text
                    }));
                });
            });
    });

    $(window).resize(function () {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
    });

    $("#inputTextName").on("change", () => {
        onChangeText("#inputTextName", "#cardTextName");
    });

    $("#inputTextDesc").on("change", function () {
        onChangeText("#inputTextDesc", "#cardTextDesc");
    });

    $("#inputTextType").on("change", function () {
        onChangeText("#inputTextType", "#cardTextType");
    });

    $("#inputNumberPower").on("change", function () {
        onChangeText("#inputNumberPower", "#cardPower", 2);
    });

    $("#inputNumberDef").on("change", function () {
        onChangeText("#inputNumberDef", "#cardDef", 2);
    });

    $("#inputNumberRange").on("change", function () {
        onChangeText("#inputNumberRange", "#cardRange", 2);
    });

    $("#inputNumberMove").on("change", function () {
        onChangeText("#inputNumberMove", "#cardMove", 2);
    });

    $("#styleCard").on("change", function () {
        changeCardColor();
    });

    $("#color").on("change", function () {
        changeCardColor();
    });

    $("#file").on("change", function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            $("#cardArt").attr("src", e.target.result);
        }
        reader.readAsDataURL(this.files[0]);
    });

    $('#save-image-button').click(function () {
        let element = document.getElementById('element-to-capture'),
            cardName = $('#inputTextName').val() ? $('#inputTextName').val() : 'sem_nome';

        htmlToImage.toPng(element)
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = cardName + '.png';
                link.href = dataUrl;
                link.click();
            });
    });

    // Salva o Arquivo em um JSON
    $("#save-button").click(function () {
        var data = {};
        $("input:not([type='file']), select, textarea").each(function () {
            data[$(this).attr("id")] = $(this).val();
        });

        var json = JSON.stringify(data);

        var blob = new Blob([json], { type: "application/json" });
        var url = URL.createObjectURL(blob);

        var a = document.createElement("a");
        a.download = $("#inputTextName").val() ? $("#inputTextName").val() : 'Card' + ".json";
        a.href = url;
        a.click();
    });

    // Carregar dados do JSON novamente na tela
    $("#file-load-input").on("change", function () {
        var input = $("#file-load-input")[0];

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var inputValues = JSON.parse(e.target.result);

                for (var key in inputValues) {
                    $("#" + key).val(inputValues[key]);
                    $("#" + key).trigger('change');
                }
            };

            reader.readAsText(input.files[0]);
        }
    });

});