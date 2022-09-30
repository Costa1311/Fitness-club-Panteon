//! Burger
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
    popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
};

//! Swiper1
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,

    breakpoints: {
        1220: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1120: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 10,
            scrollbar: {
                dragSize: 200,
            },
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            scrollbar: {
                dragSize: 102,
            },
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: 200,
    },
});

//! Swiper2
const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    slidesPerView: 3,
    loop: false,

    breakpoints: {
        1220: {
            spaceBetween: 40,
        },
        900: {
            spaceBetween: 20,
            scrollbar: {
                dragSize: 200,
            },
        },
        768: {
            spaceBetween: 20,
            slidesPerView: 3,
        },
        480: {
            spaceBetween: 10,
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            scrollbar: {
                dragSize: 102,
            },
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar2',
        dragSize: 200,
    },
});

//! Swiper3
const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    slidesPerView: 1,
    loop: false,

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar3',
        dragSize: 102,
    },
});

//! Swiper4
const swiper4 = new Swiper('.swiper4', {
    // Optional parameters
    slidesPerView: 1,
    loop: false,

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar4',
        dragSize: 102,
    },
});

//! Swiper5
const swiper5 = new Swiper('.swiper5', {
    // Optional parameters
    slidesPerView: 3,
    loop: false,

    breakpoints: {
        1220: {
            spaceBetween: 40,
        },
        900: {
            spaceBetween: 20,
        },
        768: {
            spaceBetween: 20,
            slidesPerView: 3,
        },
        480: {
            spaceBetween: 10,
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next5',
        prevEl: '.swiper-button-prev5',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar5',
        dragSize: 102,
    },
});




//! Popup
const openPopup = document.querySelector('#open_popup');
const openPopup2 = document.querySelector('#open_popup2');
const openPopup3 = document.querySelector('#open_popup3');
const openPopup4 = document.querySelector('#open_popup4');
const openPopup5 = document.querySelector('#open_popup5');
const openPopup6 = document.querySelector('#open_popup6');
const closePopup = document.querySelector('.pop-up__close');
const popUp = document.querySelector('.pop-up');

openPopup.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
    document.body.style.overflow = 'hidden';
});

openPopup2.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
    document.body.style.overflow = 'hidden';
});

openPopup3.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
    document.body.style.overflow = 'hidden';
});

openPopup4.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
    document.body.style.overflow = 'hidden';
});

openPopup5.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
    document.body.style.overflow = 'hidden';
});

openPopup6.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closePopup.addEventListener('click', () => {
    popUp.classList.remove('active');
    document.body.style.overflow = '';
});



