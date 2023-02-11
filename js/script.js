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

    $("input[type='file']").on("change", function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            $("#cardArt").attr("src", e.target.result);
        }
        reader.readAsDataURL(this.files[0]);
    });

    $('#save-image-button').click(function () {
        $(".div-overlay").css("top", "593px");//GAMBI
        $("#cardTextType").css("top", "33px");//GAMBI
        $(".number").css("top", "777px");

        html2canvas($('#element-to-capture')[0]).then(function (canvas) {
            var link = document.createElement('a');
            link.download = "captura.png";
            link.href = canvas.toDataURL();
            link.click();
        });

        $(".number").css("top", "772px");
        $(".div-overlay").css("top", "0px");
        $("#cardTextType").css("top", "38px");//GAMBI
    });

});


