var onChangeText = function (textField, field, pad) {
    let value = $(textField).val();

    if (pad) {
        value = value.padStart(pad, 0);
    }

    $(field).html(value);
}

$(document).ready(function () {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

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

    $("#file").on("change", function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            $("#cardArt").attr("src", e.target.result);
        }
        reader.readAsDataURL(this.files[0]);
    });

    $('#save-image-button').click(function () {
        $(".div-overlay").css("top", "593px");//GAMBI
        $("#cardTextType").css("top", "35px");//GAMBI
        $(".number").css("top", "777px");

        html2canvas($('#element-to-capture')[0]).then(function (canvas) {
            var link = document.createElement('a'),
                cardName = $("#inputTextName").val() ? $("#inputTextName").val() : 'Card';

            link.download = cardName + ".png";
            link.href = canvas.toDataURL();
            link.click();
        });

        $(".number").css("top", "772px");
        $("#cardTextType").css("top", "40px");//GAMBI
        $(".div-overlay").css("top", "0px");
    });

    $("#save-button").click(function () {
        var data = {};
        $("input").not("[type='file']").each(function () {
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
    $("#load-button").on("change", function () {
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


