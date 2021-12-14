$(function () {

    let nav = $('#nav');
    let navToggle = $('#navToggle');


    // fixed - header фиксированная шапка

    let header = $('#header__top');
    let intro = $('#header')
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    });


    // scroll - прокрутка страницы
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass('show');
        navToggle.removeClass('active');

        $('html, body').animate({
            scrollTop: elementOffset - 99 //смещение вверх
        }, 700); //время скрола
    });


    // nav toggle - открытие/закрытие меню

    navToggle.on('click', function (event) {
        event.preventDefault();
        nav.toggleClass('show');
        navToggle.toggleClass('active');
    });


    // закрытие меню при клике вне его содержимого

    $(document).click(function (e) {
        if (!navToggle.is(e.target) && !nav.is(e.target) && nav.has(e.target).length === 0) {
            nav.removeClass('show');
            navToggle.removeClass('active');
        };
    });


    // выподающий список

    let pArr = $('#pArr');
    let pib = document.querySelectorAll('.portfolio__btns--item');
    let tabsItems = document.querySelectorAll('.portfolio__list');

    pArr.on('click', function (event) {
        event.preventDefault();
        pib.forEach(function (item) {
            item.classList.add('show');
        });
    });


    pib.forEach(onTabClick);

    function onTabClick(item) {
        item.addEventListener('click', function () {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);

            if (!currentBtn.classList.contains('active')) {
                pib.forEach(function (item) {
                    item.classList.remove('active');
                    item.classList.remove('show');
                });
                tabsItems.forEach(function (item) {
                    item.classList.remove('active');
                });


                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            };
        });

    };

    document.querySelector('.portfolio__btns--item').click();


});