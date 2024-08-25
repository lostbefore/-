function init() {
    let elItem = document.querySelectorAll('.eight_diagrams_item'),
        yin_yang = document.querySelectorAll('.yin_yang'),
        radius = document.querySelector('.eight_diagrams').clientWidth / 2,
        itemLen = elItem.length,
        pieceDeg = 360 / itemLen;

    for (let i = 0; i < itemLen; i++) {
        let t = i * pieceDeg,
            x = undefined,
            y = undefined;

        yin_yang[i].style.transform = `rotate(${t}deg)`;

        t = (Math.PI / 180) * t;
        x = Math.sin(t) * radius;
        y = -Math.cos(t) * radius;

        elItem[i].style.transform = `translate(${x}px, ${y}px)`;
    }
}

init();
