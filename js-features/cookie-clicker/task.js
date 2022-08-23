const image = document.getElementById('cookie');
const timer = Date.now();
let flag = true;
let counter = null;

function sizeChange() {
    const clickTimer = Date.now();
    counter++;

    if (flag) {
        flag = false;
        image.width += 50;
    }
    else {
        flag = true;
        image.width -= 50;
    }
    document.getElementById('clicker__counter').textContent = counter + '\n' + 'Средняя скорость клика: ' + ((clickTimer - timer) / 1000).toFixed(2) + ' сек.';
}

image.onclick = sizeChange;