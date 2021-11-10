function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

$(document).ready(function () {
    $('#MyButton').click(function () {
        console.log(map1);

    });
});

var map1 = {
    'Заголовок 1':
        [{ 'Название 1': 'Значение 1' },
        { 'Название 2': 'Значение 2' }],
    'Заголовок 2':
        [{ 'Название 1': 'Значение 1' },
        { 'Название 2': 'Значение 2' }],
}

var rebuild = function () {

}