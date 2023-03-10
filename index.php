<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Sylleon Card Maker</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/font.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.svg.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html-to-image/1.11.11/html-to-image.min.js"></script>
    <script src="js/script.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet">
</head>

<body>
    <div class="container">
        <div class="left-side">
            <input type="text" name="nome" id="inputTextName" placeholder="Nome" maxlength="100">
            <input type="number" name="level" id="inputTextLevel" placeholder="Nível" maxlength="3">
            <input type="file" id="file" name="file" accept="image/*">
            <select name="style" id="styleCard">
                <option value="">Selecione uma Tipo</option>
                <option value="creature">Criatura</option>
            </select>
            <select name="cor" id="color">
                <option value="">Selecione uma Cor</option>
                <option value="red">Vermelho</option>
                <option value="orange">Laranja</option>
                <option value="yellow">Amarelo</option>
                <option value="green">Verde</option>
                <option value="blue">Azul</option>
                <option value="purple">Roxo</option>
            </select>
            <input type="text" name="tipo" id="inputTextType" placeholder="Tipo" maxlength="200">
            <select name="skill" id="skill">
                <option value="">Selecione uma Habilidade</option>
            </select>
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
            <button id="save-image-button">Salvar como Imagem</button>
            <button id="save-button">Salvar para Edição</button>
            <div>
                <label for="alcance">Carregar para Edição:</label>
                <input type="file" id="file-load-input" name="file-load" accept=".json">
            </div>
        </div>
        <div class="right-side">
            <div class="container">
                <div id="element-to-capture">
                    <img id="cardArt" src="img/black.png" alt="">
                    <img id="cardBase" src="" alt="">
                    <img id="cardLine" src="" alt="">
                    <img id="cardIcon" src="" alt="">
                    <div class="div-overlay">
                        <div class="text-over-image" id="cardTextName">NOME</div>
                        <div class="text-over-image" id="cardTextType"></div>
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