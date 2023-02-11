<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Minha Página</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    <script src="js/script.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet">
</head>

<body>
    <div class="container">
        <div class="left-side">
            <input type="text" name="nome" id="inputTextName" placeholder="Nome" maxlength="100">
            <input type="file" id="file" name="file">
            <select name="icon">
                <option value="">Selecione um Ícone</option>
            </select>
            <select name="cor">
                <option value="">Selecione uma Cor</option>
                <option value="red">Vermelho</option>
                <option value="gree">Verde</option>
                <option value="blue">Azul</option>
            </select>
            <input type="text" name="tipo" id="inputTextType" placeholder="Tipo" maxlength="200">
            <textarea name="descricao" id="inputTextDesc" placeholder="Descrição"></textarea>
            <div class="numeric-fields">
                <div class="field">
                    <label for="poder">Ataque:</label>
                    <input type="number" name="poder" id="inputNumberPower">
                </div>
                <div class="field">
                    <label for="defesa">Defesa:</label>
                    <input type="number" name="defesa" id="inputNumberDef">
                </div>
                <div class="field">
                    <label for="movimento">Movimento:</label>
                    <input type="number" name="movimento" id="inputNumberMove">
                </div>
                <div class="field">
                    <label for="alcance">Distância:</label>
                    <input type="number" name="alcance" id="inputNumberRange">
                </div>
            </div>
            <button id="save-image-button">Salvar como imagem</button>
        </div>
        <div class="right-side">
            <div class="container">
                <div id="element-to-capture">
                    <img src="img/black_img.png" alt="card_art" id="cardArt">
                    <img src="img/back_img.svg" alt="image_back">
                    <img src="img/det_img.svg" alt="image_det">
                    <div class="div-overlay">
                        <div class="text-over-image" id="cardTextName">NOME</div>
                        <div class="text-over-image" id="cardTextDesc">DESCRIÇÃO</div>
                        <div class="text-over-image number" id="cardPower">00</div>
                        <div class="text-over-image number" id="cardDef">00</div>
                        <div class="text-over-image number" id="cardMove">00</div>
                        <div class="text-over-image number" id="cardRange">00</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>