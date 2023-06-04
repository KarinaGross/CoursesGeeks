document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById('formInput');
    var button = document.getElementById('subscribeButton');

    input.onfocus = function () {
        this.placeholder = 'Email@gmail.com';
    };

    input.onblur = function () {
        this.placeholder = 'Email';
    };

    button.onclick = function (event) {
        event.preventDefault();
        input.placeholder = 'Thanks for subscribing!';
    };
});

document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById('formInputMain');
    var button = document.getElementById('subscribeButtonMain');

    input.onfocus = function () {
        this.placeholder = 'Email@gmail.com';
    };

    input.onblur = function () {
        this.placeholder = 'Email';
    };

    button.onclick = function (event) {
        event.preventDefault();
        input.placeholder = 'Thanks for subscribing!';
    };
});

// document.getElementById('infoBlock').addEventListener('click', function () {
//     // window.location.href = '#';
//     alert('Link is clicked!');
// });

document.addEventListener("DOMContentLoaded", function () {
    var infoBlocks = document.querySelectorAll('.infoBlock');

    infoBlocks.forEach(function (block) {
        block.addEventListener('click', function () {
            var url = block.dataset.url; // Получаем значение атрибута data-url
            window.location.href = url; // Перенаправляем пользователя
            // alert('Link is clicked!');
        });
    });
});


