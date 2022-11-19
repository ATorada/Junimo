let contador = 1;
let estelar = null;

localStorage.setItem('GeolocalizaciónAlboraya', "39.506532, -0.347120");

async function init() {
    let visible = true;
    let fruta = null;
    audios = document.querySelectorAll('audio');

    let frases_normales = [
        ["FELIS CUMPLEAÑOS", 10],
        ["Holi", 2],
        ["¡Tengo hambre!", 8],
        ["Me he pasado con el café", 13],
        ["De chill 🤙🏻", 5],
        ["¡Dame de comer!", 9],
        ["¡Soy un junimo, no una manzana!", 16],
        ["ジオロケーション アルボラヤ ~ 🎶", 16]];

    let frases_arcoiris = [
        ["¡Ni la senda arcoiris!", 10],
        ["M̸̢̠̝̬̺̯̭̳͕̪͠ͅâ̶̟̣͚̣̺̘̤̔̓̈r̴͈̯̟̲̠͐̈̋́̾̓͗̿͝ī̵̧̦̜̖͉̠̩̠̤̰͛̏̔͊͒̐͂͒ó̷̪̺̺̮͇̍̐̀́́̎̕͘ͅͅ ̷̹͍͎͍̤̟̠̩̺̦̺̈̇̎̈̉̀̇̈̏̆͊̈̕̚͜ť̵͇̝̩̦̥̥͙̜͒̽̑̎͒̃̊̏̐̆̕͜i̷̮͓̙͕͋̄͊̋̕͜͠ͅȩ̸̘͍͓̹̱̬̅͑́̔͑m̶͇͉̮͊͑͂b̶̢̜̙̭͕̥͑͒̉̄̈́̉̈́̂̑͛̐̑̒̆͠l̸̥̩̹̻̪̥̼͎̬̯̿͒̅͝ă̷̧̺̱̣̱̜̬̰̣̥̰̹͕̆̐͋̒͑͆̇͊̓̈́̌͜͝", 7],
        ["ඞ Sus ඞ", 5],
    ];


    let frases = frases_normales;

    setInterval(function () {
        if (visible) {
            bocadillo.style.opacity = 0;
        } else {
            let random = Math.floor(Math.random() * frases.length);
            bocadillo.innerText = frases[random][0];
            bocadillo.style.width = frases[random][1] + "rem";
            bocadillo.style.opacity = 1;
        }
        visible = !visible;
    }, 4000);

    setInterval(function () {
        let random_dir = Math.floor(Math.random() * 4);
        let random_moves = Math.floor(Math.random() * 9) + 1;

        if (random_dir == 0) {
            if (parseInt(junimo.style.top) - 20 >= 0) {
                for (let index = 0; index < random_moves; index++) {
                    window.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'd' }));
                }
            }
        }

        if (random_dir == 1) {
            if (parseInt(junimo.style.top) + 20 <= 240) {
                for (let index = 0; index < random_moves; index++) {
                    window.dispatchEvent(new KeyboardEvent('keydown', { 'key': 's' }));
                }
            }
        }

        if (random_dir == 2) {
            if (parseInt(junimo.style.left) - 20 >= 0) {
                for (let index = 0; index < random_moves; index++) {
                    window.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'a' }));
                }
            }
        }

        if (random_dir == 3) {
            if (parseInt(junimo.style.left) + 20 <= 880) {
                for (let index = 0; index < random_moves; index++) {
                    window.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'w' }));
                }
            }
        }
    }, 200);

    contenedor.style.top = 400 + 'px';
    contenedor.style.left = 500 + 'px';

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });

    junimo.style.left = Math.floor(Math.random() * 840) + 'px';
    junimo.style.top = + Math.floor(Math.random() * 220) + 'px';


    window.addEventListener('keydown', (event) => {
        const { style } = junimo;

        style.top = contenedor.style.top + 'px';
        style.left = contenedor.style.left + 'px';

        //En este caso se usa Key pues es una propiedad en uso no como KeyCode que ya no se usa
        switch (event.key) {
            case 'w':
            case 'ArrowUp':
                if (parseInt(style.top) - 20 >= 0) {
                    style.top = (parseInt(style.top) - 20) + "px";
                }
                break;
            case 's':
            case 'ArrowDown':
                if (parseInt(style.top) + 20 <= 240) {
                    style.top = (parseInt(style.top) + 20) + "px";
                }
                break;
            case 'a':
            case 'ArrowLeft':
                if (parseInt(style.left) - 20 >= 0) {
                    style.left = (parseInt(style.left) - 20) + "px";
                }
                break;
            case 'd':
            case 'ArrowRight':
                if (parseInt(style.left) + 20 <= 880) {
                    style.left = (parseInt(style.left) + 20) + "px";
                }
                break;
            case ' ':
                junimo.style.transform = "rotate(" + contador * 360 + "deg)";
                contador++;
                break;

        }

        junimo.style.transform = "rotate(" + contador * -10 + "deg)";
        bocadillo.style.top = parseInt(style.top) + 350 + "px";
        bocadillo.style.left = parseInt(style.left) + 490 + "px";
        contador++;
    });

    junimo.addEventListener('click', () => {
        if (frutas.value == 'cristal') {
            frases = frases_normales;
            junimo.style.filter = "hue-rotate(" + 1 * 90 + "deg)";
            clearInterval(estelar);
            estelar = null;
            if (fruta == 'cristal') {
                [].forEach.call(audios, function (audio) {
                    audio.play();
                });
                bocadillo.innerText = "¡No quiero más fruta cristal!";
                bocadillo.style.width = "15rem";
            }
            fruta = 'cristal';
        }
        if (frutas.value == 'uva') {
            frases = frases_normales;
            junimo.style.filter = "hue-rotate(" + 1 * 180 + "deg)";
            clearInterval(estelar);
            estelar = null;
            if (fruta == 'uva') {
                [].forEach.call(audios, function (audio) {
                    audio.play();
                });
                bocadillo.innerText = "¡No quiero más uvas!";
                bocadillo.style.width = "11rem";
            }
            fruta = 'uva';
        }
        if (frutas.value == 'cereza') {
            frases = frases_normales;
            junimo.style.filter = "hue-rotate(" + 1 * 260 + "deg)";
            clearInterval(estelar);
            estelar = null;
            if (fruta == 'cereza') {
                [].forEach.call(audios, function (audio) {
                    audio.play();
                });
                bocadillo.innerText = "¡No quiero más cerezas!";
                bocadillo.style.width = "12rem";
            }
            fruta = 'cereza';
        }
        if (frutas.value == 'cactus') {
            frases = frases_normales;
            junimo.style.filter = "hue-rotate(" + 1 * 360 + "deg)";
            clearInterval(estelar);
            estelar = null;
            if (fruta == 'cactus') {
                [].forEach.call(audios, function (audio) {
                    audio.play();
                });
                bocadillo.innerText = "¡No quiero más cactus!";
                bocadillo.style.width = "13rem";
            }
            fruta = 'cactus';
        }
        if (frutas.value == 'estelar') {
            frases = frases_arcoiris;
            if (estelar == null) {
                estelar = setInterval(() => {
                    junimo.style.filter = "hue-rotate(" + contador * 360 + "deg)";
                    contador++;
                }, 1000);
            }

            if (fruta == 'estelar') {
                [].forEach.call(audios, function (audio) {
                    audio.play();
                });
                bocadillo.innerText = "¡No quiero más fruta estelar!";
                bocadillo.style.width = "14rem";
            }
            fruta = 'estelar';
        }
    });

    frutas.addEventListener('change', () => {
        cursor.src = "img/" + frutas.value + '.png';
    });

}

