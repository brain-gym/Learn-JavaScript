window.onload = function () {
    var el = document.getElementById('button');
    if (el) {
        el.addEventListener('click', function () {
            let background = randomHex();
            let font = randomFont();
            let randomWidth = Math.floor(Math.random() * (400 - 200) + 200);
            let randomHeight = Math.floor(Math.random() * (100 - 50) + 50);
            let randomRadius = Math.floor(Math.random() * (40 - 0) + 0);
            let randomShadowX = Math.floor(Math.random() * (7 - 0) + 0);
            let randomShadowY = Math.floor(Math.random() * (7 - 0) + 0);
            let randomBlur = Math.floor(Math.random() * (10 - 0) + 0);
            let randomSpread = Math.floor(Math.random() * (3 - 0) + 0);
            let box = document.getElementById('box');
            let input = document.getElementById('input');

            box.style.width = randomWidth + "px";
            box.style.height = randomHeight + "px";
            box.style.borderRadius = randomRadius + "px";
            box.style.background = background;
            box.style.setProperty('--x', randomShadowX + "px");
            box.style.setProperty('--y', randomShadowY + "px");
            box.style.setProperty('--blur', randomBlur + "px");
            box.style.setProperty('--spread', randomSpread + "px");
            input.style.fontFamily = font;

            returnStyles = () => {
                document.getElementById('styles').innerText = "width: " + randomWidth + "px; height: " + randomHeight + "px; border-radius: " + randomRadius + "px; box-shadow: " + randomShadowX + "px " + randomShadowY + "px " + randomBlur + "px " + randomSpread + "px rgba(195, 195, 195, 50); background: " + background + "; font-family: " + font + ";";
            }

            returnStyles();

        }, false)
    }
}

randomHex = () => {
    let color = '#';
    let letters = '789ABCD';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 7)];
    }
    return color;
}

//Web Safe Fonts
randomFont = () => {
    let randomFont;
    let fonts = ["Georgia, serif", "'Palatino Linotype', 'Book Antiqua', Palatino, serif,", "'Times New Roman', Times, serif", "Arial, Helvetica, sans-serif", "'Arial Black', Gadget, sans-serif", "'Comic Sans MS', cursive, sans-serif", "Impact, Charcoal, sans-serif", "'Lucida Sans Unicode', 'Lucida Grande', sans-serif", "Tahoma, Geneva, sans-serif", "'Trebuchet MS', Helvetica, sans-serif", "Verdana, Geneva, sans-serif", "'Courier New', Courier, monospace", "'Lucida Console', Monaco, monospace", "'Andale Mono', monospace", "'American Typewriter', serif", "Cambria, Georgia, serif", "'Rockwell Extra Bold', 'Rockwell Bold', monospace", "'Big Caslon', 'Book Antiqua', 'Palatino Linotype', Georgia, serif", "Geneva, Tahoma, Verdana, sans-serif"];

    randomFont = fonts[(Math.floor(Math.random() * 19))];

    return randomFont;

}
